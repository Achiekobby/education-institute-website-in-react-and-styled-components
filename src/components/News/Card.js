import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  NewsCard,
  NewsImage,
  NewsImg,
  NewsContent,
  NewsCategory,
  NewsTitle,
  NewsDesc,
  NewsBtn,
  Line,
} from "./NewsElements";

const Card = ({ id, title, category, content, newsImage }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <NewsCard key={id}>
      <NewsImage>
        <NewsImg src={newsImage} alt={title} />
      </NewsImage>
      <NewsContent>
        <NewsCategory>{category}</NewsCategory>
        <NewsTitle>{title}</NewsTitle>
        <NewsDesc>
          {readMore ? content : `${content.substring(100)}...`}
        </NewsDesc>
        <Line readMore={readMore}></Line>
        <NewsBtn onClick={handleReadMore}>
          {readMore ? "Show Less" : "Read More"}
          <FaArrowRight className="arrowIcon" />
        </NewsBtn>
      </NewsContent>
    </NewsCard>
  );
};

export default Card;
