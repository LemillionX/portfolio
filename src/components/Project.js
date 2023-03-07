import { Link } from 'react-router-dom';

const Project = ({section, project }) => (
    <div className="portfolio-project">
        <h1> <Link to="/">  {section} </Link> - {project.name} </h1>
        <div className="portfolio-media">
            <img src={project.thumbnail} alt='My Portfolio' className='portfolio-logo'  ></img>
        </div>
        <div className="project-description">
            <p> {project.description} </p>
        </div>
    </div>

);

export default Project;