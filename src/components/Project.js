import '../styles/Project.css'
import { Link } from 'react-router-dom';
import ProjectThumbnail from './ProjectThumbnail';

function getRandomElementsFromArray(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

const Project = ({section, project }) => (
    <div className="portfolio-project">
        <h1> <Link to={"/"+section.id} className='project-header'>  {section.name}</Link> - {project.name} </h1>
        <div className='project-content'>
            <div>
                <iframe src={project.media} alt='My Portfolio' className="portfolio-media" ></iframe>
            </div>
            <div className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></div>
        </div>
        <div className='project-suggestions'>
            { 
                getRandomElementsFromArray(section.elements.filter((item) => item.id !== project.id), 4).map( (elem) =>
                <ProjectThumbnail key={elem.id}
                imageUrl={elem.thumbnail}
                title={elem.name}
                linkUrl={`/${section.id+"/"+elem.id}`}
                />
            )
            }
        </div>
    </div>
);

export default Project;