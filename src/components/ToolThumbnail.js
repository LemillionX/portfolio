import '../styles/thumbnails.css'
import {FaStar} from 'react-icons/fa'

const ToolThumbnail = ({imageUrl, title, description, proficiency}) => (
    <div className="tool-thumbnail">
        <img  className='thumbnail' src={imageUrl} alt={title}></img>
        <div className='tool-description'>
            <p> {description} </p>
            <p> Proficiency : {Array.from({ length: proficiency }, (_, i) => (
                                    <FaStar />
                                ))}
            </p>
        </div>
        <div className='tool-legend'>
            <p>{title}</p>
        </div>
    </div>
);

export default ToolThumbnail;