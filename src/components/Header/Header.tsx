import React from "react";
import { Cart } from "../Cart";
import { Button } from "../Button";

import "./Header.css";
import { HeaderProps } from "../../interfaces";

const Header: React.FC<HeaderProps> = ({ cart, removeFromCart }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
          <h1 className="title">Shop</h1>
          <div className="cart-container">
            <Button label="Cart" notification={cart.length} />
              <Cart items={cart} onRemove={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
