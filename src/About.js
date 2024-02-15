import NavBar from "./components/NavBar";
import './About.css';
function Home() {
  return (
    <>
    
    <NavBar />
      <div>
        <section className="main-content">
        <div>
            <h1>Eoghan O'Mahony</h1>
            <div className="content-text">
              <p>A hardworking third level student pursuing a career in the software development space</p>
              <p>Currently studying Immersive Software Engineering in University of Limerick</p>

            </div>
        </div>
        <div className="content-image">
            <img src='/src/assets/thumbnail-1.jpg' alt="Description of your image" ></img>
        </div>
        </section>
      </div>
    </>
  );
}

export default Home;
