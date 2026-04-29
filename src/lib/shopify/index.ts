import { shopifyFetch } from './shopifyClient';
import { getProductsQuery, getProductQuery, getCollectionsQuery } from './queries';

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        url: string;
        altText: string;
        width: number;
        height: number;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
  metafields: {
    key: string;
    value: string;
  }[];
}

export async function getProducts(first = 20, query = '') {
  const res = await shopifyFetch<{
    data: {
      products: {
        edges: { node: ShopifyProduct }[];
      };
    };
  }>({
    query: getProductsQuery,
    variables: { first, query },
  });

  return res.body.data.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle: string) {
  const res = await shopifyFetch<{
    data: {
      product: ShopifyProduct;
    };
  }>({
    query: getProductQuery,
    variables: { handle },
  });

  return res.body.data.product;
}

export async function getCollections() {
  const res = await shopifyFetch<{
    data: {
      collections: {
        edges: {
          node: {
            id: string;
            handle: string;
            title: string;
            description: string;
            image?: {
              url: string;
              altText: string;
            };
          };
        }[];
      };
    };
  }>({
    query: getCollectionsQuery,
  });

  return res.body.data.collections.edges.map((edge) => edge.node);
}

// Helper to map Shopify product to the app's internal Product type
export function mapShopifyToProduct(shopifyProduct: ShopifyProduct) {
  const urduDescMeta = shopifyProduct.metafields.find(m => m.key === 'urdu_description');
  
  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    name: shopifyProduct.title,
    category: 'Shopify', // This could be mapped from collections
    price: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
    image: shopifyProduct.images.edges[0]?.node.url || '',
    colors: [], // This could be extracted from variants or options
    urduDesc: urduDescMeta ? urduDescMeta.value : shopifyProduct.description,
    description: shopifyProduct.description,
    variants: shopifyProduct.variants.edges.map(e => e.node),
  };
}
