import React from "react";
import { SpecsData } from "./Data";
import "./styles.css";

const Specs = () => {
  return (
    <div id="Features" className="specs">
      <h1>THE SPECS</h1>
      <div className="specs-container">
        {SpecsData.map((item, index) => (
          <div key={index} className="each-spec">
            <h3>{item.title}</h3>
            <p>{item.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specs;
