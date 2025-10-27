"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
import logo from "@/app/Assets/Images/BrandLogo.png";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
// import axios from "axios";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      await axios.post("https://www.api.vedicjyotishe.com/api/create-newsletter", { email });
      setEmail("");
      setError("");
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "Thank you for subscribing to our newsletter.",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      console.error("Error submitting email:", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an issue submitting your email. Please try again later.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4 mt-3">
            <div className="weblogo py-3">
              <Link href="/">
                <Image src={logo} alt="Vedic Jyotishe" height={150} className="img-fluid" />
              </Link>
            </div>
            <div className="imgdesc">
              <p>
                Contact us for an in-depth analysis of your Kundali chart, tailored to your specific areas of concern. We
                ensure complete client confidentiality at all times.
              </p>
            </div>
            <div className="socialLogo">
              <div className="link">
                <a href="https://x.com/Dparihar17" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
              <div className="link">
                <a href="https://www.instagram.com/vedic_jyotishe/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
              <div className="link">
                <a href="https://www.facebook.com/share/e2cYxP6X9h9YzJ3i/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-8 mt-5">
            <div className="row">
              {/* Contact Info */}
              <div className="contact-info">
                <div className="call-info">
                  <div className="phoneicon">
                    <FiPhone className="phone-icon" />
                  </div>
                  <div className="callnumber">
                    <p>Phone</p>
                    <a href="tel:+916366052167">
                      <h5>+91 6366052167</h5>
                    </a>
                  </div>
                </div>
                <div className="Email-info">
                  <div className="mailicon">
                    <HiOutlineMailOpen className="mail-icon" />
                  </div>
                  <div className="mailid">
                    <p>Email id</p>
                    <a href="mailto:VedicJyotishe@outlook.com">
                      <h5>VedicJyotishe@outlook.com</h5>
                    </a>
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-md-6">
                <div className="user-links">
                  <div className="footer-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="footer-links">
                    <li><Link href="/" className="inner-Link">Home</Link></li>
                    <li><Link href="/OurServices" className="inner-Link">Services</Link></li>
                    <li><Link href="/About" className="inner-Link">About Us</Link></li>
                    <li><Link href="/Contact" className="inner-Link">Contact Us</Link></li>
                  </ul>
                </div>
              </div>

              {/* Subscribe */}
              <div className="col-md-6 mt-5">
                <div className="footer-title">
                  <h3>Subscribe</h3>
                </div>
                <form onSubmit={handleSubmit} className="email-form">
                  <input
                    type="email"
                    id="email"
                    className={`email-input ${error ? "input-error" : ""}`}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr-line" />
        <p>
          All Right Reserved &#169; {new Date().getFullYear()}{" "}
          <Link href="/" className="Linkcss"><b>Vedic Jyotishe</b></Link> Design by{" "}
          <a
            href="https://www.digiindiasolutions.com/"
            className="Linkcss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Digi India Solutions</b>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
