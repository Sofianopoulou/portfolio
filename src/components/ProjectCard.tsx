import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => {
  return (
    <div className="bg-background p-4 shadow-lg shadow-pink rounded-lg hover:shadow-xl transition text-white flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        className="mt-4 px-5 py-1 text-lg font-semibold text-background bg-pink rounded-full hover:bg-pink-600 hover:scale-105 transition-all duration-300 ease-in-out transform self-start"
      >
        See live
      </a>
    </div>
  );
};

export default ProjectCard;
