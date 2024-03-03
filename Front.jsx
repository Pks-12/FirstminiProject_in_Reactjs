import logo from './images/logo.png';
// import './style.css';
function Front(){
    return(
        <div>
            <nav>
            <div className="logoa">
                <img src={logo} alt="logo" />
        </div>
        <ul>
            <li href="#">Home</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>Login</button>
        </nav>
        </div>
    );
}
export default Front