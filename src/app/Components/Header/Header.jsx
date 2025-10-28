"use client";

import React, { useEffect, useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
// import axios from "axios";
import brandlogo from "@/app/Assets/Images/Brandlogo.png";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [service, setService] = useState([]);



const products = [
  {id: 1 , name: "Ruby",url:"/service-details"},
  {id: 2 , name: "Sapphire",url:"/service-details"},
  {id: 3 , name: "Emerald",url:"/service-details"},
  {id: 4 , name: "Diamond",url:"/service-details"},
  {id: 5 , name: "Pearl",url:"/service-details"},
  {id: 6 , name: "Product",url:"/service-details"},
  
]




  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsNavbarOpen(false);
  };

  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-service");
  //     const data = res.data.data;
  //     const filteredData = data.filter((x) => x.dropDownStatus === "True");
  //     setService(filteredData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    <>
      {/* ======= Top Header Section ======= */}
      <section className="top-header">
        <div className="container-fluid">
          <div className="top-info">
            <div className="talk">
              <h5>
                Talk to Astrologers:{" "}
                <a href="tel:+916366052167" target="_blank" rel="noopener noreferrer">
                  +91 6366052167
                </a>
              </h5>
            </div>

            <div className="mailIconInfo">
              <div className="mail">
                <h5>
                  <a href="mailto:VedicJyotishe@outlook.com" target="_blank" rel="noopener noreferrer">
                    VedicJyotishe@outlook.com
                  </a>
                </h5>
              </div>

              <div className="vertical-separator"></div>

              <div className="social">
                <h5>
                  Follow us on{" "}
                  <a href="https://x.com/Dparihar17" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com/vedic_jyotishe/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/share/e2cYxP6X9h9YzJ3i/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Navbar Section ======= */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-between align-items-center">
          {/* Brand Logo */}
          <Link href="/" onClick={() => handleLinkClick("/")} className="navbar-brand p-0">
            <Image src={brandlogo} alt="Vedic Jyotishe" className="navbar-logo" priority />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="navbar-toggler" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            <IoMenu className="menu" />
          </div>

          {/* Navbar Links */}
          <ul className={`nav-links  mobileMenu  ${isNavbarOpen ? "active" : ""}`}>
            <li className={`nav-link ${activeLink === "/" ? "active" : ""}`}>
              <Link href="/" onClick={() => handleLinkClick("/")}>Home</Link>
            </li>

            <li className={`nav-link ${activeLink === "/About" ? "active" : ""}`}>
              <Link href="/About" onClick={() => handleLinkClick("/About")}>About</Link>
            </li>

            {/* Services Dropdown */}
            <li className="dropdown nav-link">
              <span
                className="nav-item-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </span>
              <ul className="dropdown-menu">
                {service.map((item, index) => (
                  <li className="dropdown-item" key={index}>
                    <Link
                      href={`/Service-Details/${item.serviceName}`}
                      onClick={() => handleLinkClick(`/Service-Details/${item.serviceName}`)}
                    >
                      {item.serviceName}
                    </Link>
                  </li>
                ))}
                <li className="dropdown-item">
                  <Link href="/OurServices" onClick={() => handleLinkClick("/OurServices")}>
                    More Services...
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown nav-link">
              <span
                className="nav-item-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </span>
              <ul className="dropdown-menu">
                {products.map((item, index) => (
                  <li className="dropdown-item" key={index}>
                    <Link
                      href={item.url}
       
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="dropdown-item">
                  <Link href="/OurServices" onClick={() => handleLinkClick("/OurServices")}>
                    More Services...
                  </Link>
                </li>
              </ul>
            </li>


            <li className={`nav-link ${activeLink === "/Blog" ? "active" : ""}`}>
              <Link href="/Blog" onClick={() => handleLinkClick("/Blog")}>Blog</Link>
            </li>

            <li className={`nav-link ${activeLink === "/Contact" ? "active" : ""}`}>
              <Link href="/Contact" onClick={() => handleLinkClick("/Contact")}>Contact</Link>
            </li>

            <li className={`nav-link ${activeLink === "/Socialfeed" ? "active" : ""}`}>
              <Link href="/Socialfeed" onClick={() => handleLinkClick("/Socialfeed")}>Social Feed</Link>
            </li>

            <li className="chat-now-button">
              <a href="https://wa.me/916366052167" target="_blank" rel="noopener noreferrer">
                CHAT NOW
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;








// 51% 49% 0% 100% / 50% 93% 7% 50% 
