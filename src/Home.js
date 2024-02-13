import logo from './logo.svg';
import './index.css';

function Home() {
  return (
    <>
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
            <img src={process.env.PUBLIC_URL + '/me.png'} alt="Description of your image" width={312} height={312}></img>
        </div>
        </section>
      </div>
    </>
  );
}

export default Home;
