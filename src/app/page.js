import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Panchange from "./Components/Panchang/Panchange";
import Testimonial from "./Components/Testimonial/Testimonial";
import Recommended from "./Components/Recommanded/Recommanded";
import Categories from "./Components/Categories/Categories";

export default function Home() {
  return (
    <>
  <Header/>
  <Banner/>
  <Panchange/>
  <Categories/>
  <Recommended/>
  <Testimonial/>
    
    </>
  );
}
