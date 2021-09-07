import React from "react";
import { LecturerData } from "../../data/LecturesData";
import {
  LecturesElements,
  LecturesContainer,
  LecturesHead,
  HeadLine,
  TopLine,
  ShadowText,
  LecturesWrapper,
  LectureCard,
  LecturerImage,
  ImgFile,
  LecturerInfo,
  LecturerName,
  LecturerTitle
} from "./LecturesElements";

const Lectures = () => {
  return (
    <LecturesElements id="about">
      <LecturesContainer>
        <LecturesHead>
          <HeadLine>Lectures</HeadLine>
          <TopLine>Highly Experienced Teachers</TopLine>
          <ShadowText>Lecture</ShadowText>
        </LecturesHead>
        <LecturesWrapper>
          {LecturerData.map((data, index) => {
            return (
              <LectureCard key={index}>
                <LecturerImage>
                  <ImgFile src={data.lecturerImg} />
                </LecturerImage>
                <LecturerInfo>
                  <LecturerName>{data.lecturerName}</LecturerName>
                  <LecturerTitle>{data.lecturerTitle}</LecturerTitle>
                </LecturerInfo>
              </LectureCard>
            );
          })}
        </LecturesWrapper>
      </LecturesContainer>
    </LecturesElements>
  );
};

export default Lectures;
