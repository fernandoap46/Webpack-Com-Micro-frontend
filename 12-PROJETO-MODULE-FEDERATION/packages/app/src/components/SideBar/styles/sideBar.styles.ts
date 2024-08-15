import { Drawer} from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBar = styled(Drawer)`
  margin-top: 60px; 
  background-color: rgb(133, 103, 64) !important;
  & .MuiDrawer-paper {    
    top: 70px;    
  }
`;

export const Div = styled.div`  
  display: flex;
`;

export const LinknNavigation = styled(Link)`
  text-decoration: none;
  pading: 10px;
  color: #262626;
  margin: 20px  !important;   
`;
export const LinknNavigationSideBar = styled(Link)`
display:flex;
  text-decoration: none;
  pading: 10px;
  color: #262626;
  margin: 20px  !important;   
`;

export const Nav = styled.nav`   
`;
