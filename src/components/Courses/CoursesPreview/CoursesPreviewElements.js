import styled from "styled-components";
import { FaBookOpen } from "react-icons/fa";

export const CoursePreviewElements = styled.section`
  margin: 5rem 0 0;
  background: #f9f9f9;
`;
export const CoursePreviewContainer = styled.div`
  max-width: 1000px;
  padding: 2.5rem 50px;
  margin: 0 auto;
`;
export const CoursePreviewHead = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const HeadLine = styled.h3`
  color: #080808;
  text-transform: capitalize;
  font-size: 1.85rem;
  font-weight: 600;
`;
export const TopLine = styled.h1`
  font-size: 4rem;
  font-style: italic;
  text-transform: capitalize;
  color: #999;
  opacity: 0.2;
`;
export const CoursePreviewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  width: 100%;
  place-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
export const CoursePreviewCard = styled.div`
  width: 280px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(46, 196, 182, 0.2);
`;
export const CourseCardImage = styled.div`
  position: relative;
  width: 280px;
  height: 200px;
  margin: 0 auto;
  padding: 15px 15px;
`;
export const ImgFile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const ImgFileOverlay = styled.div`
  padding: 0.75rem 1.2rem;
  background: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px;
  text-align: center;
  color: #080808;
  font-weight: 500;
  font-size: 0.85rem;

  span {
    color: #2ec4b6;
  }
`;
export const CardTutor = styled.div`
  max-width: 300px;
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
export const TutorImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
`;
export const TutorImgFile = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const TutorName = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  color: #080808;
  margin-left: 10px;
`;
export const CardCourseTitle = styled.h3`
  max-width: 300px;
  padding: 0 15px;
  font-size: 1.02rem;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const CardCourseDesc = styled.p`
  max-width: 300px;
  padding: 0 15px;
  font-size: 0.8rem;
  font-weight: normal;
  margin-bottom: 10px;
`;
export const CourseDetails = styled.div`
  max-width: 300px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;
`;
export const Lessons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
export const OpenBook = styled(FaBookOpen)`
  font-size: 1.02rem;
  color: #2ec4b6;
`;
export const NumberOfLessons = styled.p`
  font-size: 0.95rem;
  color: #080808;
  font-weight: 500;
`;
export const PriceDetail = styled.p`
  font-size: 0.95rem;
  color: #080808;
  font-weight: 500;

  span {
    color: #2ec4b6;
  }
`;

export const FilterCategories = styled.div`
  /* margin-left: 20px; */
  margin-bottom: 20px;
  width: 100%;
`;
export const FilterCategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;
export const FilterBtn = styled.button`
  margin-right: 20px;
  font-size: 0.85rem;
  color: ${({ active }) => (active ? "#FFF" : "#2ec4b6")};
  font-weight: 600;
  transition: all 0.5s ease-in;
  background: ${({ active }) => (active ? "#2EC4B6" : "transparent")};
  border: 1px solid #2ec4b6;
  border-radius: 5px;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  margin-bottom: 20px;

  &:hover {
    color: #fff;
    background: #2ec4b6;
    font-weight: 600;
    transition: all 0.5s ease-in;
  }
`;
