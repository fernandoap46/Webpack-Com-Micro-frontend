import React, { Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";// CSS
import "./app.css";

const App = () => {
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
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
