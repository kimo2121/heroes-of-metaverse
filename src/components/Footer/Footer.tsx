import React from "react";
import "./styles.css";
import { ReactComponent as OpenSea } from "../../assets/opensea.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>Logo</h1>
      </div>
      <div className="external-links">
        <a href="/">
          <OpenSea />
        </a>
        <a href="/">
          <Linkedin />
        </a>
        <a href="/">
          <Instagram />
        </a>
        <a href="/">
          <Twitter />
        </a>
      </div>
      <span>Terms of Service</span>
      <p>0x5df340b5d1618c543ac81837da1c2d2b17b3b5d8</p>
      <p>© 2021 Billionaire Club. All rights reserved</p>
    </div>
  );
};

export default Footer;
