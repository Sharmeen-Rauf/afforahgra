'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cart';
import { getCart } from '@/lib/shopify/cartActions';

export default function CartSync() {
  const { setCart } = useCartStore();

  useEffect(() => {
    async function syncCart() {
      const cart = await getCart();
      if (cart) {
        setCart(cart);
      }
    }
    syncCart();
  }, [setCart]);

  return null;
}
