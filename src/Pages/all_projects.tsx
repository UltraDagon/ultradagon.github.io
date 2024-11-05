import ProjectPanel from "../components/ProjectPanel";
import "./all_projects.css";
import websitepng from "../assets/website.png";
import reactsvg from "../assets/react.svg";
import css3svg from "../assets/css3.svg";
import html5svg from "../assets/html5.svg";
import typescriptsvg from "../assets/typescript.svg";

function AllProjects() {
  return (
    <>
      <div className="layout-container">
        <ProjectPanel
          projectName="ultradagon.github.io"
          description="This website! I wanted to make my own portfolio and have some fun with website development."
          image={websitepng}
          technologies={[reactsvg, css3svg, html5svg, typescriptsvg]}
          github="https://github.com/UltraDagon/ultradagon.github.io"
          to="/all-projects/website"
          filterColor="#2141A3"
        />
        <ProjectPanel
          projectName="Project 2"
          description="Good ole project description."
          image={websitepng}
          technologies={[]}
          filterColor="#7D8471"
        />
        <ProjectPanel
          projectName="Project 3"
          description="Good ole project description."
          image={websitepng}
          technologies={[]}
          filterColor="#D5C033"
        />
        <ProjectPanel
          projectName="Project 4"
          description="Good ole project description."
          image={websitepng}
          technologies={[]}
          filterColor="#79553D"
        />
        <ProjectPanel
          projectName="Project 5"
          description="Good ole project description."
          image={websitepng}
          technologies={[]}
          filterColor="#9B111E"
        />
        <ProjectPanel
          projectName="Project 6"
          description="Good ole project description."
          image={websitepng}
          technologies={[]}
          filterColor="#8673A1"
        />
      </div>
    </>
  );
}

export default AllProjects;
