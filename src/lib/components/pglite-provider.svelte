<script lang="ts">
	import { pgliteInstance } from '$lib/pglite-setup.svelte';

	let error = $state<string | null>(null);
	let loading = $state(true);

	$effect(() => {
		pgliteInstance.initialize().catch((err) => {
			error = err.message;
		});
	});
</script>

{#if loading}
	<div>Initializing database...</div>
{:else if error}
	<div class="error-message">
		<p>Database initialization error: {error}</p>
	</div>
{/if}
