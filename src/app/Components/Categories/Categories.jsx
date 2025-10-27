"use client";

import React from "react";
import Image from "next/image";
import "./Categories.css";
import rubyIcon from '@/app/Assets/Images/Ruby.png'
import sapphireIcon from '@/app/Assets/Images/blue.png'
import emeraldIcon from '@/app/Assets/Images/green.png'
import diamondIcon from '@/app/Assets/Images/diemond.png'
import pearlIcon from '@/app/Assets/Images/yellow.png'

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Ruby",
      description: "Precious red gemstones",
      count: "24 Products",
      img: rubyIcon,
      color: "#E0115F"
    },
    {
      id: 2,
      name: "Sapphire",
      description: "Royal blue gemstones",
      count: "18 Products",
      img: sapphireIcon,
      color: "#0F52BA"
    },
    {
      id: 3,
      name: "Emerald",
      description: "Vibrant green gemstones",
      count: "15 Products",
      img: emeraldIcon,
      color: "#50C878"
    },
    {
      id: 4,
      name: "Diamond",
      description: "Brilliant white gemstones",
      count: "32 Products",
      img: diamondIcon,
      color: "#B9F2FF"
    },
    {
      id: 5,
      name: "Pearl",
      description: "Natural & cultured pearls",
      count: "12 Products",
      img: pearlIcon,
      color: "#F0EAD6"
    },
  ];

  const handleCategoryClick = (category) => {
    console.log(`Selected ${category.name} category`);
  };

  return (
    <section className="categories-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="categories-title">Shop by Category</h2>
          <p className="categories-subtitle">
            Explore our exquisite collection of gemstones
          </p>
        </div>

        {/* Custom row and columns for 5 categories */}
        <div className="custom-row">
          {categories.map((category) => (
            <div
              key={category.id}
              className="custom-col"
            >
              <div 
                className="category-card"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="category-img-container">
                  <div className="category-img-wrapper">
                    <Image
                      src={category.img}
                      alt={category.name}
                      width={120}
                      height={120}
                      className="category-img"
                    />
                  </div>
                </div>

                <div className="category-content">
                  <h3 className="category-title">{category.name}</h3>
                  
                  <div className="category-details">
                    <p className="category-description">{category.description}</p>
                    <p className="category-count">
                      <span>{category.count}</span>
                    </p>
                  </div>

                  <button className="explore-btn">
                    Explore Collection
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

export default Categories;