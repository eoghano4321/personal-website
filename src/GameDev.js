import NavBar from "./components/NavBar";

function GameDev() {
  return (
    <>
    
    <NavBar />
      <div>
        <section className="main-content">
        <div>
            <h1 >Game Development</h1>
            <div className="content-text">
              <p>I have created several small videogames through game jams and personal projects</p>
              <p>Check some of them out on <a href="https://icegoldgames.itch.io/">itch.io</a></p>

            </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default GameDev;
