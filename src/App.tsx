import { HashRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/portfoliov2" element={<PortfolioV2 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
