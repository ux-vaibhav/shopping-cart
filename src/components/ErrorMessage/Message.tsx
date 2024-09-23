import React, { useEffect, useState } from "react";
import "./Message.css";
import { MessageProps } from "../../interfaces";

const Message: React.FC<MessageProps> = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  const getClassName = () => {
    switch (type) {
      case "error":
        return "message error";
      case "warning":
        return "message warning";
      case "success":
        return "message success";
      default:
        return "";
    }
  };

  if (!isVisible) return null;

  return (
    <div className={getClassName()} role="alert">
      {message}
    </div>
  );
};

export default Message;
