import ProjectPanel from "../components/ProjectPanel";
import "./all_projects.css";
import websitepng from "../assets/website.png";
import reactsvg from "../assets/react.svg";
import css3svg from "../assets/css3.svg";
import html5svg from "../assets/html5.svg";
import typescriptsvg from "../assets/typescript.svg";
import mysqlsvg from "../assets/mysql.svg";
import pythonsvg from "../assets/python.svg";
import csharpsvg from "../assets/csharp.svg";
import unitysvg from "../assets/unity.svg";
import cplusplussvg from "../assets/cplusplus.svg";
import javascriptsvg from "../assets/javascript.svg";
import javasvg from "../assets/java.svg";

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
          /*to="/all-projects/website"*/
          filterColor="#8673A1"
        />
        <ProjectPanel
          projectName="Futures Market Bank"
          description="A mock banking application. Made as a final project for a databases class."
          image={websitepng}
          technologies={[mysqlsvg, pythonsvg]}
          github="https://github.com/UltraDagon/FuturesMarketBank"
          filterColor="#7D8471"
        />
        <ProjectPanel
          projectName="Uh oh! / Black Hole Game"
          description="Uh oh! Something Went Wrong in The Lab! Is a game made for MST's ACM 'Gravity' themed game jam. I created it alongside my good buddy Reece."
          image={websitepng}
          technologies={[unitysvg, csharpsvg]}
          github="https://github.com/UltraDagon/BlackHoleGame"
          filterColor="#D5C033"
        />
        <ProjectPanel
          projectName="Mining Game (Name TBD)"
          description="Mining game I've been working on recently. Going for a Learn to Fly progression style while being a 2d mining game."
          image={websitepng}
          technologies={[cplusplussvg]}
          github="https://github.com/UltraDagon/Mining-Game"
          filterColor="#79553D"
        />
        <ProjectPanel
          projectName="FIRST Robotics Scouting App"
          description="Scouting app for logging information about other teams at FIRST Robotics Competitions. Made for team 1706 Ratchet Rockers."
          image={websitepng}
          technologies={[javasvg]}
          github="https://github.com/rr1706/Scouting-2020"
          filterColor="#9B111E"
        />
        <ProjectPanel
          projectName="No More Twitter Blue"
          description="Chrome extension that clears your feed of posts from Twitter Blue accounts."
          image={websitepng}
          technologies={[javascriptsvg]}
          github="https://github.com/UltraDagon/NoMoreTwitterBlue"
          filterColor="#2141A3"
        />
      </div>
    </>
  );
}

export default AllProjects;
