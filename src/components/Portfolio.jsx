import { Link } from "react-router-dom"; // Importing a Link component; Link component is used to create links to different routes
import projects from "../projectData.json";
const Portfolio = () => {
  return (
    <div>
      <h1>My portfolio projects.</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="card col-3">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.deployedUrl} target="_blank">
              <button>Deployed Link</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
