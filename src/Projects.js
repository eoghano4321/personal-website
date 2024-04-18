import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import NavBar from "./components/NavBar";
import './Projects.css';

function Projects() {
  const navigate = useNavigate();
  
  return (
    <>
        <NavBar />
      <section className="projects">
        <h1>Some of the projects I've been working on</h1>
        <div className="list-group">
            <Button className="list-group-item list-group-item-action"onClick={() => navigate('/projects/SignUp')}>Sign Up</Button>
            <Button className="list-group-item list-group-item-action"onClick={() => navigate('/projects/ise')}>Immersive Software Engineering</Button>
            <Button className="list-group-item list-group-item-action"onClick={() => navigate('/projects/task-planning')}>Obsidian Task Planning</Button>
            <Button className="list-group-item list-group-item-action"onClick={() => navigate('/projects/gamedev')}>Game Development</Button>
        </div>
      </section >
    </>
  )
}

export default Projects
