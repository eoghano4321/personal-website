import NavBar from "./components/NavBar";
import './About.css';


function ObsProj() {
  
  return (
    <>
    
    <NavBar />
      <div>
        <section className="main-content">
        <div>
            <h1 >Task Planning Project for Obsidian.md</h1>
            <div className="content-text">
              <p>This project is a task planning plugin for the Obsidian.md note taking app</p>
              <p>Check it out on: <a href="https://github.com/eoghano4321/TaskPlanner">GitHub</a></p>

            </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default ObsProj;
