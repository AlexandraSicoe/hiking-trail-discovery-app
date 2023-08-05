import React from "react";
import Slider from "react-slick";
import CarouselImg1 from "../images/c1.avif";
import CarouselImg2 from "../images/c2.avif";
import CarouselImg3 from "../images/c3.avif";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          style={{ height: "300px", width: "500px" }}
          src={CarouselImg1}
        ></img>
      </div>
      <div>
        <img
          style={{ height: "300px", width: "500px" }}
          src={CarouselImg2}
        ></img>
      </div>
      <div>
        <img
          style={{ height: "300px", width: "500px" }}
          src={CarouselImg3}
        ></img>
      </div>
    </Slider>
  );
}
