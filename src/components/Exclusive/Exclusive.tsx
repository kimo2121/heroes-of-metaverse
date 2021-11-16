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
          colored="Billionaire Club"
        />
        <p>
          Earlier this year, a mysterious force coming from another galaxy
          summoned <strong>the most influential people on planet Earth </strong>
          . They received the geographic coordinates of a secret location for
          the party : <strong>the Billionaire Club</strong>. There, they will
          have the opportunity to exchange, discuss and collaborate in order to
          become even bigger than they are. During this party, the host will
          reveal its identity and
          <strong>the main reason for this invitation. </strong>
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
