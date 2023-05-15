import '../styles/Project.css'
import Banner from './Banner';
import ToolThumbnail from './ToolThumbnail';
import file from '../contact/contact.json';


const Toolbox = () => (
    <div>
        <Banner/>
        <div className='portfolio-toolbox'>
        <ToolThumbnail imageUrl="./thumbnails/animation.png" title="Blender" description="Hey hey" proficiency={4}  />
        <ToolThumbnail imageUrl="./thumbnails/animation.png" title="Python" description="Hey hey" proficiency={1}   />
        </div>
    </div>
);

export default Toolbox;