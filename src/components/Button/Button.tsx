// Import necessary libraries, styles, and types
import React from "react";
import "./Button.css"; // Import CSS styles for the Button component
import { ButtonProps } from "../../interfaces"; // Import the ButtonProps interface for type safety

// Define the Button functional component
const Button: React.FC<ButtonProps> = ({
  label, // Text to display on the button
  onClick, // Click event handler
  disabled = false, // Flag to indicate if the button is disabled
  className, // Additional custom classes for styling
  notification, // Optional notification count
}) => {
  return (
    <button
      className={`button ${className}`} // Combine default and additional class names
      onClick={onClick} // Attach the click handler
      disabled={disabled} // Set disabled state
    >
      {label}
      {notification !== undefined && notification > 0 && ( // Conditionally render notification badge
        <span className="notification-badge">{notification}</span>
      )}
    </button>
  );
};

// Export the Button component for use in other parts of the application
export default Button;
