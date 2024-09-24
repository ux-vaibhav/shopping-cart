// Import necessary libraries and components
import React, { useState } from "react";
import { CartProps, MessageProps, Product } from "../../interfaces"; // Import types for props
import "./Cart.css"; // Import CSS styles for the Cart component
import { Button } from "../Button"; // Import Button component
import Message from "../ErrorMessage/Message"; // Import Message component for displaying messages

// Define the Cart functional component
const Cart: React.FC<CartProps> = ({ items, onRemove }) => {
  // State for managing messages
  const [message, setMessage] = useState<MessageProps | null>(null);

  // Handle the removal of a product from the cart
  const handleRemove = (product: Product) => {
    setMessage(null); // Clear any existing messages
    onRemove(product.id); // Call the onRemove function with the product ID
    showMessage(`${product.title} is removed from cart!`, "error"); // Show removal message
  };

  // Function to display messages
  const showMessage = (
    msg: MessageProps["message"],
    type: MessageProps["type"]
  ) => {
    setMessage({ type: type, message: msg }); // Set the message state
  };

  // Calculate the total price of items in the cart
  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  // Render the cart UI
  return (
    <>
      {items.length !== 0 && ( // Check if there are items in the cart
        <div className="cart-dialog" id="cartDialog" role="dialog">
          <div className="cart">
            <p> {items.length} Items ready for checkout</p>
            <ul>
              {items.map((item) => ( // Map through cart items
                <li key={item.product.id} className="card">
                  <div>
                    <h4> {item.product.title}</h4>
                    <p>Quantity {item.quantity}</p>
                    <h4> {item.product.price * item.quantity}</h4>
                  </div>
                  <Button
                    onClick={() => handleRemove(item.product)} // Handle removal on button click
                    className="remove"
                    label="Remove" // Button label
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
      {message && <Message type="error" message={items.length ? message.message : 'Cart is Empty'} />}
    </>
  );
};

// Export the Cart component for use in other parts of the application
export default Cart;
