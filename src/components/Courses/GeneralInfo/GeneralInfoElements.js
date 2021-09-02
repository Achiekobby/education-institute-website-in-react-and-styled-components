import styled from "styled-components";

export const GeneralInfoElements = styled.section`
  width: 100%;
  margin: 5rem 0;
  overflow: hidden;
`;
export const GeneralInfoContainer = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto;
`;
export const GeneralInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const GeneralInfoItem = styled.div`
  padding: 2rem 0;
  height: 210px;
  width: 210px;
  border: 10px solid #eee;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: #2ec4b633;
    border: none;
    transform: scale(1.03);
    transition: all 0.5s ease-in-out;
  }
`;
export const GeneralInfoIcon = styled.div`
  width: 50px;
  color: #2ec4b6;
`;
export const InfoIcon = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GeneralInfoContent = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 5px;
  color: #2ec4b6;
`;
export const Subtitle = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  text-align: center;
`;
