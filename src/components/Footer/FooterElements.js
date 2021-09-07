import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterElements = styled.section`
  position: relative;
  margin: 5rem 0 0;
  width: 100%;
`;
export const FooterBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;
export const FooterBgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const FooterContainer = styled.div`
  max-width: 1000px;
  padding: 5rem 50px;
  margin: 0 auto;
  padding-bottom: 50px;
`;
export const FooterWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;
export const FooterSection = styled.div`
  width: 100%;
`;
export const FooterHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;
export const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2ec4b6;
  border: 3px solid #fff;
  margin-right: 5px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const FooterTitle = styled.h3`
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const FooterItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  margin-left: 20px;
`;
export const FooterLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  transition: all 0.5s ease-in-out;
  &:hover {
    color: #2ec4b6;
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
  }
`;

export const Line = styled.hr`
  position: absolute;
  right: 30%;
  height: 300px;
  width: 1px;
  background: #fff;
  transform: rotate(90);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.i`
  font-size: 1rem;
  margin-right: 5px;
`;
export const LinkItem = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
`;
export const FooterSocial = styled.div`
  margin-top: 20px;
`;
export const FooterSocialIcons = styled.div`
  color: #fff;
  font-size: 1.5rem;

  .icon {
    margin-right: 20px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover {
      color: #2ec4b6;
      transform: scale(1.05);
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const FooterCopy = styled.div`
  width: 100%;
  padding: 1rem 0;
  background: #080808;
  text-align: center;
`;
export const FooterCopyContent = styled.p`
  color: #fff;
`;
