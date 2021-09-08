import React, { useState } from "react";
import CoursesCategory from "./CoursesCategory/CoursesCategory";
import CoursesPreview from "./CoursesPreview/CoursesPreview";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import { CourseData } from "../../data/Courses/PreviewData";

const courseCategories = ["all", ...new Set(CourseData.map((data) => data.category))];

const Course = () => {
  const [courseData, setCourseData] = useState(CourseData);
  const [categories, setCategories] = useState(courseCategories);

  const filterCategories = (category) => {
    if (category === "all") {
      setCourseData(CourseData);
      return;
    }
    let newCourseData = CourseData.filter((data) => data.category === category);
    setCourseData(newCourseData);
  };
  return (
    <>
      <CoursesPreview categories={categories} filterCategories={filterCategories} CourseData={courseData} /> 
      <CoursesCategory />
      <GeneralInfo />
    </>
  );
};

export default Course;
