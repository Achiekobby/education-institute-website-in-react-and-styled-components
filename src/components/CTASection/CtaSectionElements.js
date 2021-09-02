import styled from "styled-components";
import { Link } from "react-router-dom";

export const CtaElements = styled.div`
  width: 100%;
  height: 15vh;
  margin-top: -50px;
  

  @media screen and (max-width:768px){
      height: 20vh;
  }
`;
export const CtaContainer = styled.div`
  max-width: 1000px;
  height: 100%;
  padding: 0 50px;
  margin: 0 auto;
`;
export const CtaWrapper = styled.div`
  background: #FFF;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-left: 5px solid #2ec4b6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media screen and (max-width:768px){
      padding: 1.5rem 0;
  }
`;
export const CtaContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
export const TopLine = styled.h2`
  font-size: clamp(1rem, 3vw, 1.4rem);
  font-weight: 600;
  color: #333;
  text-transform: capitalize;
`;
export const CtaBtn = styled(Link)`
  height: 50px;
  background: #2ec4b6;
  width: 160px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 500;
  font-size: 0.85rem;
  padding-left: 10px;

  span {
    margin-left: 3px;
    height: 100%;
    width: 50px;
  }

  @media screen and (max-width:768px){
    margin-top: 20px;
  }
`;
export const Icon = styled.div`
  background: #0fbcad;
  height: 100%;
  width: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
