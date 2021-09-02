import React from "react";
import { generalInfoData } from "../../../data/Courses/GeneralInfoData";

import {
  GeneralInfoElements,
  GeneralInfoContainer,
  GeneralInfoWrapper,
  GeneralInfoItem,
  GeneralInfoIcon,
  InfoIcon,
  GeneralInfoContent,
  Title,
  Subtitle,
} from "./GeneralInfoElements";

const GeneralInfo = () => {
  return (
    <GeneralInfoElements>
      <GeneralInfoContainer>
        <GeneralInfoWrapper>
          {generalInfoData.map((item, index) => {
            return (
              <GeneralInfoItem key={index}>
                <GeneralInfoIcon>
                  <InfoIcon src={item.icon} />
                </GeneralInfoIcon>
                <GeneralInfoContent>
                  <Title>{item.NumberOfItems}</Title>
                  <Subtitle>{item.title}</Subtitle>
                </GeneralInfoContent>
              </GeneralInfoItem>
            );
          })}
        </GeneralInfoWrapper>
      </GeneralInfoContainer>
    </GeneralInfoElements>
  );
};

export default GeneralInfo;
