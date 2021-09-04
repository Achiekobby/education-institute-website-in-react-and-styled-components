import React, { useState } from "react";
import CommentData from "../../data/CommentsData";
import CommentBgImg from "../../assets/images/teach-1.jpg"
import {
  CommentsElements,
  CommentBg,
  BgItem,
  CommentsContainer,
  CommentsHeader,
  Title,
  Subtitle,
  ShadowText,
  CommentsWrapper,
  CommentCard,
  CommentImage,
  ImgItem,
  QuoteIcon,
  CommentContent,
  CommentInfo,
  CommentDesc,
  CommentRatings,
  CommentBtnPrev,
  CommentBtnNext,
  PrevIcon,
  NextIcon,
  Quote
} from "./CommentsElements";

const Comments = () => {
  const [index, setIndex] = useState(0);

  const {image, name, title, commentContent,ratings} = CommentData[index]
  const checkIndex = (number)=>{
    if(number > CommentData.length-1){
      return 0
    }
    else if(number < 0){
      return CommentData.length-1
    }
    else{
      return number
    }
  }
  const prevComment = ()=>{
    setIndex((index)=>{
      let newIndex = index+1
      return checkIndex(newIndex)
    })
  }

  const nextComment = ()=>{
    setIndex((index)=>{
      let newIndex = index-1
      return checkIndex(newIndex)
    })
  }

  return (
    <CommentsElements>
      <CommentBg>
        <BgItem src={CommentBgImg} />
      </CommentBg>
      <CommentsContainer>
        <CommentsHeader>
          <Title>Satisfied Clients</Title>
          <Subtitle>What say our clients</Subtitle>
          <ShadowText>Clients</ShadowText>
        </CommentsHeader>
        <CommentsWrapper>
          <CommentBtnPrev onClick={prevComment}>
            <PrevIcon />
          </CommentBtnPrev>
          <CommentCard>
            <CommentImage>
              <ImgItem src={image} alt={name} />
              <Quote>
                <QuoteIcon />
              </Quote>
            </CommentImage>
            <CommentContent>
              <CommentInfo>
                {name}{" "}
                <span>-{" "}{title}</span>
              </CommentInfo>
              <CommentDesc>{commentContent}</CommentDesc>
              <CommentRatings>{ratings}</CommentRatings>
            </CommentContent>
          </CommentCard>
          <CommentBtnNext onClick={nextComment}>
            <NextIcon />
          </CommentBtnNext>
        </CommentsWrapper>
      </CommentsContainer>
    </CommentsElements>
  );
};

export default Comments;
