import React, { useState } from "react";
import Comments from "../components/Comments/Comments";
import Contact from "../components/Contact/Contact";
import ContactDetails from "../components/Contact/ContactDetails";
import Course from "../components/Courses/Course";
import CtaSection from "../components/CTASection/CtaSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Lectures from "../components/Lectures/Lectures";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import News from "../components/News/News";
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
      <Course/>
      <Lectures/>
      <Comments/>
      <News/>
      <Contact/>
      <ContactDetails/>
    </>
  );
};

export default Home;
