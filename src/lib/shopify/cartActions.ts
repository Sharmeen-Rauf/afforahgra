'use server';

import { cookies } from 'next/headers';
import { shopifyFetch } from './shopifyClient';
import { 
  createCartMutation, 
  addToCartMutation, 
  removeFromCartMutation, 
  updateCartMutation,
  cartFragment
} from './queries';
import { revalidateTag } from 'next/cache';

const CART_ID_COOKIE = 'shopify_cart_id';

export async function getCart() {
  const cartId = (await cookies()).get(CART_ID_COOKIE)?.value;

  if (!cartId) {
    return null;
  }

  try {
    const res = await shopifyFetch<{
      data: {
        cart: any;
      };
    }>({
      query: `
        query getCart($cartId: ID!) {
          cart(id: $cartId) {
            ...cart
          }
        }
        ${cartFragment}
      `,
      variables: { cartId },
      cache: 'no-store',
    });

    return res.body.data.cart;
  } catch (e) {
    console.error('Error fetching cart:', e);
    return null;
  }
}

export async function addToCart(variantId: string) {
  let cartId = (await cookies()).get(CART_ID_COOKIE)?.value;
  let cart;

  if (!cartId) {
    const res = await shopifyFetch<{
      data: { cartCreate: { cart: any } };
    }>({
      query: createCartMutation,
      variables: {
        input: {
          lines: [{ merchandiseId: variantId, quantity: 1 }],
        },
      },
      cache: 'no-store',
    });
    cart = res.body.data.cartCreate.cart;
    cartId = cart.id;
    (await cookies()).set(CART_ID_COOKIE, cartId!);
  } else {
    const res = await shopifyFetch<{
      data: { cartLinesAdd: { cart: any } };
    }>({
      query: addToCartMutation,
      variables: {
        cartId,
        lines: [{ merchandiseId: variantId, quantity: 1 }],
      },
      cache: 'no-store',
    });
    cart = res.body.data.cartLinesAdd.cart;
  }

  return cart;
}

export async function removeFromCart(lineId: string) {
  const cartId = (await cookies()).get(CART_ID_COOKIE)?.value;

  if (!cartId) return;

  const res = await shopifyFetch<{
    data: { cartLinesRemove: { cart: any } };
  }>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds: [lineId],
    },
    cache: 'no-store',
  });

  return res.body.data.cartLinesRemove.cart;
}

export async function updateCartQuantity(lineId: string, quantity: number) {
  const cartId = (await cookies()).get(CART_ID_COOKIE)?.value;

  if (!cartId) return;

  const res = await shopifyFetch<{
    data: { cartLinesUpdate: { cart: any } };
  }>({
    query: updateCartMutation,
    variables: {
      cartId,
      lines: [{ id: lineId, quantity }],
    },
    cache: 'no-store',
  });

  return res.body.data.cartLinesUpdate.cart;
}
