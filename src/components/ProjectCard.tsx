import React from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => {
  return (
    <motion.div
      className="p-4 shadow-lg shadow-pink rounded-lg hover:shadow-xl transition flex flex-col justify-between h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-5 py-1 text-lg font-semibold text-background bg-pink rounded-full hover:bg-pink-600 hover:scale-105 transition-all duration-300 ease-in-out transform self-start"
      >
        See live
      </a>
    </motion.div>
  );
};

export default ProjectCard;
