import "./Footer.css"
import { motion } from "framer-motion"

function Footer() {
  return (
    <footer className="footer">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        Prem Khatri
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Frontend Developer | React Developer | Building modern web experiences
      </motion.p>

      <div className="footer-links">

        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>

      <motion.p
        className="copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © 2026 Prem Khatri. All rights reserved.
      </motion.p>

    </footer>
  )
}

export default Footer
