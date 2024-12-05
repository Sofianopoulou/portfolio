import Header from "./components/Header";
import MainSection from "./components/Main";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
import EducationalSection from "./components/EducationalSection";

const App = () => {
  return (
    <div className="font-pridi font-light bg-background overflow-x-hidden text-white">
      <Header />
      <main className="pt-20">
        <MainSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationalSection />
        <Contact />
      </main>
    </div>
  );
};

export default App;
