import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import * as styles from "./styles/sideBar.styles";
import Main from "../Main/Main";

export default function SideBar({
  statusSideBar,
  toggleDrawer,
  mfe,
}: {
  statusSideBar: boolean;
  toggleDrawer: any;
  mfe: string;
}) {
  
  //Daniel
  const link:{[key:string]:{path:string;label:string}[]} ={
    "/Contact":[            
      { path: '/contact', label: 'MFE1' },
      { path: '/contact', label: 'MFE2' },            
    ],
    "/Home":[
      { path: '/home', label: 'MFE3' },
      { path: '/home', label: 'MFE4' },
    ],
    "/ConsultOwnPicking":[            
      { path: '/consultOwnPicking', label: 'MFE1' },
      { path: '/consultOwnPicking', label: 'MFE2' },            
    ],
    "":[]
  }
  const LinkNavigation = ({ mfe, onClick }: { mfe: string; onClick: any }) => {
    const getLinks = (mfe: string) => {
     
      return link[mfe];      
    };
//
    

    const links = getLinks(mfe);
    return (
      <div>
        {links.map((link, index) => (
          <styles.LinknNavigationSideBar key={index} to={link.path} onClick={onClick}>
            {link.label}
          </styles.LinknNavigationSideBar>
        ))}
      </div>
    );
  };

  return (
    <styles.SideBar data-testid="sideBar" variant="persistent" open={statusSideBar}>
      <Box sx={{ width: 300 }} role="presentation">
        <Divider />
        <styles.Nav>
          <LinkNavigation mfe={mfe} onClick={toggleDrawer} />
        </styles.Nav>
      </Box>
    </styles.SideBar>
  );
}
