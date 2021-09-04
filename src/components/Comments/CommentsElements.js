import styled, {css} from "styled-components/macro";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const CommentsElements = styled.section`
  width: 100%;
  position: relative;
`;
export const CommentBg = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(100, 200, 200, 0.2) 0%,
        rgba(100, 200, 200, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  }
`;
export const BgItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  z-index: 2;
`;
export const CommentsContainer = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto;
`;
export const CommentsHeader = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: 2.5rem 0;
`;
export const Title = styled.h3`
  font-size: 0.95rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const Subtitle = styled.h2`
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 5rem;
`;
export const ShadowText = styled.h3`
  font-size: 4.5rem;
  font-weight: 700;
  font-style: italic;
  letter-spacing: 0.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #eee;
  opacity: 0.3;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const CommentCard = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.2rem;
  margin: 0 10px;
  border: 5px solid #eee;
  margin-bottom: 30px;
`;
export const CommentImage = styled.div`
  transform: translateY(-50%);
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #eee;
  border-radius: 50%;
  z-index: 2;
`;
export const ImgItem = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  -o-object-fit: cover;
  border: none;
`;

export const Quote = styled.div`
  position: absolute;
  top: -5px;
  right: 20px;
  height: 40px;
  width: 40px;
  background: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const QuoteIcon = styled(FaQuoteRight)`
  color: #2ec4b6;
  text-align: center;
`;
export const CommentContent = styled.div`
  text-align: center;
  max-width: 500px;
  padding: 1rem 0;
  margin: 0 auto;
  margin-top: -5rem;
`;
export const CommentInfo = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;

  span {
    font-size: 0.75rem;
  }
`;
export const CommentDesc = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.6;
  margin-bottom: 15px;
`;
export const CommentRatings = styled.p`
  font-size: 0.85rem;
  margin-bottom: 15px;
`;
const Buttons = css`
  padding: 1.5rem 1.5rem;
  border-radius: 50%;
  border: none;
  background: #fff;
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 2;

  &:hover {
    background: #2ec4b6;
    color: #fff;
    transform: scale(1.05);
    transition: all 1s ease;
  }
`;

export const CommentBtnPrev = styled.button`
  position: absolute;
  left: -20px;
  ${Buttons}
`;
export const CommentBtnNext = styled.button`
  position: absolute;
  right: -20px;
  ${Buttons}
`;
export const PrevIcon = styled(FaArrowLeft)`
font-size: 1.2rem;
`;
export const NextIcon = styled(FaArrowRight)`
font-size: 1.2rem;
`;


