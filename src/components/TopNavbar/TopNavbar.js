import React from "react";
import { BiExit } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { FaInstagram, FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  TopNavbarElement,
  TopNavbarContainer,
  TopNavbarWrapper,
  NavbarLeftSide,
  NavbarDate,
  NavigationIcon,
  NavDay,
  NavContact,
  PhoneIcon,
  ContactNumber,
  NavbarRightSide,
  SocialInfo,
  NavRegister,
  Login,
  LoginText,
  Register,
  RegisterText
} from "./TopNavbarElements";

const TopNavbar = () => {
  const iconStyle = {
    marginRight:"10px",
  }
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <TopNavbarElement>
        <TopNavbarContainer>
          <TopNavbarWrapper>
            <NavbarLeftSide>
              <NavbarDate>
                <NavigationIcon />
                <NavDay>02, Tuesday, Accra-Ghana</NavDay>
              </NavbarDate>
              <NavContact>
                <PhoneIcon />
                <ContactNumber>call us: +233558800264</ContactNumber>
              </NavContact>
            </NavbarLeftSide>
            <NavbarRightSide>
              <SocialInfo>We're active on:</SocialInfo>
              <FaInstagram style={iconStyle} />
              <FaFacebookF style={iconStyle} />
              <FaGoogle style={iconStyle} />
              <FaTwitter style={iconStyle} />
              <NavRegister>
                <Login to="/login">
                  <BiExit size="1rem" />
                  <span>
                    <LoginText>Login</LoginText>
                  </span>
                </Login>
                <Register to="/form">
                  <IoMdLogIn size="1rem" />
                  <span>
                    <RegisterText>Register</RegisterText>
                  </span>
                </Register>
              </NavRegister>
            </NavbarRightSide>
          </TopNavbarWrapper>
        </TopNavbarContainer>
      </TopNavbarElement>
    </IconContext.Provider>
  );
};

export default TopNavbar;
