import React from "react";

import {
  TeacherElement,
  TeacherContainer,
  TeacherWrapper,
  TeacherHeadLine,
  TeacherDesc,
  TeacherForm,
  TeacherInput,
  TeacherBtn,
  TeacherBtnSubmit,
} from "./ContactElements";

const Teacher = () => {
  return (
    <TeacherElement>
      <TeacherContainer>
        <TeacherWrapper>
          <TeacherHeadLine>Become a teacher</TeacherHeadLine>
          <TeacherDesc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            repellendus iste vitae ducimus provident adipisci!
          </TeacherDesc>
          <TeacherForm>
            <TeacherInput placeholder="Email address" />
            <TeacherBtn>
              <TeacherBtnSubmit to="sign-up">JOIN US</TeacherBtnSubmit>
            </TeacherBtn>
          </TeacherForm>
        </TeacherWrapper>
      </TeacherContainer>
    </TeacherElement>
  );
};

export default Teacher;
