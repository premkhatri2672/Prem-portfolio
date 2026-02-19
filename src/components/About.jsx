import "./About.css"
import { motion } from "framer-motion"
import image from "../assets/about.jpg"

function About(){
  return(
    <section className="about" id="about">

  
      <h2>About Me</h2>

      
      <div className="about-container">

     
        <div className="about-left">
          <p>
            I am a passionate and self-motivated Frontend Web Developer with a strong focus on
            creating modern, responsive, and visually appealing websites. I specialize in building
            clean and efficient user interfaces using HTML, CSS, JavaScript, and React.
          </p>

          <p>
            I enjoy transforming ideas into real-world digital experiences that are both functional
            and user-friendly. I am constantly learning new technologies and improving my skills
            to become a professional full-stack developer.
          </p>
        </div>
        <div className="about-right">
          <motion.img
            src={image}
            alt="profile"
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

      </div>

    </section>
  )
}

export default About
