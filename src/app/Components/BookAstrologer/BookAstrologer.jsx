"use client";
import React, { useState } from "react";
import "./bookAstrologer.css";
import { FaRegComments } from "react-icons/fa";
import Image from "next/image";
import Pic1 from "@/app/Assets/Images/astrologerT.png"

const BookAstrologer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`sticky-enquiry-container ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="enquiry-icon">
      <Image src={Pic1} alt="" className="astrologerImgIcon"/>
      
        {/* <FaRegComments /> */}
      </div>

      <div className="enquiry-form shadow-lg p-3 bg-light rounded">
        <h5 className="text-center mb-3">Book an Astrologer</h5>
        <form>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input type="text" className="form-control inputSec"  placeholder="Your Name" />
          </div>
          <div className="mb-2">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control inputSec" placeholder="Your Number" />
          </div>
          <div className="mb-2">
            <label className="form-label">Question</label>
            <textarea className="form-control inputSec" rows="2" placeholder="Your Question"></textarea>
          </div>
          <button type="submit" className="btn btnSubmit w-100 mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAstrologer;
