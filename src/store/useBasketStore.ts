import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface BasketStore {
  isOpen: boolean;
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  setCartItems: (items: CartItem[]) => void; 
}


//негизги функциалар
export const useBasketStore = create<BasketStore>((set) => ({
  isOpen: false,
  cartItems: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  // товарды кошуу
  addItem: (item: CartItem) => set((state) => {
    const updatedItems = [...state.cartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); 
    return { cartItems: updatedItems };
  }),
  // товарда очуруу
  removeItem: (id: number) => set((state) => {
    const updatedItems = state.cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); 
    return { cartItems: updatedItems };
  }),
  setCartItems: (items: CartItem[]) => set({ cartItems: items }), 
}));
