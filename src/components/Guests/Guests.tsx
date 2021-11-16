import React from "react";
import Slider from "react-slick";
import { data } from "./Data";
import "./styles.css";
import Button from "../../components/Button/Button";

const Guests = () => {
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
    <div className="slider-component">
      <div className="slider-header">
        <h1>GOLDEN GUESTS</h1>
        <div>
          <p>
            <strong>The Golden Guests edition </strong>
            by the Billionaire Club are the rarest NFTs. They are all hand drawn
            and have no element in common with the regular collection.
          </p>
          <Button text="JOIN US TO REGISTER FOR PRESALE" />
        </div>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="guest">
            <img src={item.img} alt="" />
            {item.title}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Guests;
