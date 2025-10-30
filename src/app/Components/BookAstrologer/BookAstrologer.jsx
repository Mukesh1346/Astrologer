"use client";
import React, { useState } from "react";
import "./bookAstrologer.css";
import Image from "next/image";
import Pic1 from "@/app/Assets/Images/astrologerT.png";

const BookAstrologer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`sticky-enquiry-container ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="enquiry-icon">
        <Image src={Pic1} alt="Astrologer" className="astrologerImgIcon" />
      </div>

      <div className="enquiry-form shadow-lg">
        <h5>Book an Astrologer</h5>
       <div className="formSec">
       <form>
          <div className="mb-2 inputSection1">
            <label className="form-label ms-4">Name</label>
            <input type="text" className="inputBox1" placeholder="Your Name" />
          </div>
          <div className="mb-2 inputSection2 ">
            <label className="form-label ms-4">Phone</label>
            <input type="tel"  className="inputBox2" placeholder="Your Number" />
          </div>
          <div className="mb-2 inputSection3 ">
            <label className="form-label ms-4">Question</label>
            <textarea  className="inputBox3"  placeholder="Your Question"></textarea>
          </div>
          <div className="buttonSec inputSection4">
          <button type="submit" className="btn btnSubmit">
            Submit
          </button>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default BookAstrologer;
