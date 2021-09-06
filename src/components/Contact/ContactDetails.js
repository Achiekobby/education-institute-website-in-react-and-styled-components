import React from "react";

import {
  ContactDetailsContainer,
  ContactDetailsWrapper,
  ContactDetailsCard,
  ContactDetailsIcon,
  ContactIcon,
  ContactContent,
  Title,
  Subtitle,
  ContactDetailsElements,
} from "./ContactElements";
import { ContactDetailsData } from "../../data/ContactDetailData";

const ContactDetails = () => {
  return (
    <ContactDetailsElements>
      <ContactDetailsContainer>
        <ContactDetailsWrapper>
          {ContactDetailsData.map((contactItem, index) => {
            const { Icon, title, contact } = contactItem;
            return (
              <ContactDetailsCard>
                <ContactDetailsIcon>
                  <ContactIcon>{Icon}</ContactIcon>
                </ContactDetailsIcon>
                <ContactContent>
                  <Title>{title}</Title>
                  <Subtitle>{contact}</Subtitle>
                </ContactContent>
              </ContactDetailsCard>
            );
          })}
        </ContactDetailsWrapper>
      </ContactDetailsContainer>
    </ContactDetailsElements>
  );
};

export default ContactDetails;
