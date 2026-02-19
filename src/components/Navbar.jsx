import "./Navbar.css"
import image from "../assets/signature.png"
function Navbar(){
    return(
        <nav className="nav">
            <img src={image} alt="signature"/>

            <ul>
                <li><a href="#home">Home</a></li>
                 <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                   <li><a href="#contact">Contact</a></li>
            </ul>
            <button>Resume ⬇️</button>
        </nav>
    )
}
export default Navbar