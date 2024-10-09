import { getShapeStream } from '$lib/electric-store';
import { matchStream } from '$lib/match-stream';
import { type InsertGame } from '$lib/validators';
import { BASE_URL, BASE_API_URL } from '$lib/constants';

export const gameShape = () => ({
	url: new URL(`/v1/shape/games`, BASE_URL).href
});

export async function createGame(game: InsertGame) {
	const gamesStream = getShapeStream<InsertGame>(gameShape());

	const findUpdatePromise = matchStream({
		stream: gamesStream,
		operations: ['insert'],
		matchFn: ({ message }) => message.value.id === game.id
	});

	const fetchPromise = fetch(`${BASE_API_URL}/games`, {
		method: `POST`,
		body: JSON.stringify(game)
	});
	return await Promise.all([findUpdatePromise, fetchPromise]);
}

export async function clearGames() {
	const gamesStream = getShapeStream(gameShape());
	const findUpdatePromise = matchStream({
		stream: gamesStream,
		operations: [`delete`],
		matchFn: () => true
	});
	const fetchPromise = fetch(`${BASE_API_URL}/games`, { method: `DELETE` });
	return await Promise.all([findUpdatePromise, fetchPromise]);
}