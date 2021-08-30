import React from "react";
import {
  CtaElements,
  CtaContainer,
  CtaWrapper,
  CtaContent,
  TopLine,
  CtaBtn,
  Icon,
} from "./CtaSectionElements";
import { BiRightArrowCircle } from "react-icons/bi";

const CtaSection = () => {
  return (
    <CtaElements>
      <CtaContainer>
        <CtaWrapper>
          <CtaContent>
            <TopLine>Get Our most popular Courses starting from $5</TopLine>
            <CtaBtn to="/sign-up">
              Enroll Courses
              <Icon>
                <BiRightArrowCircle />
              </Icon>
            </CtaBtn>
          </CtaContent>
        </CtaWrapper>
      </CtaContainer>
    </CtaElements>
  );
};

export default CtaSection;
