import styled from "styled-components";

export const ServiceElements = styled.section`
  margin: 5rem 0 2rem;
`;
export const ServicesContainer = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto;
`;
export const ServicesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0;
`;
export const ServicesImages = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
`;
export const ImageFileOne = styled.div`
  position: relative;
  width: 400px;
  height: 220px;
  margin-right: 30px;
`;

export const ImageFileTwo = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  margin-right: 30px;
`;
export const ImgOne = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const ImgTwo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const ServicesContent = styled.div`
  padding-left: 10px;
`;
export const ServicesHeadLine = styled.h2`
  font-size: 1.85rem;
  font-weight: 600;
  line-height: 1.5;
  color: #0a0a0a;
  margin-bottom: 1rem;
`;
export const ServicesInfo = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #0a0a0a;
  margin-bottom: 1rem;
`;
export const ServicesFeatures = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  row-gap: 30px;
`;
export const Feature = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FeatureImage = styled.div`
  margin-right: 50px;
  width: 100px;
`;
export const FeatureImg = styled.img`
  width: 100%;
`;
export const FeatureContent = styled.div``;
export const HeadLine = styled.h3`
  font-size: 1.06rem;
  font-weight: 600;
  margin-bottom: 0.45rem;
  color: #0a0a0a;
`;
export const Content = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  color: #0a0a0a;
`;
export const ServicesBtn = styled.div`
  margin-top: 50px;
`;

export const TriangleOne = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 0;
  height: 0;
  border-top: 150px solid #2ec4b6;
  border-right: 150px solid transparent;
  z-index: -1;
`;
export const TriangleTwo = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: -1;
  width: 0;
  height: 0;
  border-bottom: 200px solid #2ec4b6;
  border-left: 150px solid transparent;
`;
