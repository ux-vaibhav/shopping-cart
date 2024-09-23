import { Product } from "./Product";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartProps {
  items: CartItem[];
  onRemove: (productId: number) => void;
}
