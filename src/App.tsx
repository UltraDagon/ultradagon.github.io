import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/home";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import AllProjects from "./Pages/all_projects";
import CurrentProjects from "./Pages/current_projects";
import PortfolioV2 from "./Pages/portfoliov2";

// Note for Dagon: npm run deploy -- -m "message"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PortfolioV2 />} />
          <Route path="/old-home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
          <Route path="/all-projects" element={<AllProjects />} />

          {/* in case of invalid route, return to home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
