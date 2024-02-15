import { Routes, Route} from "react-router-dom";
import About from "./About.js";
import CVPage from './CVPage.js';
import Projects from "./Projects.js";
import Home from "./Home.js";
import Ollie from './Ollie.js';
import Contact from './Contact.js';
import './App.css';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<CVPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ollie" element={<Ollie />} />
    </Routes>
  );
}
export default App;