import React, { useEffect } from "react";
import { ICustomToastProps } from "./CustomToast.props";

export const CustomToast: React.FC<ICustomToastProps> = ({
  message,
  onClose,
  type,
  duration = 2200,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`custom-toast custom-toast--${type}`} role="status">
      <span className="custom-toast__message">{message}</span>
    </div>
  );
};
