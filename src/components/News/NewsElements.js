import styled, { css } from "styled-components/macro";

export const NewsElements = styled.section`
  width: 100%;
  overflow: hidden;
  margin: 5rem 0 5rem;
  background: #fdfdfd;
`;
export const NewsContainer = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto;
`;
export const NewsHeader = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  padding: 2rem 0;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 0.85rem;
  color: #2ec4b6;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin-bottom: 15px;
  font-weight: 400;
`;
export const ShadowText = styled.h1`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  color: #333;
  opacity: 0.2;
  font-style: italic;
  font-weight: 700;
`;
export const NewsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
export const NewsCard = styled.div`
  max-width: 440px;
  background: #fff;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.3);
  border: none;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
  }
`;

const CardPadding = css`
  padding-left: 20px;
  padding-right: 20px;
`;
export const NewsImage = styled.div`
  height: 100%;
  flex-basis: 50%;
`;
export const NewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const NewsContent = styled.div`
  flex-basis: 50%;
  padding-top: 40px;
  height: 100%;
  position: relative;
`;
export const NewsTitle = styled.h3`
  font-size: 0.8rem;
  color: #080808;
  margin-bottom: 10px;
  ${CardPadding};
`;
export const NewsCategory = styled.h2`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  margin-bottom: 15px;
  ${CardPadding};
`;
export const NewsDesc = styled.p`
  font-size: 0.65rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 30px;
  ${CardPadding};
`;
export const NewsBtn = styled.button`
  background: transparent;
  color: #2ec4b6;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: capitalize;
  border: none;
  position: absolute;
  bottom: 5px;
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .arrowIcon {
    margin-left: 5px;
  }
`;

export const Line = styled.div`
  background: #eee;
  height: 0.01rem;
  display: ${({ readMore }) => (readMore ? "none" : "block")};
`;
