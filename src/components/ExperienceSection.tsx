import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "GWF AG",
      role: "Frontend Developer",
      duration: "Mar 2025 - Aug 2025",
      location: "Thessaloniki, Greece",
      description:
        "Designed and implemented complex, data-driven user interfaces for web applications, integrating frontend components with REST APIs and contributing to scalable, user-focused software solutions.",
      technologies: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "Git"],
    },
    {
      company: "Erasmus Life Las Palmas",
      role: "Website & Application Development Intern",
      duration: "Sep 2024 - Jan 2025",
      location: "Las Palmas de Gran Canaria, Spain",
      description:
        "Designed and developed a new mobile application for Erasmus Life Las Palmas while managing and maintaining the organization's website and supporting its digital presence.",
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Expo",
        "WordPress",
        "Figma",
      ],
    },
    {
      company: "GWF AG",
      role: "Frontend Developer Intern",
      duration: "Apr 2024 - Jun 2024",
      location: "Thessaloniki, Greece",
      description:
        "Contributed to frontend development using React and supported software quality activities through SonarQube setup and analysis of C++ static-analysis rules.",
      technologies: ["React", "TypeScript", "SonarQube", "C++", "Git"],
    },
    {
      company: "Blink App",
      role: "Frontend Developer",
      duration: "Feb 2023 - Dec 2023",
      location: "London, UK · Remote",
      description:
        "Developed frontend features and contributed to the UI/UX design of a mobile application using Flutter, while working with AWS services to support application scalability and performance.",
      technologies: ["Flutter", "Dart", "AWS", "UI/UX"],
    },
  ];

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
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.duration}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2 + index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
