import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl text-center mb-10 text-white font-semibold">
        Professional Experience
      </h2>
      <div className="space-y-10">
        <ExperienceCard
          company="Erasmus Life Las Palmas"
          role="Website and Application Development Intern (Erasmus+ Traineeship)"
          duration="Sep 2024 - Jan 2025"
          location="Las Palmas de Gran Canaria, Spain"
          description="Design and development of a new mobile application for Erasmus Life Las Palmas, as well as management of the organization's website."
          technologies={[
            "React Native",
            "TypeScript",
            "Firebase",
            "Expo Go",
            "WordPress",
            "Figma",
          ]}
        />
        <ExperienceCard
          company="GWF AG"
          role="Frontend Developer Intern"
          duration="Apr 2024 - Jun 2024"
          location="Thessaloniki, Greece"
          description="Frontend development"
          technologies={[
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Storybook",
            "SonarQube",
          ]}
        />
        <ExperienceCard
          company="Blink App"
          role="Frontend Developer"
          duration="Feb 2023 - Dec 2023"
          location="Remote"
          description="Frontend developmen and UI/UX design of mobile application for Blink App."
          technologies={["Flutter", "AWS"]}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
