import styled from "styled-components";
import {Link} from "react-router-dom";
import { BiRightArrowCircle } from "react-icons/bi";

export const PrimaryBtnElement = styled(Link)`
  height: 50px;
  background: #2ec4b6;
  width: 160px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 500;
  font-size: 0.85rem;
  padding-left: 10px;

`;
export const Icon = styled.div`
  background: #0fbcad;
  height: 100%;
  width: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled(BiRightArrowCircle)``;