import './index.css';
import NavBar from './components/NavBar';

function Home() {
  
  return (
    <section className='home-page'>
    <NavBar />
      <div>
        <section className='main-content'>
        <div>
            <h1 className='title'>Eoghan O'Mahony</h1>
            <div className="content-text">
              <p>A hardworking third level student pursuing a career in the software development space</p>
              <p>Currently studying Immersive Software Engineering in University of Limerick</p>

            </div>
        </div>
        <div className="content-image">
            <img src={process.env.PUBLIC_URL + '/me.png'} alt="Eoghan O'Mahony" width={312} height={312}></img>
        </div>
        </section>
      </div>
    </section>
  );
}

export default Home;
