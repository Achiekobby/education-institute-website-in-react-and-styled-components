import React from "react";
import ContactBgImg from "../../assets/images/contactBg.jpg";
import {
  ContactElements,
  ContactContainer,
  ContactWrapper,
  ContactBg,
  BgImg,
} from "./ContactElements";
import Learner from "./Learner";
import Teacher from "./Teacher";

const Contact = () => {
  return (
    <ContactElements id="contact">
      <ContactBg>
        <BgImg src={ContactBgImg} alt="Contact-Background" />
      </ContactBg>
      <ContactContainer>
        <ContactWrapper>
          <Learner />
          <Teacher />
        </ContactWrapper>
      </ContactContainer>
    </ContactElements>
  );
};
export default Contact;
