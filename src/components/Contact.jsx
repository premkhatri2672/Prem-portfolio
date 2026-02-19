import "./Contact.css"
import { motion } from "framer-motion"

function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to contact me for projects, collaborations, or any opportunities.
      </motion.p>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>

      </motion.form>

    </section>
  )
}

export default Contact
