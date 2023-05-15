import '../styles/Project.css'
import Banner from './Banner';
import ToolThumbnail from './ToolThumbnail';
import file from '../toolbox/toolbox.json';


const Toolbox = () => (
    <div>
        <Banner/>
        <div className='portfolio-toolbox'>
            {file.elements.map((tool) => 
                <ToolThumbnail key={tool.id}
                    imageUrl={tool.thumbnail}
                    title={tool.name}
                    description={tool.description}
                    proficiency={tool.proficiency}
                    />
                )
            }
        </div>
    </div>
);

export default Toolbox;