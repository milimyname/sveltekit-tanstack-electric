import { PGlite } from '@electric-sql/pglite';
import { electricSync, type SyncNamespaceObj } from '@electric-sql/pglite-sync';
import { live } from '@electric-sql/pglite/live';

export type PGliteWithElectric = PGlite & {
	electric: SyncNamespaceObj;
};

export class PGliteService {
	public db = $state<PGliteWithElectric | null>(null);

	async initialize(): Promise<PGliteWithElectric | null> {
		if (this.db) return this.db;

		try {
			const pg = await PGlite.create({
				dataDir: 'idb://planning-poker-db',
				extensions: {
					electric: electricSync({
						debug: true
					}),
					live
				}
			});

			await this.createSchema(pg);

			this.db = pg;
			return pg;
		} catch (error) {
			console.error('Failed to initialize PGlite:', error);
			throw error;
		}
	}

	async createSchema(pg: PGlite): Promise<void> {
		try {
			// First create enum types
			await pg.exec(`
        DO $$
        BEGIN
          IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'game_status') THEN
            CREATE TYPE game_status AS ENUM ('created', 'voting', 'revealed', 'finished');
          END IF;

          IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'session_status') THEN
            CREATE TYPE session_status AS ENUM ('active', 'revealed', 'completed');
          END IF;
        END $$;
      `);
		} catch (error) {
			console.error('Error creating enum types:', error);
		}

		// Create tables - keeping your existing table creation code
		const tables = [
			{
				name: 'games',
				sql: `
          CREATE TABLE IF NOT EXISTS games (
            id UUID PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            cards VARCHAR(255) NOT NULL,
            status VARCHAR(20) NOT NULL DEFAULT 'created',
            auto_reveal BOOLEAN DEFAULT false
          );
        `
			},
			{
				name: 'players',
				sql: `
          CREATE TABLE IF NOT EXISTS players (
            id UUID PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `
			},
			// Add the rest of your tables here following the same pattern
			{
				name: 'player_games',
				sql: `
          CREATE TABLE IF NOT EXISTS player_games (
            id UUID PRIMARY KEY,
            player_id UUID NOT NULL,
            game_id UUID NOT NULL,
            is_creator BOOLEAN DEFAULT false,
            FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
            FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
          );
        `
			},
			{
				name: 'sessions',
				sql: `
          CREATE TABLE IF NOT EXISTS sessions (
            id UUID PRIMARY KEY,
            game_id UUID NOT NULL,
            status VARCHAR(20) DEFAULT 'active',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
          );
        `
			},
			{
				name: 'votes',
				sql: `
          CREATE TABLE IF NOT EXISTS votes (
            id UUID PRIMARY KEY,
            session_id UUID NOT NULL,
            player_id UUID NOT NULL,
            estimate INTEGER,
            emoji VARCHAR(255),
            voted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE,
            FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE
          );
        `
			},
			{
				name: 'reactions',
				sql: `
          CREATE TABLE IF NOT EXISTS reactions (
            id UUID PRIMARY KEY,
            session_id UUID NOT NULL,
            player_id UUID NOT NULL,
            target_player_id UUID NOT NULL,
            emoji VARCHAR(10) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE,
            FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE,
            FOREIGN KEY (target_player_id) REFERENCES players(id) ON DELETE CASCADE
          );
        `
			}
		];

		for (const table of tables) {
			try {
				await pg.exec(table.sql);
				// console.log(`${table.name} table created successfully`);
			} catch (error) {
				console.error(`Error creating ${table.name} table:`, error);
			}
		}
	}

	async initTableSync(table: string, primaryKey: string[] = ['id']) {
		if (!this.db) throw new Error('PGlite instance not initialized');

		return this.db.electric.syncShapeToTable({
			shape: {
				url: new URL(
					`/v1/shape`,
					typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173'
				).href,
				params: { table }
			},
			table,
			primaryKey,
			shapeKey: `${table}-sync`, // For persisting sync state
			onInitialSync: () => {
				console.log(`Initial sync complete for ${table}`);
			}
		});
	}

	async close() {
		if (this.db) {
			await this.db.close();
			this.db = null;
		}
	}
}

// Create a constant for context key
export const PGLITE_KEY = Symbol('pglite-key');

export const pgliteInstance = new PGliteService();
