import '../styles/Project.css'
import { Link } from 'react-router-dom';


const Project = ({section, project }) => (
    <div className="portfolio-project">
        <h1> <Link to={"/"+section.id} className='project-header'>  {section.name}</Link> - {project.name} </h1>
        <div className='project-content'>
            <div>
                <iframe src={project.media} alt='My Portfolio' className="portfolio-media" ></iframe>
            </div>
            <div className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></div>
        </div>
    </div>

);

export default Project;