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
      <Link
        to={
          /*Upon clicking the panel: If to is defined, use props.to; Else: if github is defined, use github; else: if neither are defined, stay on this page.*/
          typeof props.to !== "undefined"
            ? props.to!
            : typeof props.github !== "undefined"
            ? props.github!
            : "/all-projects"
        }
        target={
          /*If to isnt defined and github is, clicking the panel will target a new tab*/
          typeof props.to == "undefined" && typeof props.github !== "undefined"
            ? "_blank"
            : "_self"
        }
      >
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
