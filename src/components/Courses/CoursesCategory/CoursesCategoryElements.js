import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {BsArrowRight} from "react-icons/bs"

export const CourseCategoryElements = styled.section`
  position: relative;
  width: 100%;
`;
export const CourseCategoryBg = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
  }
`;
export const CategoryBgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const CourseCategoryContainer = styled.div`
  max-width: 1000px;
  height: 100%;
  padding: 2.5rem 50px;
  margin: 0 auto;
`;
export const CourseCategoryHead = styled.div`
  padding: 1.2rem 2rem;
  position: relative;
`;
export const HeadLine = styled.h3`
  font-size: 1.02rem;
  letter-spacing: 0.03rem;
  font-weight: 400;
  color: #2ec4b6;
  line-height: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const TopLine = styled.h2`
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: 600;
  color: #fff;
  line-height: 1.6rem;
  text-align: center;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
   line-height: 1.6;
  }
`;
export const ShadowText = styled.h1`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  color: #999;
  opacity: 0.2;
  font-style: italic;
`;
export const CourseCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 2.5rem 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 6rem;
  }
`;
export const CardIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid #eee;
  border-radius: 50%;
  background: #fff;
  height: 100px;
  width: 100px;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 1s ease-in-out;
`;
export const CategoryIcon = styled.img`
  padding: 1rem 1rem;
  width: 90%;
`;

export const ForwardIcon = styled(Link)`
  background: #2ec4b6;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: #0fbcad;
  }
`;
export const RightIcon = styled(FaArrowRight)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
`;

export const CourseCategoryCard = styled.div`
  position: relative;
  width: 210px;
  height: 150px;
  background: #fff;
  padding: 1rem 1.5rem;

  &:hover ${ForwardIcon} {
    bottom: 0;
    opacity: 1;
  }
  &:hover ${CardIcon} {
    border: 10px solid #2ec4b6;
    margin: auto;
    transition: all 0.5s ease-in-out;
  }
`;

export const CategoryTitle = styled.h3`
  margin-top: 50px;
  font-size: 1.05rem;
  color: #080808;
  font-weight: 500;
  text-align: center;
`;
export const CategoryInfo = styled.p`
  font-size: 0.85rem;
  color: #080808;
  font-weight: normal;
  text-align: center;
  margin: 0.3rem 0;
`;

export const CategoryBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const SubmitBtn = styled(Link)`
  border: none;
  background: #2ec4b6;
  padding: 1rem 2.8rem;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.5s ease-in-out;
  }
`;
export const ArrowIcon = styled(BsArrowRight)`
  color: #fff;
  font-size: 0.95rem;
  text-align: center;
  margin-left: 3px;
  align-self: center;
  margin-top: 5px;
`;
