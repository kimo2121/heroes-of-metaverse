import React from "react";
import { Data } from "./Data";
import "./styles.css";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import Slider from "react-slick";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Team" className="team-container">
      <div className="team-title">
        <h1>OUR TEAM</h1>
        <p>
          The Billionaire club was created by a team of{" "}
          <strong>digital native </strong>: Entrepreneurs, Blockchain experts,
          Marketing wizards, and Artists… We are committed to delivering a
          cutting-edge experience and making
          <strong>this project a success.</strong>
        </p>
      </div>
      <div className="team">
        <Slider {...settings}>
          {Data.map((item, index) => (
            <div key={index} className="member">
              <img src={item.img} alt="" />
              <div>
                <h3>
                  {item.title}
                  <span>{item.role}</span>
                </h3>
                <div>
                  {item.instagram ? (
                    <a href={item?.instagram} target="_blank">
                      <Instagram />
                    </a>
                  ) : undefined}
                  {item.linkedIn ? (
                    <a href={item?.instagram} target="_blank">
                      <Linkedin />
                    </a>
                  ) : undefined}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* {Data.map((item, index) => (
          <div key={index} className="member">
            <img src={item.img} alt="" />
            <div>
              <h3>
                {item.title}
                <span>{item.role}</span>
              </h3>
              <div>
                {item.instagram ? (
                  <a href={item?.instagram} target="_blank">
                    <Instagram />
                  </a>
                ) : undefined}
                {item.linkedIn ? (
                  <a href={item?.instagram} target="_blank">
                    <Linkedin />
                  </a>
                ) : undefined}
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default OurTeam;
