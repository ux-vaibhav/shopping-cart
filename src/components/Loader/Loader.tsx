// Import necessary libraries and styles
import React from "react";
import "./Loader.css"; // Import CSS styles for the Loader component

// Define the Loader functional component
const Loader: React.FC = () => {
  return (
    <div className="loader" role="alert"> {/* Main loader container with alert role for accessibility */}
      <div className="spinner"></div> {/* Spinner element for loading animation */}
    </div>
  );
};

// Export the Loader component for use in other parts of the application
export default Loader;
