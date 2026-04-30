import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  urduDesc?: string;
}

export interface CartItem extends Product {
  quantity: number;
  lineId?: string;
  variantId?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  cartId: string | null;
  checkoutUrl: string | null;
  setCart: (cart: any) => void;
  setCartId: (id: string) => void;
  toggleCart: () => void;
  addItem: (product: Product, variantId?: string) => void;
  removeItem: (id: string, lineId?: string) => void;
  updateQuantity: (id: string, quantity: number, lineId?: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0,
  cartId: null,
  checkoutUrl: null,

  setCartId: (id) => set({ cartId: id }),
  
  setCart: (cart) => {
    if (!cart) return;
    
    const items = cart.lines.edges.map((edge: any) => {
      const line = edge.node;
      const product = line.merchandise.product;
      const variant = line.merchandise;
      
      return {
        id: product.id,
        lineId: line.id,
        variantId: variant.id,
        name: product.title,
        price: parseFloat(variant.price.amount),
        image: product.images.edges[0]?.node.url,
        quantity: line.quantity,
        category: 'Archive', // Default
      };
    });

    set({
      items,
      totalItems: cart.totalQuantity,
      totalPrice: parseFloat(cart.cost.totalAmount.amount),
      cartId: cart.id,
      checkoutUrl: cart.checkoutUrl
    });
  },

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (product, variantId) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      
      let newItems;
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newItems = [...state.items, { ...product, quantity: 1 }];
      }

      const newTotalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);
      const newTotalPrice = newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      return { items: newItems, totalItems: newTotalItems, totalPrice: newTotalPrice };
    }),

  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      const newTotalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);
      const newTotalPrice = newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      return { items: newItems, totalItems: newTotalItems, totalPrice: newTotalPrice };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        const newItems = state.items.filter((item) => item.id !== id);
        const newTotalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);
        const newTotalPrice = newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return { items: newItems, totalItems: newTotalItems, totalPrice: newTotalPrice };
      }

      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      
      const newTotalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);
      const newTotalPrice = newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      return { items: newItems, totalItems: newTotalItems, totalPrice: newTotalPrice };
    }),

  clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
}));
