import './Home.css';
import Banner from './Banner';
import ProjectThumbnail from './ProjectThumbnail';

const requireContext = require.context('../indexes', false, /\.json$/);
const files = requireContext.keys().map(requireContext);

const Home = () => (
    <div className='portfolio'>
      <Banner/>
      <div className='portfolio-sections'>
        {files.map( (section) => 
            <ProjectThumbnail key={section.id}
                imageUrl={section.thumbnail}
                title={section.name}
                linkUrl={`./${section.id}`}
                />
            )}
        </div>
    </div>

);


export default Home;