import React, { Suspense } from "react";
import Header from "./components/Header/Header.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // CSS
import "./app.css";

const App = () => {
  return (
    <div>
      <Header />      
    </div>
  );
};

export default App;
