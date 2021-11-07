import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#2EC4B6" : "#DD1D62")};
  padding: ${({ wide })=>(wide ? "0.85rem 2.3rem": "0.85rem 1.85rem")};
  color: #FFF;
  border-radius: 5px;
  border: none;
  font-size:${({ wide })=>(!wide ? "0.85rem":"0.98rem")};
  transition: all .5s ease;

  &:hover{
    transform: scale(1.05);
    transition: all .5s ease;
  }
`;

export const RoundedButton = styled(Link)`
background: ${({ primary })=>(primary ? "$2EC4B6":"#080808")};
color: #FFF;
border: none;
border-radius: 25%;
font-size: 1.05rem;
padding: 1.2rem 2rem;
`