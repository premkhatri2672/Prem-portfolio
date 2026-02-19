import "./Hero.css"
import { easeInOut, motion } from "framer-motion"
import image from "../assets/prem.jpg"
function Hero(){
    return(
        <section className="hero" id="hero">
            <div className="left">

            <h2>Hii, I am </h2><h1 className="typing">Prem Khatri,</h1>
            <h2>Frontend Developer </h2>
            <p>I am a passionate web developer focused on building modern,<br></br> responsive, and high-performance websites with clean and efficient code.</p>
            </div>
            <div className="right">
                 <motion.img
          src={image}
          alt="profile"
            initial={{ opacity: 0, y: -50 }}

  whileInView={{y:0, opacity: 1 }}

  whileOutOfView={{ opacity: 0, y:100 }}

  transition={{ duration: 5 }}

  viewport={{ once: true }}
        />
            </div>
        </section>
    )
}
export default Hero