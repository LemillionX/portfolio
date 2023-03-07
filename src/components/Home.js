import './Home.css';
import Banner from './Banner';
import ProjectThumbnail from './ProjectThumbnail';
import projects from '../indexes/animations.json'


const Home = () => (
    <div className='portfolio'>
      <Banner/>
      {projects.elements.map( (project) => 
          <ProjectThumbnail key={project.id}
            imageUrl={project.thumbnail}
            title={project.name}
            linkUrl={`./${project.id}`}
            />
        )}
    </div>

);


export default Home;