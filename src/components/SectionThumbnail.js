import '../styles/thumbnails.css'
import { Link } from 'react-router-dom';

const SectionThumbnail = ({imageUrl, title, linkUrl, description="" }) => (
    <div className="section-thumbnail">
        <Link to={linkUrl} className="project-legend">
        <img  className='thumbnail' src={imageUrl} alt={title}></img>
        <div className='section-description'>
            <p> {description} </p>
        </div>
        <div className='project-legend'>
            <p>{title}</p>
        </div>
        </Link>
    </div>
);

export default SectionThumbnail;