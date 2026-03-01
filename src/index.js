// index.js
// Cloudflare Worker entry point

import { Info, generate, generatorList, corsHeaders } from './genpwd.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Routing
    switch (path) {
      case '/':
        return new Response(JSON.stringify({ about: Info.aboutText() }), {
          status: 200,
          headers: corsHeaders,
        });

      case '/generate':
        return generate(url.searchParams);

      case '/generators':
        return generatorList();

      default:
        return new Response(JSON.stringify({ error: 'Not found' }), {
          status: 404,
          headers: corsHeaders,
        });
    }
  },
};
