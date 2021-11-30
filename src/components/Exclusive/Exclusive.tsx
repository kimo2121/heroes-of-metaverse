import React from "react";
import Header from "../Header/Header";
import "./styles.css";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import gif from "../../assets/gif.gif";
const Exclusive = () => {
  return (
    <div className="exclusive">
      <div className="exclusive-left">
        <Header
          name="An Exclusive"
          title="FEATURES"
          colored="HEROES OF THE METAVERSE"
        />
        <p>
          In 2079; the earth’s resources has been depleted to their last
          reserves. This almost created the end of humanity on earth. 10 years
          later, only 4 areas of the world were viable to live in. In these
          areas were 4 regions, the inhabitants of each of these regions had
          developed powers. Over time, conflicts over resources began to emerge.
        </p>
        <button className="join">
          Join Us
          <Arrow />
        </button>
      </div>
      <div className="exclusive-right">
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Exclusive;
