const productFragment = `
  fragment product on Product {
    id
    handle
    title
    description
    descriptionHtml
    availableForSale
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
        }
      }
    }
    metafields(identifiers: [{namespace: "custom", key: "urdu_description"}]) {
      key
      value
    }
  }
`;

export const getProductsQuery = `
  query getProducts($query: String, $first: Int) {
    products(first: $first, query: $query) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductQuery = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export const getCollectionsQuery = `
  query getCollections {
    collections(first: 20) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            url
            altText
          }
        }
      }
    }
  }
`;

export const cartFragment = `
  fragment cart on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
              product {
                id
                handle
                title
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const createCartMutation = `
  mutation createCart($input: CartInput) {
    cartCreate(input: $input) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const addToCartMutation = `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const removeFromCartMutation = `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const updateCartMutation = `
  mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
