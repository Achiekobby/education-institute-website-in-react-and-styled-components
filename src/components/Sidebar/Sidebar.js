import React, {useState, useEffect} from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { links } from "../../data/Navdata";
import {
  SidebarElement,
  SidebarContainer,
  SidebarWrapper,
  SidebarIcon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  RegisterBtn,
  LoginBtn,
  SidebarSocial,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleTimes, closeSideMenu }) => {

  const [scrollNav, setScrollNav] = useState(false)

  const handleScrollNav=()=>{
    if(window.scrollY >=80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav)
  }, [])


  const iconStyle = {
    marginRight: "50px",
    fontSize: "1.5rem",
  };
  return (
    <SidebarElement scrollNav={scrollNav} isOpen={isOpen} onClick={toggleTimes}>
      <SidebarContainer>
        <SidebarIcon>
          <CloseIcon />
        </SidebarIcon>
        <SidebarWrapper>
          <SidebarMenu>
            {links.map((link) => {
              return (
                <SidebarLink
                  key={link.id}
                  to={link.path}
                  onClick={closeSideMenu}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-100}
                  activeClass="active"
                >
                  {link.title}
                </SidebarLink>
              );
            })}
          </SidebarMenu>
          <SidebarBtn>
            <RegisterBtn to="sign-up">Register</RegisterBtn>
            <LoginBtn to="login">Login</LoginBtn>
          </SidebarBtn>
          <SidebarSocial>
            <FaInstagram style={iconStyle} />
            <FaFacebookF style={iconStyle} />
            <FaGoogle style={iconStyle} />
            <FaTwitter style={iconStyle} />
          </SidebarSocial>
        </SidebarWrapper>
      </SidebarContainer>
    </SidebarElement>
  );
};

export default Sidebar;
