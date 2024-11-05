import "./ProjectPanel.css";
import githubIcon from "../assets/github.svg";
import { Link } from "react-router-dom";

interface Props {
  projectName: string;
  description?: string;
  image?: string;
  technologies: string[];
  to?: string;
  github?: string;
  filterColor?: string;
}

function ProjectPanel(props: Props) {
  return (
    <div className="panel-container" style={{ background: props.filterColor }}>
      <Link to={typeof props.to !== "undefined" ? props.to! : "/all-projects"}>
        <img
          className="bg-img border"
          src={props.image}
          alt={props.projectName}
          draggable="false"
        />
        <div className="title">{props.projectName}</div>
        <div className="description">{props.description}</div>
        <div className="technologies">
          {props.technologies.map((tech, index) => (
            <img src={tech} key={index} />
          ))}
        </div>
      </Link>
      <a href={props.github} target="_blank">
        <img
          className="github"
          src={typeof props.github !== "undefined" ? githubIcon : undefined}
        />
      </a>
    </div>
  );
}

export default ProjectPanel;
