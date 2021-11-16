import React, { useRef, useState } from "react";
import "./styles.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { ReactComponent as OpenSea } from "../../assets/opensea.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import Button from "../Button/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [navbar, setNavbar] = useState(false);
  const changeHeight = (): void => {
    if (window.scrollY > 103) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeight);

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div className={navbar ? "navbar height" : "navbar"}>
      <div className="web-nav">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <div className="nav-links">
            <Link activeClass="active" smooth={true} duration={800} to="About">
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              duration={800}
              to="Features"
            >
              Features
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              duration={800}
              to="Roadmap"
            >
              Roadmap
            </Link>
            <Link activeClass="active" smooth={true} duration={800} to="Team">
              Team
            </Link>
            <Link activeClass="active" smooth={true} duration={800} to="FAQ">
              Faq
            </Link>
          </div>
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
          <Button className="mob-wallet" text="JOIN OUR DISCORD" />
        </div>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div className="logo mobile-logo">
            <h3>Logo</h3>
          </div>
          <div className="mob-menu-btn">
            <HiMenu
              onClick={toggleAccordion}
              className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
            />

            <Button className="mob-wallet" text="JOIN OUR DISCORD" />
          </div>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="About"
          >
            About
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Features"
          >
            Features
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Roadmap"
          >
            Roadmap
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Team"
          >
            Team
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="FAQ"
          >
            Faq
          </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
