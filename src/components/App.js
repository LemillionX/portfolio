import Home from './Home'
import Project from './Project'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import projects from '../indexes/animations.json'

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {projects.elements.map( (project) => 
          <Route key={project.id} path={project.id} element={<Project section="3D Animations" project={project} />}/>
        )}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
