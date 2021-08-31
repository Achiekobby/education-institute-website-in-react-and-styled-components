import React from "react";
import PrimaryBtn from "../../global/PrimaryBtn/PrimaryBtn";
import ImageOne from "../../assets/images/support.jpg";
import ImageTwo from "../../assets/images/students-park.jpg";
import ImageThree from "../../assets/svg/conference.png";
import ImageFour from "../../assets/svg/group.png";

import {
  ServiceElements,
  ServicesContainer,
  ServicesWrapper,
  ServicesImages,
  ImageFileOne,
  ImageFileTwo,
  ImgOne,
  ImgTwo,
  ServicesContent,
  ServicesHeadLine,
  ServicesInfo,
  ServicesFeatures,
  Feature,
  FeatureImage,
  FeatureImg,
  FeatureContent,
  HeadLine,
  Content,
  ServicesBtn,
  TriangleOne,
  TriangleTwo,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServiceElements id="career">
      <ServicesContainer>
        <ServicesWrapper>
          <ServicesImages>
            <ImageFileOne>
              <TriangleOne/>
              <ImgOne src={ImageOne} alt="" />
            </ImageFileOne>
            <ImageFileTwo>
              <TriangleTwo/>
              <ImgTwo src={ImageTwo} alt="" />
            </ImageFileTwo>
          </ServicesImages>
          <ServicesContent>
            <ServicesHeadLine>
              Start a Profitable Career with <br /> What is about LASSON
            </ServicesHeadLine>
            <ServicesInfo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              doloribus rem repellat totam voluptatem necessitatibus atque
              provident qui quia accusamus?
            </ServicesInfo>
            <ServicesFeatures>
              <Feature>
                <FeatureImage>
                  <FeatureImg src={ImageThree} alt="" />
                </FeatureImage>
                <FeatureContent>
                  <HeadLine>24/7 Support Online-Offline</HeadLine>
                  <Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, sequi.
                  </Content>
                </FeatureContent>
              </Feature>
              <Feature>
                <FeatureImage>
                  <FeatureImg src={ImageFour} alt="" />
                </FeatureImage>
                <FeatureContent>
                  <HeadLine>Well Teaching System</HeadLine>
                  <Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, sequi.
                  </Content>
                </FeatureContent>
              </Feature>
            </ServicesFeatures>
            <ServicesBtn>
              <PrimaryBtn children={`Enroll Course`} />
            </ServicesBtn>
          </ServicesContent>
        </ServicesWrapper>
      </ServicesContainer>
    </ServiceElements>
  );
};

export default Services;
