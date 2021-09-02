import React from "react";
import {
  CourseCategoryElements,
  CourseCategoryBg,
  CategoryBgImg,
  CourseCategoryContainer,
  CourseCategoryHead,
  HeadLine,
  TopLine,
  ShadowText,
  CourseCategoryWrapper,
  CourseCategoryCard,
  CardIcon,
  CategoryIcon,
  CategoryTitle,
  CategoryInfo,
  CategoryBtn,
  SubmitBtn,
  ArrowIcon,
  ForwardIcon,
  RightIcon
} from "./CoursesCategoryElements";
import CategoryBg from "../../../assets/images/categorybg.jpg"
import { categoryData } from "../../../data/Courses/CategoryData";

const CoursesCategory = () => {
  return (
    <CourseCategoryElements>
      <CourseCategoryBg>
        <CategoryBgImg src={CategoryBg} alt="" />
      </CourseCategoryBg>
      <CourseCategoryContainer>
        <CourseCategoryHead>
          <HeadLine>Find Perfect One</HeadLine>
          <TopLine>Check Categories and Enroll</TopLine>
          <ShadowText>Courses</ShadowText>
        </CourseCategoryHead>
        <CourseCategoryWrapper>
          {categoryData.map((data, index) => {
            return (
              <CourseCategoryCard key={index}>
                <CardIcon>
                  <CategoryIcon src={data.icon} />
                </CardIcon>
                <CategoryTitle>{data.title}</CategoryTitle>
                <CategoryInfo>{data.numberOfCourses}</CategoryInfo>
                <ForwardIcon>
                    <RightIcon/>
                </ForwardIcon>
              </CourseCategoryCard>
            );
          })}
        </CourseCategoryWrapper>
        <CategoryBtn>
          <SubmitBtn>
            View All Categories{" "}
            <span>
              <ArrowIcon />
            </span>
          </SubmitBtn>
        </CategoryBtn>
      </CourseCategoryContainer>
    </CourseCategoryElements>
  );
};

export default CoursesCategory;
