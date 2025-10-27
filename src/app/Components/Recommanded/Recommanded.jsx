"use client";

import React from "react";
import Image from "next/image";
import "./Recommended.css";
import Ruby from '@/app/Assets/Images/Ruby.png'
import blue from '@/app/Assets/Images/blue.png'
import yellow from '@/app/Assets/Images/yellow.png'
import diemond from '@/app/Assets/Images/diemond.png'
import green from '@/app/Assets/Images/green.png'

const Recommended = () => {
  const gems = [
    {
      id: 1,
      name: "Ruby",
      carat: "10.84 Carat",
      origin: "Mozambique",
      price: "₹95,000",
      img: Ruby,
    },
    {
      id: 2,
      name: "Blue Sapphire",
      carat: "13.12 Carat",
      origin: "Ceylon (Sri Lanka)",
      price: "₹68,001",
      img: blue,
    },
    {
      id: 3,
      name: "Yellow Sapphire",
      carat: "5.63 Carat",
      origin: "Bangkok (Thailand)",
      price: "₹20,800",
      img: yellow,
    },
    {
      id: 4,
      name: "Emerald",
      carat: "4.86 Carat",
      origin: "Colombia",
      price: "₹43,497",
      img: green,
    },
    {
      id: 5,
      name: "Diamond Natural Astrological",
      carat: "2.02 Carat",
      origin: "Africa",
      price: "₹779,000",
      img: diemond,
    },
  ];

  const handleBuyNow = (gem) => {
    console.log(`Buying ${gem.name}`);
  };

  return (
    <section className="recommended-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="recommended-title">Recommended for You</h2>
          <p className="recommended-subtitle">
            Handpicked gems tailored to your preferences
          </p>
        </div>

        {/* Custom row and columns for 5 cards */}
        <div className="custom-row">
          {gems.map((gem) => (
            <div
              key={gem.id}
              className="custom-col"
            >
              <div className="gem-card">
                <div className="gem-img-container">
                  <div className="gem-img-wrapper">
                    <Image
                      src={gem.img}
                      alt={gem.name}
                      width={280}
                      height={280}
                      className="gem-img"
                    />
                  </div>
                </div>

                <div className="gem-content">
                  <h3 className="gem-title">{gem.name}</h3>

                  <div className="gem-details">
                    <p className="gem-carat">{gem.carat}</p>
                    <p className="gem-origin">
                      Origin: <span>{gem.origin}</span>
                    </p>
                    <p className="gem-price">{gem.price}</p>
                  </div>

                  <button
                    className="buy-btn"
                    onClick={() => handleBuyNow(gem)}
                  >
                    Buy Now 
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;