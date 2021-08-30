import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";
import { MdPlace, MdLocalPhone } from "react-icons/md";

export const TopNavbarElement = styled.div`
  width: 100%;
  height: 50px;
  background: #2ec4b6;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TopNavbarContainer = styled.div`
  max-width: 1400px;
  height: 100%;
  padding: 0 10px;
  margin: 0 auto;
`;
export const TopNavbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const flexAlignment = css`
display: flex;
align-items: center;
justify-content: center;
`

export const NavbarLeftSide = styled.div`
  ${flexAlignment}
`;
export const NavbarDate = styled.div`
  ${flexAlignment}
  margin-right: 2rem;
`;
export const NavigationIcon = styled(MdPlace)`
  margin-right: 3px;
`;
export const NavDay = styled.p`
  color: #f4f4f4;
  font-size: 0.75rem;
  font-weight: 500;
`;
export const NavContact = styled.div`
  ${flexAlignment}
`;
export const PhoneIcon = styled(MdLocalPhone)`
  margin-right: 3px;
`;
export const ContactNumber = styled.p`
  color: #f4f4f4;
  font-size: 0.75rem;
  font-weight: 500;
`;
export const NavbarRightSide = styled.div`
  ${flexAlignment}
`;
export const SocialInfo = styled.p`
  color: #f4f4f4;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
`;
export const NavRegister = styled.div`
  ${flexAlignment}
  margin-left: 15px;
`;
export const Login = styled(Link)`
  ${flexAlignment}
  margin-right: 1.05rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.75rem;
`;
export const LoginText = styled.p`
margin-left: 5px;
`;
export const Register = styled(Link)`
  ${flexAlignment}
  color: #fff;
  font-weight: 500;
  font-size: 0.75rem;
`;
export const RegisterText = styled.p`
  margin-left: 5px;
`;
