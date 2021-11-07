import React from 'react'
import {PrimaryBtnElement, Icon} from "./PrimaryBtnElements"
import { BiRightArrowCircle } from "react-icons/bi";

const PrimaryBtn = ({children, primary, to, type}) => {
    return (
      <>
        <PrimaryBtnElement to={!to?"/":to} primary={primary} type = {type}>
          {children}
          <Icon primary={primary}>
            <BiRightArrowCircle />
          </Icon>
        </PrimaryBtnElement>
      </>
    );
}

export default PrimaryBtn
