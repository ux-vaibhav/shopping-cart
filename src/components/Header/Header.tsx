// Import necessary libraries and components
import React from "react";
import { Cart } from "../Cart"; // Import Cart component to display the cart items
import { Button } from "../Button"; // Import Button component for the cart button

import "./Header.css"; // Import CSS styles for the Header component
import { HeaderProps } from "../../interfaces"; // Import types for props

// Define the Header functional component
const Header: React.FC<HeaderProps> = ({ cart, removeFromCart }) => {
  return (
    <div className="header"> {/* Main header container */}
      <div className="container"> {/* Inner container for layout */}
        <div className="header-flex"> {/* Flex container for title and cart */}
          <h1 className="title">Shop</h1> {/* Shop title */}
          <div className="cart-container"> {/* Container for cart button and cart */}
            <Button label="Cart" notification={cart.length} /> {/* Cart button with notification */}
            <Cart items={cart} onRemove={removeFromCart} /> {/* Render the Cart component */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Header component for use in other parts of the application
export default Header;
