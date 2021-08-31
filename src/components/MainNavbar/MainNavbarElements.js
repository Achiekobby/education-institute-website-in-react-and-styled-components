import styled from "styled-components";
import { IoGrid } from "react-icons/io5";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const NavbarElements = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  width: 100%;
  height: 80px;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 2px 4px rgba(0,0,0,0.2)" : "none"};
  transition: all 0.5s ease-in-out;
  z-index: 999;
`;
export const NavbarContainer = styled.div`
max-width: 1400px;
height: 100%;
padding: 0 10px;
margin: 0 auto;
`;
export const NavbarWrapper = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const NavbarLogo = styled(LinkR)`
height: 100%;
width: 250px;
display: flex;
align-items: center;
`;
export const Logo = styled.img`
width: 100%;
`;
export const MobileMenu = styled(IoGrid)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 2.15rem;
  }
`;
export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItems = styled.ul`
height: 100%;
display: flex;
align-items: center;
`;
export const NavLinks = styled(LinkS)`
  font-size: 0.85rem;
  font-weight: 500;
  margin-right: 1.5rem;

  &.active {
    color: #dd1d62;
    font-weight: 600;
  }
`;
export const NavBtn = styled.div`
  transition: all 0.5s ease;
  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`;
