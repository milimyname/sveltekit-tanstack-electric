import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Add CORS headers to all responses
	const response = await resolve(event);
	response.headers.set('Access-Control-Allow-Origin', '*');
	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

	return response;
};