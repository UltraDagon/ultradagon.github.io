import "./FeaturedProject.css";

interface Props {
  projectName: string;
  description?: string;
  youtubeUrl?: string;
  technologies: string[];
  to?: string;
  github?: string;
}

function FeaturedProject(props: Props) {
  return (
    <div className="featured-project-container">
      <h2>{props.projectName}</h2>
      <div className="video-responsive">
        <iframe
          src={props.youtubeUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <p>{props.description}</p>
      <div className="technologies">
        {props.technologies.map((tech, index) => (
          <img src={tech} key={index} />
        ))}
      </div>
    </div>
  );
}
export default FeaturedProject;
