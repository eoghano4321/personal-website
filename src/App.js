import { Routes, Route} from "react-router-dom";
import About from "./About.js";
import CVPage from './CVPage.js';
import Projects from "./Projects.js";
import Home from "./Home.js";
import Ollie from './Ollie.js';
import Contact from './Contact.js';
import Ise from './Ise.js';
import './App.css';
import ObsProj from "./ObsProj.js";
import GameDev from "./GameDev.js";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<CVPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ollie" element={<Ollie />} />
        <Route path="projects/ise" element={<Ise />} />
        <Route path="projects/task-planning" element={<ObsProj />} />
        <Route path="projects/gamedev" element={<GameDev />} />
    </Routes>
  );
}
export default App;