import React from 'react'
import {PrimaryBtnElement, Icon} from "./PrimaryBtnElements"
import { BiRightArrowCircle } from "react-icons/bi";

const PrimaryBtn = ({children}) => {
    return (
      <>
        <PrimaryBtnElement to="/sign-up">
          {children}
          <Icon>
            <BiRightArrowCircle />
          </Icon>
        </PrimaryBtnElement>
      </>
    );
}

export default PrimaryBtn
