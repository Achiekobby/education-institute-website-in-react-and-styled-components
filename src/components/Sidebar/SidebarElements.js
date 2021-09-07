import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Link as LinkS} from "react-scroll"

export const SidebarElement = styled.aside`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #f2f2f2;
z-index: 999;
opacity: ${({ isOpen })=>(isOpen ? "1" :"0")};
left: ${({ isOpen })=>(isOpen ? "0":"100%")};
transition: all 1s ease-in-out;
z-index: 999;

`;
export const SidebarContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #0a0a0a;
`;
export const SidebarWrapper = styled.div``;
export const SidebarIcon = styled.div`
position: absolute;
top: 20px;
right: 20px;
`;
export const CloseIcon = styled(FaTimes)`
font-size: 2.1rem;
`;
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(7, 1fr);
grid-gap: 2.5rem;
width: 100%;
`;
export const SidebarLink = styled(LinkS)`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: #0a0a0a;

  &.active {
    color: #dd1d62;
    font-weight: 600;
  }
`;
export const SidebarBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
export const RegisterBtn = styled(Link)`
  border: 2px solid #0a0a0a;
  padding: 0.85rem 1.6rem;
  border-radius: 5px;
  color: #0a0a0a;
  width: 200px;
  text-align:center;
  margin-bottom: 20px;
  font-size: 1.15rem;
  background: transparent;
`;
export const LoginBtn = styled(Link)`
  border: none;
  padding: 0.85rem 1.8rem;
  text-align:center;
  width: 200px;
  border-radius: 5px;
  color: #F2F2F2;
  margin-bottom: 20px;
  font-size: 1.15rem;
  background: #0a0a0a;
`;
export const SidebarSocial = styled.div`
margin-top: 50px;
text-align: center;
`;