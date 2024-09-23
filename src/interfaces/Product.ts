export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}
