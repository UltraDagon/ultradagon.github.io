import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import AllProjects from "./Pages/all_projects";
import CurrentProjects from "./Pages/current_projects";
import Layout from "./layout";
import APWebsite from "./Pages/projects/website";
import PortfolioV2 from "./Pages/portfoliov2";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/all-projects/website" element={<APWebsite />} />
          <Route path="/portfoliov2" element={<PortfolioV2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
