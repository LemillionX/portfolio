import '../styles/Project.css'
import { Link } from 'react-router-dom';

const Section = ({section}) => (
    <div className='portoflio-section'>
        <h1> <Link to="/" className='project-section'>  {Home}</Link> - {section.name} </h1>
        <div className=''>
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