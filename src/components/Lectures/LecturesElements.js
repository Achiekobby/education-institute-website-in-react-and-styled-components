import styled from "styled-components";

export const LecturesElements = styled.section`
background: #EEEEEE;
width: 100%;
overflow: hidden;

`;
export const LecturesContainer = styled.div`
max-width: 1000px;
padding: 0 50px;
margin: 0 auto;
`;
export const LecturesHead = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem 0;
width: 100%;
`;
export const HeadLine = styled.h3`
font-size: 0.95rem;
font-weight: 400;
letter-spacing: 0.03;
text-transform: uppercase;
margin: 1rem 0;
color: #2ec4b6;
`;
export const TopLine = styled.h2`
font-size: clamp(1rem, 2vw, 2rem);
font-weight: 700;
color: #080808;
text-transform: capitalize;
margin-top: 8px;
`;
export const ShadowText = styled.h1`
font-size: 4rem;
font-weight: 700;
font-style: italic;
color: #999;
position: absolute;
top: 5px;
opacity: .2;
letter-spacing: 0.3rem;
`;
export const LecturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0;
  margin-top: 3.5rem;

  @media screen and (max-width:768px)
  {
      flex-direction: column;
      gap: 20px;
  }
`;
export const LectureCard = styled.div`
width: 200px;
height: 180px;
background: #fff;
position: relative;
padding: 0 1.5rem;
margin: 3rem 0;

`;
export const LecturerImage = styled.div`
width: 160px;
height: 160px;
border: 10px solid #EEEEEE;
border-radius: 50%;
position: absolute;
top: -50%;
left: 50%;
transform: translateX(-50%);
`;
export const ImgFile = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
-o-object-fit: cover;
border-radius: 50%;
`;
export const LecturerInfo = styled.div`
margin-top: 5.5rem;
`
export const LecturerName = styled.h3`
font-size: 1.05rem;
font-weight: 600;
color: #080808;
text-align: center;
`;
export const LecturerTitle = styled.p`
font-size: 0.7rem;
font-weight: 500;
color: #777;
text-align: center;
margin-top: 5px;
margin-bottom: 5px;
`;