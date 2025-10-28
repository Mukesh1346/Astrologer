"use client";
import React, { useState } from "react";

import "./InquiryForm.css";

const InquiryForm = () => {
  const [gender, setGender] = useState("Male");

  return (
    <div className="inquiry-form-container">
      <h5 className="form-title">FILL THE FORM TO GET YOUR INQUIRY</h5>

      <form className="inquiry-form">
        {/* Name */}
        <div className="form-row">
          <label className="form-label">Name<span>*</span></label>
          <input type="text" className="form-input" placeholder="Your Name here" />
        </div>

        {/* Phone */}
        <div className="form-row">
          <label className="form-label">Phone<span>*</span></label>
          <input type="text" className="form-input" placeholder="Your Number here" />
        </div>

        {/* Email */}
        <div className="form-row">
          <label className="form-label">Email<span>*</span></label>
          <input type="email" className="form-input" placeholder="Your Email here" />
        </div>

        {/* Gender */}
        <div className="form-row align-items-center">
          <label className="form-label">Gender<span>*</span></label>
          <div className="d-flex gap-2 flex-grow-1">
            <button
              type="button"
              className={`gender-btn ${gender === "Male" ? "active" : ""}`}
              onClick={() => setGender("Male")}
            >
              Male
            </button>
            <button
              type="button"
              className={`gender-btn ${gender === "Female" ? "active" : ""}`}
              onClick={() => setGender("Female")}
            >
              Female
            </button>
          </div>
        </div>

        {/* Marital Status */}
        <div className="form-row">
          <label className="form-label">Marital Status<span>*</span></label>
          <select className="form-input">
            <option>Select Status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
        </div>

        <h6 className="section-title">Birth Details</h6>

        {/* Date */}
        <div className="form-row">
          <label className="form-label">Date<span>*</span></label>
          <input type="date" className="form-input" />
        </div>

        {/* Time */}
        <div className="form-row">
          <label className="form-label">Time<span>*</span></label>
          <div className="d-flex gap-2 flex-grow-1">
            <input type="number" className="form-input small-input" min="1" max="12" placeholder="12" />
            <input type="number" className="form-input small-input" min="0" max="59" placeholder="00" />
            <select className="form-input small-input">
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>

        {/* Country & State */}
        <div className="form-row">
          <label className="form-label">Country & State<span>*</span></label>
          <input type="text" className="form-input" placeholder="Country & State Of Birth" />
        </div>

        {/* City */}
        <div className="form-row">
          <label className="form-label">City<span>*</span></label>
          <input type="text" className="form-input" placeholder="City Of Birth" />
        </div>

        <h6 className="section-title">Direction (if available)</h6>

        <div className="form-row">
          <label className="form-label">Longitude</label>
          <input type="text" className="form-input" placeholder="if available" />
        </div>

        <div className="form-row">
          <label className="form-label">Latitude</label>
          <input type="text" className="form-input" placeholder="if available" />
        </div>

        <div className="direction-buttons">
          <span>East</span> <span>West</span> <span>North</span> <span>South</span>
        </div>

        {/* Comment */}
        <div className="form-row">
          <label className="form-label">Comment</label>
          <textarea className="form-input" rows="3" placeholder="Facts Relevant to Your Problem (Please specify in detail)" />
        </div>

        <div className="text-center">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
