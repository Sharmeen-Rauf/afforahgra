const apiVersion = '2024-01'; // or current version

export async function shopifyFetch<T>({
  query,
  variables = {},
  cache = 'force-cache',
}: {
  query: string;
  variables?: any;
  cache?: RequestCache;
}): Promise<{ status: number; body: T } | never> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !storefrontAccessToken) {
    console.warn('Shopify domain or access token is missing from environment variables.');
    // Return empty results instead of failing the build
    return {
      status: 200,
      body: { data: {} } as any
    };
  }

  try {
    const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;
    
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache,
      next: {
        revalidate: 3600, // Revalidate every hour
      }
    });

    const body = await result.json();

    if (body.errors) {
      console.error('Shopify API Errors:', body.errors);
      // Return empty results instead of failing the build
      return {
        status: result.status,
        body: { data: {} } as any
      };
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    console.error('Shopify fetch error:', e);
    throw {
      error: e,
      query,
    };
  }
}
