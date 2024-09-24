// Import necessary libraries and components
import React, { useState } from "react";
import { MessageProps, Product, ProductListProps } from "../../interfaces"; // Import types for props
import "./ProductList.css"; // Import CSS styles for the ProductList component
import { Button } from "../Button"; // Import Button component
import Message from "../ErrorMessage/Message"; // Import Message component for displaying messages

// Define the ProductList functional component
const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  // State to manage messages
  const [message, setMessage] = useState<MessageProps | null>(null);

  // Handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    setMessage(null); // Clear any existing messages
    onAddToCart(product); // Call the onAddToCart function
    showMessage(`${product.title} is added into the cart!`); // Show success message
  };

  // Function to display messages
  const showMessage = (msg: string) => {
    setMessage({ type: "success", message: msg }); // Set message state
  };

  // Render the product list UI
  return (
    <div className="product-list"> {/* Main container for the product list */}
      <div className="container"> {/* Inner container for layout */}
        <h2>Products</h2> {/* Section title */}
        <ul>
          {message && <Message type="success" message={message.message} />} {/* Conditionally render message */}
          {products.map((product) => ( // Map through products
            <li key={product.id} id={product.id.toString()} className="card"> {/* Product card */}
              <div>
                <h3>{product.title}</h3> {/* Product title */}
                <p>{product.description}</p> {/* Product description */}
                <h4>${product.price}</h4> {/* Product price */}
              </div>
              <Button
                onClick={() => handleAddToCart(product)} // Handle add to cart on button click
                label="Add to Cart" // Button label
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Export the ProductList component for use in other parts of the application
export default ProductList;
