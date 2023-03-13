import '../styles/thumbnails.css'
import { Link } from 'react-router-dom';

const ContactThumbnail = ({imageUrl, title, linkUrl }) => (
    <div className="contact-thumbnail ">
        <a href={linkUrl} target="_blank" className="contact-legend">
        <img src={imageUrl} alt={title}></img>
        <div className='contact-legend'>{title} </div>
        </a>
    </div>
);

export default ContactThumbnail;