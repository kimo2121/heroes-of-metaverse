import React from "react";
import "./styles.css";

interface headerTypes {
  title?: string;
  name?: string;
  colored?: string;
}
const Header: React.FC<headerTypes> = ({ title, name, colored }) => {
  return (
    <div className="header">
      <p>
        {title}
        <span></span>
      </p>
      <h1>
        {name}
        <br />
        <span>{colored}</span>
      </h1>
    </div>
  );
};

export default Header;
