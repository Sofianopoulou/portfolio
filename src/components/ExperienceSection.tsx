import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        className="text-3xl text-center mb-10 text-white font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>

      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ExperienceCard
            company="Blink App"
            role="Frontend Developer"
            duration="Feb 2023 - Dec 2023"
            location="Remote"
            description="Frontend development and UI/UX design of mobile application for Blink App."
            technologies={["Flutter", "AWS"]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
