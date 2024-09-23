import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import { ProductList } from "./components/ProductList";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import { CartItem, Product } from "./interfaces";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  return (
    <div className="App">
      <Header cart={cart} removeFromCart={removeFromCart} />
      {loading ? (
        <Loader />
      ) : (
        <ProductList products={products} onAddToCart={addToCart} />
      )}
    </div>
  );
};

export default App;
