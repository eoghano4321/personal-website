import NavBar from "./components/NavBar";
import './About.css';


function Ise() {
  
  return (
    <>
    
    <NavBar />
      <div>
        <section className="main-content">
        <div>
            <h1 >Immersive Software Engineering</h1>
            <div className="content-text">
              <p>I am part of the 1st cohort of <a href="www.software-engineering.ie" >Immersive Software Engineering</a> in University of Limerick</p>
              <p>This is an innovative course with project-based learning and 5 paid internships over the 4 year course</p>

            </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default Ise;
