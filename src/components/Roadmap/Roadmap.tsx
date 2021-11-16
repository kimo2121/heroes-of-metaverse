import React from "react";
import { RoadData } from "./RoadData";
import "./styles.css";

const Roadmap = () => {
  return (
    <div id="Roadmap" className="roadmap">
      <h1>LAUNCH ROADMAP</h1>
      <p>
        As we value our community and its creativity, our roadmap will be
        updated according to your comments and ideas.
      </p>
      <div className="roads-container">
        {RoadData.map((item, index) => (
          <div key={index} className="each-road">
            <h1>{item.percentage}</h1>
            <div>
              <h3>{item.title}</h3>
              <p>{item.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
