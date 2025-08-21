import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import AllProjects from "./Pages/all_projects";
import PortfolioV2 from "./Pages/portfoliov2";

import NavBar from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/portfoliov2" element={<PortfolioV2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
