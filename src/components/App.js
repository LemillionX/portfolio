import Home from './Home'
import Project from './Project'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Section from './Section';
import Contact from './Contact';
import Toolbox from './Toolbox';

const requireContext = require.context('../indexes', false, /\.json$/);
const files = requireContext.keys().map(requireContext);

function App() {
  return (
  <Router>
    <div className='portfolio'>
      <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/contact" element={<Contact/> }/>
      <Route path="/toolbox" element={<Toolbox/> }/>
        {files.map( (section) => {
          const routes = [];
          routes.push( <Route key={section.id} path={section.id} element={<Section section={section} />}/>);
          section.elements.map( (project) => 
            routes.push(<Route key={project.id} path={section.id+"/"+project.id} element={<Project section={section} project={project} />}/>)
          )
          return routes;
        }
        )}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
