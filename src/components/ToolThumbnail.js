import '../styles/thumbnails.css'
import {FaStar} from 'react-icons/fa'

const ToolThumbnail = ({imageUrl, title, description, proficiency}) => (
    <div className="tool-thumbnail">
        <img  className='thumbnail' src={imageUrl} alt={title}></img>
        <div className='tool-description'>
            <p> I'm using Blender for 3D Animation and Compositing. I can also use its API to code in Python. </p>
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