import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface MainContainerProps {
  sideBar: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  flex-direction: column;
  background-color: #E7F7F4;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  color: black;
  background-color: #E7F7F4;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%; 
  margin-left: 30px;
  gap:30px;
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 50%;
`;

export const LogoText = styled.div`,
display:flex;
 width:255px;
`;

export const LinknNavigation = styled(Link)`
  text-decoration: none;
  padding: 10px; // Corrected typo here
  color: #262626;
  margin: 20px !important;
    &:hover {
    background-color: white !important;
  }
`;


export const Nav = styled.nav`
  border: 200px !important;
`;

export const Div = styled.div`
  margin-top: 60px;
  display: flex;
`;

export const MainContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'sideBar',
})<MainContainerProps>`
`;

export const ButtonMfe = styled(Button)`
  color: black !important;
   &:hover {
    background-color: white !important;
  }
`;

export const span =styled.span`
font-size: 30px;

`;