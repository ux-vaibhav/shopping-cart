import React from "react";
import "./Button.css";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className,
  notification,
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {notification !== undefined && notification > 0 && (
        <span className="notification-badge">{notification}</span>
      )}
    </button>
  );
};

export default Button;
