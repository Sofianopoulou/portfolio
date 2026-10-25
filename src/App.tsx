import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/Main";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
import EducationalSection from "./components/EducationalSection";

const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className="app-shell font-pridi font-light overflow-x-hidden"
    >
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />
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
