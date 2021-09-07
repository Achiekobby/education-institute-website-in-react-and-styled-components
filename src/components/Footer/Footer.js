import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterImg from "../../assets/images/happy-students.jpg";
import {
  GetInTouchItems,
  PlatformData,
  ResourceData,
} from "../../data/FooterData";
import { links } from "../../data/Navdata";

import {
  FooterElements,
  FooterContainer,
  FooterWrapper,
  FooterSection,
  FooterHead,
  FooterTitle,
  Circle,
  FooterLinks,
  FooterBg,
  FooterBgImg,
  FooterItems,
  Line,
  Icon,
  LinkItem,
  FooterSocial,
  FooterSocialIcons,
  FooterCopy,
  FooterCopyContent
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterElements>
      <FooterBg>
        <FooterBgImg src={FooterImg} alt="Happy-Students" />
      </FooterBg>
      <FooterContainer>
        <FooterWrapper>
          <FooterSection>
            <FooterHead>
              <Circle></Circle>
              <FooterTitle>Company</FooterTitle>
            </FooterHead>
            <FooterItems>
              {links.map((link) => {
                const { id, path, title } = link;
                return (
                  <FooterLinks to={path} key={id}>
                    {title}
                  </FooterLinks>
                );
              })}
            </FooterItems>
          </FooterSection>
          <FooterSection>
            <FooterHead>
              <Circle></Circle>
              <FooterTitle>PlatForm</FooterTitle>
            </FooterHead>
            <FooterItems>
              {PlatformData.map((item) => {
                return <FooterLinks>{item}</FooterLinks>;
              })}
            </FooterItems>
          </FooterSection>
          <FooterSection>
            <FooterHead>
              <Circle></Circle>
              <FooterTitle>Resources</FooterTitle>
            </FooterHead>
            <FooterItems>
              {ResourceData.map((item) => {
                return <FooterLinks>{item}</FooterLinks>;
              })}
            </FooterItems>
          </FooterSection>
          <Line></Line>
          <FooterSection>
            <FooterHead>
              <Circle></Circle>
              <FooterTitle>Contacts</FooterTitle>
            </FooterHead>
            <FooterItems>
              {GetInTouchItems.map((items) => {
                const { icon, link } = items;
                return (
                  <FooterLinks>
                    <Icon>{icon}</Icon>
                    <LinkItem>{link}</LinkItem>
                  </FooterLinks>
                );
              })}
              <FooterSocial>
                <FooterSocialIcons>
                  <FaFacebookF className="icon" />
                  <FaTwitter className="icon" />
                  <FaInstagram className="icon" />
                  <FaGithub className="icon" />
                </FooterSocialIcons>
              </FooterSocial>
            </FooterItems>
          </FooterSection>
        </FooterWrapper>
      </FooterContainer>
    <FooterCopy>
        <FooterCopyContent>By Achiekobby, 2021</FooterCopyContent>
    </FooterCopy>
    </FooterElements>

  );
};

export default Footer;
