import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white">
      <motion.h2
        className="text-3xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg shadow-purple space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold w-32">Name:</span>
            <span className="text-lg">Apostolia Maria Sofianopoulou</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold w-32">Email:</span>
            <span className="text-lg">sofianopoulou@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold w-32">Role:</span>
            <span className="text-lg">Software Developer</span>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/apostolia-sofianopoulou/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Sofianopoulou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
