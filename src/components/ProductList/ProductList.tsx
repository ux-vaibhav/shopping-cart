import React, { useState } from "react";
import { MessageProps, Product, ProductListProps } from "../../interfaces";
import "./ProductList.css";
import { Button } from "../Button";
import Message from "../ErrorMessage/Message";

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  const [message, setMessage] = useState<MessageProps | null>(null);

  const handleAddToCart = (product: Product) => {
    setMessage(null)
    onAddToCart(product);
    showMessage(`${product.title} is added into the cart!`);
  };

  const showMessage = (msg: string) => {
    setMessage({ type: "success", message: msg });
  };
  return (
    <div className="product-list">
      <div className="container">
        <h2>Products</h2>
        <ul>
          {message && <Message type="success" message={message.message} />}
          {products.map((product) => (
            <li key={product.id} id={product.id.toString()} className="card">
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
              </div>
              <Button
                onClick={() => handleAddToCart(product)}
                label="Add to Cart"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
