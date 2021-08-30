import React, { useState } from "react";
import CtaSection from "../components/CTASection/CtaSection";
import HeroSection from "../components/HeroSection/HeroSection";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNavbar from "../components/TopNavbar/TopNavbar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebarMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggleTimes={handleIsOpen}
        closeSideMenu={closeSidebarMenu}
      />
      <TopNavbar />
      <MainNavbar isOpen={handleIsOpen} />
      <HeroSection />
      <CtaSection/>
      <Services/>
    </>
  );
};

export default Home;
