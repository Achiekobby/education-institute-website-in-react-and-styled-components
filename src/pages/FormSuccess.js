import React from 'react'
import successImg from "../assets/svg/success.svg";
import styled from "styled-components"


const FormSuccessElements = styled.section`
width: 100%;
height: 100vh;
`;
const FormSuccessContainer = styled.div`
max-width:1600px;
padding: 0 30px;
margin: 0 auto;
display: flex;
align-items: center;
height: 100%;
position: relative;
`;
const FormSuccessWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
`;
const FormSuccessLeft = styled.div`
max-width:700px;
text-align: right;
position: absolute;
top: 80%;
left: 70%;
transform: translate(-50%,-50%);
`;
const HeadLine = styled.h1`
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.6;
  text-transform: uppercase;
  /* font-family: "Raleway"; */
  color: #f86d70;
`;
const FormSuccessRight = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;
const SuccessImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ImageFile = styled.img`
width: 100%;
height: 100%;
/* opacity: 0.75; */
`;
const TopLine = styled.h1`
  font-size: clamp(1.5rem, 4vw, 4.85rem);
  font-weight: 700;
  position: absolute;
  top: 10%;
  left: 52%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: #f86d70;
`;
const FormSuccess = () => {
    return (
        <>
            <FormSuccessElements>
                <FormSuccessContainer>
                    <FormSuccessWrapper>
                        <TopLine>Success!</TopLine>
                        <FormSuccessLeft>
                            <HeadLine>We have received Your Request to Join Us</HeadLine>
                        </FormSuccessLeft>
                        <FormSuccessRight>
                            <SuccessImage>
                                <ImageFile src={successImg}></ImageFile>
                            </SuccessImage>
                        </FormSuccessRight>
                    </FormSuccessWrapper>
                </FormSuccessContainer>
            </FormSuccessElements>
        </>
    )
}

export default FormSuccess
