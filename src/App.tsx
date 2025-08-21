import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import AllProjects from "./Pages/all_projects";
import CurrentProjects from "./Pages/current_projects";
import APWebsite from "./Pages/projects/website";
import PortfolioV2 from "./Pages/portfoliov2";
import NavBar from "./components/NavBar";

// Note for Dagon: npm run deploy -- -m "message"

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/current-projects" element={<CurrentProjects />} />
        <Route path="/all-projects" element={<AllProjects />} />
        {/*<Route path="/all-projects/website" element={<APWebsite />} />*/}
        <Route path="/portfoliov2" element={<PortfolioV2 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
