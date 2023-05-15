import '../styles/Project.css'
import ContactThumbnail from './ContactThumbnail';
import file from '../contact/contact.json';



const ToolThumbnail = ({imageUrl, title, description}) => (
    <div className="project-thumbnail">
        <img  className='thumbnail' src={imageUrl} alt={title}></img>
        <div className='project-legend'>
            <p>{title}</p>
        </div>
    </div>
);

export default ToolThumbnail;