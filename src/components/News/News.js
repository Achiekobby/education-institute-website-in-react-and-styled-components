import React from "react";
import { NewsData } from "../../data/NewsData";
import Card from "./Card";

import {
  NewsElements,
  NewsContainer,
  NewsHeader,
  Title,
  ShadowText,
  NewsWrapper,
} from "./NewsElements";

const News = () => {
  return (
    <NewsElements id="news">
      <NewsContainer>
        <NewsHeader>
          <Title>News</Title>
          <ShadowText>News</ShadowText>
        </NewsHeader>
        <NewsWrapper>
          {NewsData.map((newsItem) => {
            return <Card key={newsItem.id} {...newsItem} />;
          })}
        </NewsWrapper>
      </NewsContainer>
    </NewsElements>
  );
};

export default News;
