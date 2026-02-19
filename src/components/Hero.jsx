import "./Hero.css"
import { easeInOut, motion } from "framer-motion"
import image from "../assets/prem.jpg"
function Hero(){
    return(
        <section className="hero" id="hero">
            <div className="left">

            <h1>Hii, I am </h1><h1 className="typing">Prem Khatri,</h1>
            <h1>Frontend Developer </h1>
            <p>I am a passionate web developer focused on building modern,<br></br> responsive, and high-performance websites with clean and efficient code.</p>
            </div>
            <div className="right">
                 <motion.img
          src={image}
          alt="profile"
            initial={{ opacity: 1, y: 0 }}

  whileInView={{y:0, opacity: 1 }}

  whileOutOfView={{ opacity: 0, y:100 }}

  transition={{ duration: 5 }}

  viewport={{ once: false }}
        />
            </div>
        </section>
    )
}
export default Hero