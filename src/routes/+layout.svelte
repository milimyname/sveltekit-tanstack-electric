<script lang="ts">
	import '../app.css';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { Toaster } from '$lib/components/ui/sonner';
	import { browser } from '$app/environment';
	import PGliteProvider from '$lib/components/pglite-provider.svelte';

	let { data, children } = $props();
</script>

<Toaster />

{#if browser}
	<PGliteProvider />
{/if}

<QueryClientProvider client={data.queryClient}>
	{@render children?.()}
	<SvelteQueryDevtools />
</QueryClientProvider>
