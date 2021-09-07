import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/images/cityedu-logo.jpg";
import { Button } from "../../global/Button";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { links } from "../../data/Navdata";
import {
  NavbarElements,
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  Logo,
  MobileMenu,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
} from "./MainNavbarElements";

const MainNavbar = ({ isOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScrollNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);
  }, []);

  return (
    <IconContext.Provider value={{ color: "#FFF" }}>
      <NavbarElements scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarWrapper>
            <NavbarLogo to="/" onClick={toggleHome}>
              <Logo src={LogoImage} alt="City-Education-Logo" />
            </NavbarLogo>
            <MobileMenu onClick={isOpen} color="#0a0a0a" />
            <NavMenu>
              <NavItems>
                {links.map((link) => {
                  return (
                    <NavLinks
                      key={link.id}
                      to={link.path}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClass="active"
                    >
                      {link.title}
                    </NavLinks>
                  );
                })}
              </NavItems>
            </NavMenu>
            <NavBtn>
              <Button>
                Try for Free{" "}
                {/* <span>
                  <FaLongArrowAltRight />
                </span> */}
              </Button>
            </NavBtn>
          </NavbarWrapper>
        </NavbarContainer>
      </NavbarElements>
    </IconContext.Provider>
  );
};

export default MainNavbar;
