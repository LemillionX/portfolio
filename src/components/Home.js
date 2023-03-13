import './Home.css';
import Banner from './Banner';
import ProjectThumbnail from './ProjectThumbnail';
import { useEffect } from 'react';

const requireContext = require.context('../indexes', false, /\.json$/);
const files = requireContext.keys().map(requireContext);

const Home = () => (
    useEffect(() => {
        document.body.style.backgroundBlendMode = "normal";
        document.body.style.backgroundImage = "url('/background/home.png')";
      }),

    <div >
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