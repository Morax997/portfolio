import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import ContactMe from "../ContactMe";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutMe/>
      <MyPortfolio/>
      <ContactMe/>
      <Footer/>
    </>
  )
}