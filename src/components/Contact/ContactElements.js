import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

export const ContactElements = styled.section`
  margin: 5rem 0 5rem;
  position: relative;
  width: 100%;
`;
export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(100, 200, 200, 0.2) 0%,
        rgba(100, 200, 200, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
  }
`;
export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const ContactContainer = styled.div`
  max-width: 1000px;
  height: 100%;
  padding: 10rem 50px;
  margin: 0 auto;
`;
export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const HeadLine = css`
  font-size: clamp(1.2rem, 2vw, 2.5rem);
  font-weight: 500;
  color: #fff;
  margin-bottom: 15px;
`;

const Wrapper = css`
  padding: 0.3rem 0;
  width: 100%;
`;

const Description = css`
  font-size: 0.85rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const Form = css`
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  border-radius: 50px;
  margin-top: 30px;
`;

const Input = css`
  background: transparent;
  border: none;
  flex-basis: 50%;
  padding: 1rem 0.5rem;
  color: #fff;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: #fff;
    font-weight: 500;
    font-size: 0.85rem;
  }
`;
// LEARNER CARD
export const LearnerElement = styled.div`
  flex-basis: 50%;
  max-width: 430px;
  background: rgba(0, 0, 0, 0.8);
  border: none;
`;
export const LearnerContainer = styled.div`
  padding: 2rem 1.5rem;
`;
export const LearnerWrapper = styled.div`
  ${Wrapper};
`;
export const LearnerHeadLine = styled.h2`
  ${HeadLine};
`;
export const LearnerDesc = styled.p`
  ${Description};
`;
export const LearnerForm = styled.form`
  ${Form};
  background: #206e66;
`;
export const LearnerInput = styled.input`
  ${Input};
`;
export const LearnerBtn = styled.div`
  flex-basis: 50%;
  max-width: 100px;
  background: #0c0f11;
  padding: 0.5rem 1.5rem;
  text-align: center;
  border-radius: 50px;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 480px) {
    width: 150px;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
  }
`;
export const LearnerBtnSubmit = styled(Link)`
  font-size: clamp(0.5rem, 2vw, 0.85rem);
  color: #fff;
`;

// TEACHER CARD
export const TeacherElement = styled.div`
  flex-basis: 50%;
  max-width: 430px;
  background: rgba(65, 194, 182, 0.8);
  border: none;
`;
export const TeacherContainer = styled.div`
  padding: 2rem 1.5rem;
`;
export const TeacherWrapper = styled.div`
  ${Wrapper};
`;
export const TeacherHeadLine = styled.h2`
  ${HeadLine};
`;
export const TeacherDesc = styled.p`
  ${Description}
`;
export const TeacherForm = styled.form`
  ${Form};
  background: #080808;
`;
export const TeacherInput = styled.input`
  ${Input};
`;
export const TeacherBtn = styled.div`
  flex-basis: 50%;
  background: #2ec4b6;
  padding: 0.5rem 1.2rem;
  text-align: center;
  border-radius: 50px;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 480px) {
    width: 150px;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
  }
`;
export const TeacherBtnSubmit = styled(Link)`
  font-size: clamp(0.5rem, 2vw, 0.85rem);
  color: #fff;
`;

// CONTACT DETAILS
export const ContactDetailsElements = styled.div`
  margin: 3rem 0 3rem;
  width: 100%;
`;
export const ContactDetailsContainer = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto;
`;
export const ContactDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ContactIcon = styled.i`
  font-size: 2rem;
`;

export const ContactDetailsIcon = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  box-shadow: 3px 4px 10px -1px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactDetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 290px;
  background: #fff;
  border: 1px solid #eee;
  padding: 0.5rem 0.6rem;
  transition: all 0.5s ease-in-out;

  &:hover ${ContactIcon} {
    color: #fff;
    transition: all 0.5s ease-in-out;
  }

  &:hover ${ContactDetailsIcon} {
    background: #2ec4b6;
    transition: all 0.5s ease-in-out;
  }
`;

export const ContactContent = styled.div`
  margin-left: 15px;
`;

export const Title = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 0.65rem;
  font-weight: 400;
`;
