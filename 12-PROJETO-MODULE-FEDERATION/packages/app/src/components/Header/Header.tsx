import React, { Suspense } from "react";
// import * as styles from "./styles/header.styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


export default function Header() {
    // MF
  
    const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));
    const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  
    return (
      <div>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    );
  };
  
 