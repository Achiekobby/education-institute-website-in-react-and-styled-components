import React from "react";
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
  const iconStyle = {
    marginRight: "50px",
    fontSize: "1.5rem",
  };
  return (
    <SidebarElement isOpen={isOpen} onClick={toggleTimes}>
      <SidebarContainer>
        <SidebarIcon>
          <CloseIcon />
        </SidebarIcon>
        <SidebarWrapper>
          <SidebarMenu>
            {links.map((link) => {
              return (
                <SidebarLink key={link.id} to={link.path} onClick={closeSideMenu}>
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
