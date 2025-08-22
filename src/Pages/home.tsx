import PanelContainer4 from "../components/PanelContainer4";
import FeaturedProject from "../components/FeaturedProject";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./home.css";

import javascriptsvg from "../assets/javascript.svg";
import appsscriptsvg from "../assets/googleappsscript.svg";
import githubsvg from "../assets/github.svg";
import linkedinsvg from "../assets/linkedin.svg";
import emailsvg from "../assets/email.svg";

function Home() {
  return (
    <>
      <div className="main-container">
        <h1>Hey! I'm Dagon</h1>
        <p>
          I'm a 21-year-old college student studying Computer Science at
          Missouri University of Science and Technology.
        </p>
        <p>
          I love game development, art, and taking on projects outside of my
          comfort zone.
        </p>

        <a href="https://linkedin.com/in/dagon-w" target="_blank">
          <img className="socials" src={linkedinsvg} />
        </a>
        <a href="https://github.com/UltraDagon" target="_blank">
          <img className="socials" src={githubsvg} />
        </a>
        <a href="mailto:dagon.williams@gmail.com" target="_blank">
          <img className="socials" src={emailsvg} />
        </a>

        <h1 className="featured-projects-title">Featured Projects</h1>
        <FeaturedProject
          projectName="Operating Standards Update"
          description="A Google Apps Script program that transfers the information from a meeting minutes document to a Google spreadsheet."
          youtubeUrl="https://www.youtube.com/embed/LV4iFOz3Xek"
          technologies={[javascriptsvg, appsscriptsvg]}
          github="https://github.com/UltraDagon/OperatingStandardsUpdate"
        />
        {/*<p>
        <Link to="/all-projects">See all of my projects</Link>
      </p>*/}
        {/*<p>Recent Videos:</p>*/}
        {/*<PanelContainer4 />*/}
      </div>
    </>
  );
}

export default Home;
