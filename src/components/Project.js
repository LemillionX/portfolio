import '../styles/Project.css'
import { Link } from 'react-router-dom';
import ProjectThumbnail from './ProjectThumbnail';
import { useEffect } from 'react';

function getRandomElementsFromArray(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

const Project = ({section, project }) => (
    useEffect(() => {
        document.body.style.backgroundBlendMode = "overlay";
      }),
    <div className="portfolio-project">
        <h1 className='project-title'> <Link to={"/"+section.id} className='project-header' >  {section.name}</Link> - {project.name} </h1>
        <div className='project-content'>
            <div>
                <iframe src={project.media} alt={project.media} className="portfolio-media" frameBorder="0" ></iframe>
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