import React from "react";
import {
  HeroElements,
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroBg,
  HeroBgImg,
  HeroInfo,
  TopLine,
  HeadLine,
  Content,
  FormElement,
  SubmitBtn,
  SearchBtn
} from "./HeroSectionElements";
import HeroImg from '../../assets/images/bg1.jpg'

const HeroSection = () => {
  return (
    <HeroElements id="home">
      <HeroContainer>
        <HeroBg>
          <HeroBgImg src={HeroImg} alt="Happy-Student" />
        </HeroBg>
        <HeroWrapper>
          <HeroContent>
            <HeroInfo>
              <TopLine>Learn From Us</TopLine>
              <HeadLine>
                Better Learning <br /> Better Living
              </HeadLine>
              <Content>
                Why we are the best learning platform in the world? Teaching is
                done by experienced teachers at a low cost.
              </Content>
              <FormElement>
                <input type="text" placeholder="search your course" />
                  <SubmitBtn to="sign-up">
                    <SearchBtn />
                  </SubmitBtn>
              </FormElement>
            </HeroInfo>
          </HeroContent>
        </HeroWrapper>
      </HeroContainer>
    </HeroElements>
  );
};

export default HeroSection;
