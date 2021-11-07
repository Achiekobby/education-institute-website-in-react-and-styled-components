import styled from "styled-components";
import {Link} from "react-router-dom";
import { BiRightArrowCircle } from "react-icons/bi";

export const PrimaryBtnElement = styled(Link)`
  height: 50px;
  background: ${({ primary }) => (primary ? "#2EC4B6" : "transparent")};
  width: 160px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: ${({ primary })=>(primary?"space-between":"center")};
  color: ${({ primary }) => (primary ? "#fff" : "#2ec4b6")};
  font-weight: 500;
  font-size: 0.85rem;
  padding-left: 10px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #2ec4b6")};
`;
export const Icon = styled.div`
  background: ${({ primary })=>(primary?"#0fbcad":"transparent")};
  height: 100%;
  width: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: ${({ primary })=>(primary ? "flex": "none")};
  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled(BiRightArrowCircle)``;