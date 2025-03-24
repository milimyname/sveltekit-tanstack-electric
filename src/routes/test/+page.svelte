<script>
	import { pgliteInstance } from '$lib/pglite-setup.svelte';
	let dbStatus = $derived(pgliteInstance.db);

	$inspect('DB Status:', dbStatus);
</script>

<div>hI</div>
