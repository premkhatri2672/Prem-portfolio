import "./Skills.css"
import { motion } from "framer-motion"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import python from "../assets/python.png"
import dbms from "../assets/dbms.png"
import sql from "../assets/sql.png"
import cpp from "../assets/c++.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import php from "../assets/php.png"
import react from "../assets/react.png"
function Skills(){
    const skills =[html,css,js,python,php,react,sql,cpp,dbms,git,github]
    const loopSkills = [...skills, ...skills]

    return(
        <section className="skills" id="skills">

            <h1>My Skills</h1>
                  <div className="slider">

        <motion.div
          className="slide-track"

          animate={{ x: ["-50%", "0%"] }}

          transition={{
            repeat: Infinity,
            duration: 20,
            ease:"linear"
          }}
        >

          {loopSkills.map((skill, index) => (
            <div className="slide" key={index}>
              <img src={skill} alt="skill"/>
            </div>
          ))}

        </motion.div>
          </div>
            
                 
        </section>
    )
}

export default Skills
