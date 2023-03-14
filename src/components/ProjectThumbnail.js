import '../styles/thumbnails.css'
import { Link } from 'react-router-dom';

const ProjectThumbnail = ({imageUrl, title, linkUrl }) => (
    <div className="project-thumbnail">
        <Link to={linkUrl} className="project-legend">
        <img  className='thumbnail' src={imageUrl} alt={title}></img>
        <div className='project-legend'>
            <p>{title}</p>
        </div>
        </Link>
    </div>
);

export default ProjectThumbnail;