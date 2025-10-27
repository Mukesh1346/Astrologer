"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import axios from "axios";
import { IoMdArrowForward } from "react-icons/io";

import SunUp from "@/app/Assets/Images/SunUp.png";
import SunDown from "@/app/Assets/Images/SunDown.png";
import MoonUp from "@/app/Assets/Images/MoonUp.png";
import MoonDown from "@/app/Assets/Images/MoonDown.png";
import pray from "@/app/Assets/Images/pray.png";
import Servicetop from "@/app/Assets/Images/Bithchart.jpg";

import "./panchange.css";

export default function Panchange() {
  const [active, setActive] = useState(false);
  const [arrowData, setArrowData] = useState([]);
  const [day, setDay] = useState({});
  const [services, setServices] = useState([]);
  const [month, setMonth] = useState({});
  const [samvat, setSamvat] = useState({});

  const handleActiveChange = () => setActive(!active);


  const [panchangData, setPanchangData] = useState({
    date: "27 October 2025",
    day: "सोमवार",
    sunrise: "06:23 AM",
    sunset: "05:52 PM",
    moonrise: "04:38 PM",
    moonset: "05:40 AM",
  });






  const formattedDate = day.createdAt
    ? new Date(day.createdAt).toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date().toLocaleDateString("en-GB");

  // ✅ Fetch Data Functions
  const getDayData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-panchang");
      setDay(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching Panchang data:", error);
    }
  };

  const getMonthData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-month");
      setMonth(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching month data:", error);
    }
  };

  const getSamvatData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-samvat");
      setSamvat(res.data.data[0]);
    } catch (error) {
      console.error("Error fetching samvat data:", error);
    }
  };

  const getArrowData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-kundali-service");
      setArrowData(res.data.data);
    } catch (error) {
      console.error("Error fetching kundali data:", error);
    }
  };

  const getServiceData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-service");
      const reverseData = res.data.data.reverse();
      setServices(reverseData);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getDayData();
    getMonthData();
    getSamvatData();
    getArrowData();
    getServiceData();
  }, []);

  return (
   <>
   <div className="mainbg">
   <div className="container">
      <div className="row reverceColumn">
        {/* === Panchang Left Section === */}
        <div className="col-md-4 py-2">
          <div className="content_title pb-2">
            <h2>Panchang</h2>
          </div>

          <div className="Panchangdetail">
            <div className="py-3 TopPanchang">
              <div className="panchangdate">
                <h2>Aaj Ka Panchang</h2>
                <h4>Ujjain, India</h4>
              </div>
              <div className="detailpanchangbtn">
                <button className="panchang-btn" onClick={handleActiveChange}>
                  Today's Panchang
                </button>
              </div>
            </div>

            <div className="row">
              <div className="currentdate">
                <hr />
                <span>
                  <b>{formattedDate}</b>
                </span>
                <hr />
              </div>
            </div>

            {/* Time Cards */}
            <div className="row text-center my-3">
              <div className="col-6 mb-3">
                <div className="sunrise p-3">
                  <Image src={SunUp} alt="Sunrise" className="img-fluid mb-2" />
                  <h1>{day.sunRiseTime || "--:--"}</h1>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="sunrise p-3">
                  <Image src={SunDown} alt="Sunset" className="img-fluid mb-2" />
                  <h1>{day.sunsetTime || "--:--"}</h1>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="Moonrise p-3">
                  <Image src={MoonUp} alt="Moonrise" className="img-fluid mb-2" />
                  <h1>{day.moonRiseTime || "--:--"}</h1>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="Moonrise p-3">
                  <Image src={MoonDown} alt="Moonset" className="img-fluid mb-2" />
                  <h1>{day.moonsetTime || "--:--"}</h1>
                </div>
              </div>
            </div>

            <hr className="bighr" />

            {/* Panchang Details */}
            <div className="row py-4 px-4 outsideborder">
              <div className="col-md-6 p-2">
                <div className="month">
                  <h4><b>Month</b></h4>
                  <p>Amanta: <b>{month.Amanta || "--"}</b></p>
                  <p>Purnimanta: <b>{month.Purnimanta || "--"}</b></p>
                  <hr />
                  <p>Tithi: <b>{month.Tithi || "--"}</b></p>
                  <p>Till: <b>{month.TithiTill || "--"}</b></p>
                  <hr />
                  <p>Yog: <b>{month.Yog || "--"}</b></p>
                  <p>Till: <b>{month.YogTill || "--"}</b></p>
                  <hr />
                  <p>Var: <b>{day.weekday || "Shanivar"}</b></p>
                </div>
              </div>
              <div className="col-md-6 p-2">
                <div className="month">
                  <h4><b>Samvat</b></h4>
                  <p>Vikram: <b>{samvat.Vikram || "--"}</b></p>
                  <p>Shaka: <b>{samvat.Shaka || "--"}</b></p>
                  <hr />
                  <p>Nakshatra: <b>{samvat.Nakshatra || "--"}</b></p>
                  <p>Till: <b>{samvat.NakshatraTill || "--"}</b></p>
                  <hr />
                  <p>Karan: <b>{samvat.Karan || "--"}</b></p>
                  <p>Till: <b>{samvat.KaranTill || "--"}</b></p>
                  <hr />
                  <p>Rahu Kalam: <b>12:50 AM to 12:13 PM</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === Services Right Section === */}
        <div className="col-md-8">
          <div className="service_title">
            <h2>Our Services</h2>
          </div>

          <div className="serviceContainer pt-4">
            <div className="hinditext">
              <div className="closehand">
                <Image src={pray} alt="Pray Hand" />
                <p>लोकाः समस्ताः सुखिनो भवन्तु</p>
              </div>
            </div>

            <div className="topbanner mt-3">
              <div className="bannerimg">
                <Image src={Servicetop} alt="Panchang Image" className="img-fluid" />
              </div>
              <div className="topbannerText">
                <p>
                  Order Hard Copy of Kundali (Birth Chart) for convenient reference, personal keepsake, detailed layout and easy annotations ₹1100
                </p>
              </div>
              <div className="arrowrender">
                <Link href={`/Service-Details/${arrowData[0]?.serviceName || ""}`}>
                  <IoMdArrowForward className="Arrow" />
                </Link>
              </div>
            </div>

            <div className="container pt-5">
              <div className="row">
                {services.slice(0, 9).map((service, index) => (
                  <div key={index} className="col-md-4 col-6 mt-3 mb-4">
                    <div className="text-center">
                      <Image
                        src={`https://www.api.vedicjyotishe.com/${service.serviceLogo}`}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="img-fluid mb-2"
                      />
                      <div className="service-name">
                        <h5>{service.serviceName}</h5>
                      </div>
                      <p>
                        <span className="text-muted">
                          <s>₹{service.sericePrice}</s>
                        </span>{" "}
                        <span className="text-danger">₹{service.sericeFinalPrice}</span>
                      </p>
                      <Link href={`/Service-Details/${service.serviceName}`}>
                        <button className="servicedetails">Get Details</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ViewServicebtn pb-3 text-center">
              <Link href="/OurServices">
                <button className="ViewAllbtn">View All</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   
   
   </>
  );
}
