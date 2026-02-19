import "./Projects.css"
import bikeImg from "../assets/bike.png"
import autoImg from "../assets/autodrive.png"
import bodybuildingImg from "../assets/bodybuilding.png"
import flipkartImg from"../assets/flipkart.png"
function Projects(){
  return(
    <section className="projects" id="projects">

      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">

       
        <div className="project-card">
          <img src={bikeImg} alt="Bike Website"/>
          <h2>Bike Website</h2>
          <p>Modern sports bike website with 3D design and animations.</p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>


        {/* Project 2 */}
        <div className="project-card">
          <img src={autoImg} alt="AutoDrive Cars Website"/>
          <h2>AutoDrive Cars Website</h2>
          <p>Luxury cars website with premium UI and smooth animations.</p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>


        {/* Project 3 */}
        <div className="project-card">
          <img src={bodybuildingImg} alt="Bodybuilding Website"/>
          <h2>Bodybuilding Website</h2>
          <p> A modern bodybuilding and fitness website designed to inspire users to build strength, 
    track progress, and achieve their fitness goals. </p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>
        {/* Project 4 */}
        <div className="project-card">
          <img src={flipkartImg} alt="Flipkart Clone Website"/>
          <h2>Flipkart Clone Website</h2>
          <p> Responsive Flipkart clone built with HTML & CSS,  featuring modern UI, product layout, and real-world e-commerce design. </p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects
