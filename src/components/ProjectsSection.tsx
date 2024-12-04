import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-200">
      <h2 className="text-3xl text-center mb-10 text-white font-semibold">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="Aiolia Beach Bar Website"
          description="React-based web application designed to provide an engaging and informative online presence for Aiolia Beach Bar."
          link="https://aiolia.gr/"
        />
        <ProjectCard
          title="ELLP App"
          description="React Native-based mobile application designed to provide a convenient way to access ELLP membership benefits, including discounts, events and special offers."
          link="#"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
