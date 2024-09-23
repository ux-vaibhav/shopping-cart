import React, { useState } from "react";

import { CartProps, MessageProps, Product } from "../../interfaces";
import "./Cart.css";
import { Button } from "../Button";
import Message from "../ErrorMessage/Message";

const Cart: React.FC<CartProps> = ({ items, onRemove }) => {
  const [message, setMessage] = useState<MessageProps | null>(null);

  const handleRemove = (product: Product) => {
    setMessage(null);
    onRemove(product.id);
    showMessage(`${product.title} is removed from cart!`, "error");
  };

  const showMessage = (
    msg: MessageProps["message"],
    type: MessageProps["type"]
  ) => {
    setMessage({ type: type, message: msg });
  };

  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {items.length !== 0 && (
        <div className="cart-dialog" id="cartDialog" role="dialog">
          <div className="cart">
            <p> {items.length} Items ready for checkout</p>
            <ul>
              {items.map((item) => (
                <li key={item.product.id} className="card">
                  <div>
                    <h4> {item.product.title}</h4>
                    <p>Quantity {item.quantity}</p>
                    <h4> {item.product.price * item.quantity}</h4>
                  </div>
                  <Button
                    onClick={() => handleRemove(item.product)}
                    className="remove"
                    label="Remove"
                  />
                </li>
              ))}
            </ul>
            <div className="footer">
              <h3 className="total">Total: {total.toFixed(2)}</h3>
              <Button label="Checkout" />
            </div>
          </div>
        </div>
      )}
      {message && <Message type="error" message={items.length?message.message:'Cart is Empty'} />}
    </>
  );
};

export default Cart;
