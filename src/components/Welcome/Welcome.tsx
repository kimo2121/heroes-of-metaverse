import React from "react";
import "./styles.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import Header from "../Header/Header";
const Welcome = () => {
  return (
    <div id="About" className="welcome">
      <div className="welcome-left">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className="welcome-right">
        <Header
          name="Welcome to the"
          title="About"
          colored="HEROES OF THE METAVERSE"
        />
        <p>
          <strong>HEROES OF THE METAVERSE </strong>
          is a private collection of
          <strong> 2000 heroes NFTs</strong>—unique digital collectibles. The
          apes are stored as SPL tokens on the SOLANA blockchain and hosted.
          Reveal on 10 december.
        </p>
        <p>
          With <strong> more than 180+ hand drawn traits</strong>, each NFT is
          unique.<strong> Join </strong>an ambitious ever-growing community with
          multiple benefits and utilities.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
