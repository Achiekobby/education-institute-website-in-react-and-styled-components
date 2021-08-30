import styled from "styled-components";
import {Link} from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const HeroElements = styled.section`
position: relative;
width: 100%;
height: 90vh;
`;
export const HeroContainer = styled.div`
max-width: 1000px;
height: 100%;
padding: 0 60px;
margin: 0 auto;
`;
export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
export const HeroContent = styled.div`
  z-index: 10;
  background: transparent;
  border-left: 3px solid #2ec4b6;
  max-width: 500px;
  padding: 0 1.5rem;

  @media screen and (max-width:768px){
     
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;
export const HeroBgImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
-o-object-fit: cover;
z-index: 2;
`;
export const HeroInfo = styled.div`
background: #f4f4f4;
border: none;
padding: 1.5rem 1.3rem;
`;
export const TopLine = styled.p`
text-transform: uppercase;
font-size: .75rem;
margin: 1.2rem 0;
font-weight: 400;
letter-spacing: 0.15rem;

`;
export const HeadLine = styled.h1`
font-size: clamp(1.5rem, 3vw,3rem);
color: #0a0a0a;
font-weight: 600;
line-height: 1.3;
margin-bottom: 1.85rem;
`;
export const Content = styled.p`
font-size: clamp(0.4rem, 3vw, 0.75rem);
color: #0a0a0a;
font-weight: 400;
line-height: 1.6;
margin-bottom: 1.85rem;
`;
export const FormElement = styled.form`
  background: #f4f4f4;
  border: 1px solid #2ec4b6;
  height: 50px;
  width: 80%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding-left: 10px;

  input {
    outline: none;
    border: none;
    background: transparent;
    font-size: 0.85rem;
    font-weight: 600;

    &::placeholder {
      text-transform: capitalize;
      font-weight: 600;
      font-size: 0.85rem;
      color: #999;
    }
  }
`;
export const SubmitBtn = styled(Link)`
  width: 60px;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #2ec4b6;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.05);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background: #2a9d8f;
    transition: all 0.5s ease-in-out;
  }
`;
export const SearchBtn = styled(FaSearch)`
font-size: 1.5rem;
color: #FFF;
`;