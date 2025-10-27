"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import testimonial1 from "@/app/Assets/Images/testimonial.png";
import testimonial2 from "@/app/Assets/Images/Testimonial1.jpeg";
import testimonial3 from "@/app/Assets/Images/Testimonial2.jpeg";
import Arrow from "@/app/Assets/Images/Arrow.png";
import DesignStar from "@/app/Assets/Images/DesignStar.png";
import "./Testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
  };

  const testimonials = [
    {
      id: 1,
      img: testimonial1,
      desc: `I am incredibly grateful for the educational guidance we received from Ms. Divya Parihar. Her insights and astrology expertise truly helped us choose the perfect academic path.`,
      rating: 4.5,
      name: "Triveni Ranjith Battulla",
      position: "TA Leader",
      zodiac: "Libra",
    },
    {
      id: 2,
      img: testimonial2,
      desc: `I had always been curious about the impact of auspicious timing, and after my consultation, I realized how accurate and positive the results were. Highly recommend!`,
      rating: 5,
      name: "Vanya Raghuvanshi",
      position: "Consultant",
      zodiac: "Sagittarius",
    },
    {
      id: 3,
      img: testimonial3,
      desc: `I was feeling a bit lost in my career path as a software engineer, but Divya’s advice based on my zodiac truly motivated me to move forward with confidence.`,
      rating: 4,
      name: "Praveen Piyush",
      position: "Engineer",
      zodiac: "Gemini",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <div className="designstar">
          <Image src={DesignStar} alt="Design Star" className="design-star" />
        </div>
        <h1 className="section-title">Our Customer Thoughts</h1>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="container">
              <div className="testimonial-card">
                <div className="testimonial-img">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-img"
                  />
                </div>

                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.desc}</p>

                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.round(testimonial.rating)
                            ? "star filled"
                            : "star"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="testimonial-info">
                    <h2>{testimonial.name}</h2>
                    <p>{testimonial.position}</p>
                    <span className="zodiac">Zodiac - {testimonial.zodiac}</span>
                  </div>
                </div>

                <div className="testimonial-arrow">
                  <Image src={Arrow} alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
