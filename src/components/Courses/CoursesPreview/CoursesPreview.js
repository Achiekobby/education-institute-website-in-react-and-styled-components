import React from "react";
import CategoriesFilter from "./CategoriesFilter";
import {
  CoursePreviewElements,
  CoursePreviewContainer,
  CoursePreviewHead,
  HeadLine,
  TopLine,
  CoursePreviewWrapper,
  CoursePreviewCard,
  CourseCardImage,
  ImgFile,
  ImgFileOverlay,
  CardTutor,
  TutorImg,
  TutorImgFile,
  TutorName,
  CardCourseTitle,
  CardCourseDesc,
  CourseDetails,
  Lessons,
  Icon,
  OpenBook,
  NumberOfLessons,
  PriceDetail,
} from "./CoursesPreviewElements";

const CoursesPreview = ({ CourseData, filterCategories, categories}) => {
  return (
    <CoursePreviewElements id="courses">
      <CoursePreviewContainer>
        <CoursePreviewHead>
          <HeadLine>Our Awesome Courses</HeadLine>
          <TopLine>Courses</TopLine>
        </CoursePreviewHead>
        <CategoriesFilter filterCategories={filterCategories} categories={categories}/>
        <CoursePreviewWrapper>
          {CourseData.map((data) => {
            const {
              id,
              imgFile,
              overlayContent,
              tutorImg,
              tutorName,
              courseTitle,
              courseDesc,
              numberOfLessons,
              price,
            } = data;
            return (
              <CoursePreviewCard key={id}>
                <CourseCardImage>
                  <ImgFile src={imgFile} alt={courseTitle} />
                  <ImgFileOverlay>
                    <span>{overlayContent} </span>Enrolled
                  </ImgFileOverlay>
                </CourseCardImage>
                <CardTutor>
                  <TutorImg>
                    <TutorImgFile src={tutorImg} />
                  </TutorImg>
                  <TutorName>{tutorName}</TutorName>
                </CardTutor>
                <CardCourseTitle>{courseTitle}</CardCourseTitle>
                <CardCourseDesc>{courseDesc}</CardCourseDesc>
                <hr />
                <CourseDetails>
                  <Lessons>
                    <Icon>
                      <OpenBook />
                    </Icon>
                    <NumberOfLessons>{numberOfLessons} Lessons</NumberOfLessons>
                  </Lessons>
                  <PriceDetail>
                    Price: <span>${price}</span>
                  </PriceDetail>
                </CourseDetails>
              </CoursePreviewCard>
            );
          })}
        </CoursePreviewWrapper>
      </CoursePreviewContainer>
    </CoursePreviewElements>
  );
};

export default CoursesPreview;
