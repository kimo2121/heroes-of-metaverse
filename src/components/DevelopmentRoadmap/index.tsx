import React from "react";
import { isTemplateTail } from "typescript";
import { DevelopmentData } from "./Data";
import "./styles.css";

const DevelopmentRoadmap = () => {
  return (
    <div className="development">
      <h2>DEVELOPMENT ROADMAP</h2>
      <p>
        <strong>
          Our goal is to make sure your investment is highly profitable.
        </strong>
        To do so, we will set up several strategies (fusion, reduce supply,
        marketing & community push simultaneously) after the launch in order to
        increase the floor price.
      </p>
      <div className="-devs-container">
        {DevelopmentData.map((item, index) => (
          <div key={index} className="each-dev">
            <h3>{item.title}</h3>
            <p>{item.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentRoadmap;
