import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as styles from "./styles/header.styles";
import LogoImage from "../../asset/newLogo.png";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));
const HomePage = React.lazy(() => import("HomeApp/HomePage"));
const ConsultOwnPicking = React.lazy(
  () => import("ConsultOwnPickingApp/ConsultOwnPickingPage")
);

export default function Header() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [mfe, setMfe] = useState("");

  const toggleDrawer = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div>
      <Router>
        <styles.HeaderContainer>
          <styles.Logo>
            <styles.LogoIcon>
              <img src={LogoImage} width="50" height="50" alt="Logo" />
            </styles.LogoIcon>
            <styles.LogoText>
              <styles.span>Dev. Front-End</styles.span>
            </styles.LogoText>
            <styles.Header>
            <styles.Nav>
              <styles.LinknNavigation
                to="/"
                onClick={() => setOpenSideBar(false)}
              >
                Home
              </styles.LinknNavigation>
              <styles.ButtonMfe
                onClick={() => {
                  toggleDrawer();
                  setMfe("/Contact");
                }}
              >
                Logistica
              </styles.ButtonMfe>
              <styles.ButtonMfe
                onClick={() => {
                  toggleDrawer();
                  setMfe("/Home");
                }}
              >
                Multicanal
              </styles.ButtonMfe>
              <styles.ButtonMfe
                onClick={() => {
                  toggleDrawer();
                  setMfe("/ConsultOwnPicking");
                }}
              >
                Logistica
              </styles.ButtonMfe>
            </styles.Nav>
          </styles.Header>
          </styles.Logo>
          
        </styles.HeaderContainer>
        <styles.MainContainer
          sideBar={openSideBar}
          style={
            openSideBar
              ? { marginLeft: "256px", transition: "0.2s" }
              : { marginLeft: "16px", transition: "0.2s" }
          }
        >
          <SideBar
            statusSideBar={openSideBar}
            // onClose={toggleDrawer}
            toggleDrawer={toggleDrawer}
            mfe={mfe}
          />
          <main className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                  path="/consultOwnPicking"
                  element={<ConsultOwnPicking />}
                />
              </Routes>
            </Suspense>
          </main>
        </styles.MainContainer>
      </Router>
    </div>
  );
}
