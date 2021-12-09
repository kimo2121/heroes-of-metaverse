import React from "react";
import "./styles.css";

interface BtnTypes {
  text?: string;
  className?: string;
  onClick?: any;
}

const Button: React.FC<BtnTypes> = ({ onClick, className, text }) => {
  return (
    <button onClick={onClick} className={`general-btn ${className}`}>
      {text}
    </button>
  );
};

export default Button;
