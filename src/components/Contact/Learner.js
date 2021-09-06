import React from 'react'

import {
    LearnerElement,
    LearnerContainer,
    LearnerWrapper,
    LearnerHeadLine,
    LearnerDesc,
    LearnerForm,
    LearnerInput,
    LearnerBtn,
    LearnerBtnSubmit,
} from "./ContactElements"

const Learner = () => {
    return (
      <LearnerElement>
        <LearnerContainer>
          <LearnerWrapper>
            <LearnerHeadLine>Become a learner</LearnerHeadLine>
            <LearnerDesc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              repellendus iste vitae ducimus provident adipisci!
            </LearnerDesc>
            <LearnerForm>
              <LearnerInput placeholder="Email address" />
              <LearnerBtn>
                <LearnerBtnSubmit to="sign-up">JOIN US</LearnerBtnSubmit>
              </LearnerBtn>
            </LearnerForm>
          </LearnerWrapper>
        </LearnerContainer>
      </LearnerElement>
    );
}

export default Learner
