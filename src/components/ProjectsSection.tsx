import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="px-4 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl text-center mb-10 text-white font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title="Aiolia Beach Bar Website"
              description="React-based web application designed to provide an engaging and informative online presence for Aiolia Beach Bar."
              link="https://aiolia.gr/"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title="ELLP App"
              description="React Native-based mobile application designed to provide a convenient way to access ELLP membership benefits, including discounts, events and special offers."
              link="#"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
