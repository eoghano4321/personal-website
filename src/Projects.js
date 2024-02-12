import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Some of the projects I've been working on</h1>
        <div className="list-group">
            <Button className="list-group-item list-group-item-action"onClick={() => navigate('/Projects/ise')}>Immersive Software Engineering</Button>
            <Button className="list-group-item list-group-item-action"onClick={() => navigate('/Projects/task-planning')}>Obsidian Task Planning</Button>
            <Button className="list-group-item list-group-item-action"onClick={() => navigate('/Projects/gamedev')}>Game Development</Button>
        </div>
      </div>
    </>
  )
}

export default Projects
