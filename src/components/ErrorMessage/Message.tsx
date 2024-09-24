// Import necessary libraries and styles
import React, { useEffect, useState } from "react";
import "./Message.css"; // Import CSS styles for the Message component
import { MessageProps } from "../../interfaces"; // Import types for props

// Define the Message functional component
const Message: React.FC<MessageProps> = ({ type, message }) => {
  // State to control the visibility of the message
  const [isVisible, setIsVisible] = useState(true);

  // Effect to handle automatic message dismissal
  useEffect(() => {
    setIsVisible(true); // Set message to visible
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide message after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount or message change
  }, [message]); // Dependency on message to reset timer

  // Function to determine CSS class based on message type
  const getClassName = () => {
    switch (type) {
      case "error":
        return "message error"; // Class for error messages
      case "warning":
        return "message warning"; // Class for warning messages
      case "success":
        return "message success"; // Class for success messages
      default:
        return ""; // Default class if no type matches
    }
  };

  // Return null if the message is not visible
  if (!isVisible) return null;

  // Render the message with appropriate class and role
  return (
    <div className={getClassName()} role="alert">
      {message} {/* Display the message text */}
    </div>
  );
};

// Export the Message component for use in other parts of the application
export default Message;
