"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./carousel.css";

import pic1 from "@/app/Assets/Images/aswini.png";
import pic2 from "@/app/Assets/Images/Hasta.png";
import pic3 from "@/app/Assets/Images/aswini.png";
import pic4 from "@/app/Assets/Images/Hasta.png";
import pic5 from "@/app/Assets/Images/aswini.png";
import pic6 from "@/app/Assets/Images/Hasta.png";
import pic7 from "@/app/Assets/Images/aswini.png";
import pic8 from "@/app/Assets/Images/Hasta.png";
import pic9 from "@/app/Assets/Images/aswini.png";

const NakshatraCarousel = () => {
  const nakshatras = [
    { img: pic1, name: "Ashwini" },
    { img: pic2, name: "Bharani" },
    { img: pic3, name: "Krittika" },
    { img: pic4, name: "Rohini" },
    { img: pic5, name: "Mrigashira" },
    { img: pic6, name: "Ardra" },
    { img: pic7, name: "Punarvasu" },
    { img: pic8, name: "Pushya" },
    { img: pic9, name: "Ashlesha" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
   <>

    <div className="nakshatra-carousel">
   <div className="TitleSection ">
       <h2 className="CarouselTitle">Celestial Nakshatras of Vedic Astrology </h2>
   </div>
      <Slider {...settings}>
        {nakshatras.map((item, index) => (
          <div key={index} className="nakshatra-item text-center">
            <div className="nakshatra-img-wrapper">
              <Image
                src={item.img}
                alt={item.name}
                className="nakshatra-img"
              />
            </div>
            <h6 className="nakshatra-name mt-2">{item.name}</h6>
          </div>
        ))}
      </Slider>
    </div>
   </>
  );
};

export default NakshatraCarousel;
