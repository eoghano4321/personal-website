import './NavBar.css'
function NavBar(){
    return(
        <nav className='navbar'>
            <ul>
                <li><a href="/"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="Eoghan O'Mahony" ></img></a></li>
                <li><a href="/#/cv">CV</a></li>
                <li><a href="/#/projects">Projects</a></li>
                <li><a href="/#/contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default NavBar;