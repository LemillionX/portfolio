import '../styles/Project.css'
import ProjectThumbnail from './ProjectThumbnail';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Section = ({section}) => (
    useEffect(() => {
        document.body.style.backgroundBlendMode = "normal";
        document.body.style.backgroundImage = "url('" + section.background + "')" ;
      }),
    <div className='portfolio-section'>
        <h1 className='project-title'> <Link to="/" className='project-header'>  Home</Link> - {section.name} </h1>
        <div className='section-desc'> {section.description} </div>
        <div className='project-list'>
        {section.elements.map( (project) => 
          <ProjectThumbnail key={project.id}
            imageUrl={project.thumbnail}
            title={project.name}
            linkUrl={`./${project.id}`}
            />
        )}
        </div>
    </div>
    
);


export default Section;