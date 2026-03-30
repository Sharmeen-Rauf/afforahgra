import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  toggleCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);
      let newItems;
      if (existing) {
        newItems = state.items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newItems = [...state.items, { ...product, quantity: 1 }];
      }
      return {
        items: newItems,
        totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    }),
  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((i) => i.id !== id);
      return {
        items: newItems,
        totalItems: newItems.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    }),
  clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
}));
