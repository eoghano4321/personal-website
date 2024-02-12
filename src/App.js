import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./About";
import CVPage from './CVPage.js';
import Projects from "./Projects.js";
import Home from "./Home.js";
import Navbar from './components/NavBar.js';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<CVPage />} />
      </Routes>
    </>
  );
}
export default App;