import './index.css';
import NavBar from './components/NavBar';

function SignUp() {
  return (
    <section className="signup-home-page">
    <NavBar />
      <div>
        <section className='signup-main-content'>
        <div>
            <h1 className='signup-title'>SignUp</h1>
            
            <div className="signup-separator"></div>
            <div className="signup-content-text">
              <h2 className='signup-subtitle'>Learn Sign Language Easily</h2>
              <div 
  style={{
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '56.2500%',
    paddingBottom: 0,
    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
    marginTop: '1.6em',
    marginBottom: '0.9em',
    overflow: 'hidden',
    borderRadius: '8px',
    willChange: 'transform'
  }}
>
  <iframe 
    loading="lazy" 
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      border: 'none',
      padding: 0,
      margin: 0
    }}
    src="https://www.canva.com/design/DAF_Pz4RJog/YF8-7tVSUPW0V4efmjlwHA/view?embed" 
    allowFullScreen={true} 
    allow="fullscreen"
  >
  </iframe>
</div>

<a 
  href="https://www.canva.com/design/DAF_Pz4RJog/YF8-7tVSUPW0V4efmjlwHA/view?utm_content=DAF_Pz4RJog&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
  target="_blank" 
  rel="noopener"
>
  Sign UP
</a> 
by Eoghan O'Mahony


            </div>
        </div>
        </section>
      </div>
    </section>
  );
}

export default SignUp;
