import Image from "next/image";
import styles from "./page.module.css";
// import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Panchange from "./Components/Panchang/Panchange";
import Testimonial from "./Components/Testimonial/Testimonial";
import Recommended from "./Components/Recommanded/Recommanded";
import Categories from "./Components/Categories/Categories";
import BookAstrologer from "./Components/BookAstrologer/BookAstrologer";
import NakshatraCarousel from "./Components/Carousel/Carousel";
import HeroSection from "./Components/HeroSection/HeroSection";
import VideoLoader from "./Components/VideoLoader/VideoLoader";

export default function Home() {
  return (
    <>
<VideoLoader/>
  {/* <HeroSection/> */}
  <Banner/>
  <NakshatraCarousel/>
  <BookAstrologer/>
  <Panchange/>
  <Categories/>
  <Recommended/>
  <Testimonial/> 
    
    </>
  );
}
