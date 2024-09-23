import { CartItem } from "./Cart";

export interface HeaderProps {
    cart: CartItem[];
    removeFromCart: (id: number) => void;
  }
  