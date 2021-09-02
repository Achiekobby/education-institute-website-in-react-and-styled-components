import React from "react";
import { CourseData } from "../../../data/Courses/PreviewData";
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

const CoursesPreview = () => {
  return (
    <CoursePreviewElements id='courses'>
      <CoursePreviewContainer>
        <CoursePreviewHead>
          <HeadLine>Our Awesome Courses</HeadLine>
          <TopLine>Courses</TopLine>
        </CoursePreviewHead>
        <CoursePreviewWrapper>
              {CourseData.map((data,index)=>{
                  return (
                    <CoursePreviewCard key={index}>
                      <CourseCardImage>
                        <ImgFile src={data.imgFile} alt='' />
                        <ImgFileOverlay>
                          <span>{data.overlayContent} </span>Enrolled
                        </ImgFileOverlay>
                      </CourseCardImage>
                      <CardTutor>
                        <TutorImg>
                          <TutorImgFile src={data.tutorImg} />
                        </TutorImg>
                        <TutorName>{data.tutorName}</TutorName>
                      </CardTutor>
                      <CardCourseTitle>{data.courseTitle}</CardCourseTitle>
                      <CardCourseDesc>{data.courseDesc}</CardCourseDesc>
                      <hr />
                      <CourseDetails>
                        <Lessons>
                          <Icon>
                            <OpenBook />
                          </Icon>
                          <NumberOfLessons>{data.numberOfLessons} Lessons</NumberOfLessons>
                        </Lessons>
                        <PriceDetail>
                          Price: <span>${data.price}</span>
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
