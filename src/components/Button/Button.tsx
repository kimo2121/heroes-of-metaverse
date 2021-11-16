import React from "react";
import "./styles.css";

interface BtnTypes {
  text?: string;
  className?: string;
}

const Button: React.FC<BtnTypes> = ({ className, text }) => {
  return <button className="general-btn">{text}</button>;
};

export default Button;
