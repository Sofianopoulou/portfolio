import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  role,
  duration,
  location,
  description,
  technologies,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
      className="px-4 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="bg-background text-white p-4 shadow-lg shadow-light-blue rounded-lg hover:shadow-xl transition">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleExpand}
        >
          <div>
            <h3 className="text-xl font-semibold">{role}</h3>
            <p>{company}</p>
            <p>{duration}</p>
          </div>
          <div className="text-xl">{isExpanded ? "▲" : "▼"}</div>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-pink-500 mr-2" />{" "}
              <p>{location}</p>
            </div>
            <p>{description}</p>
            <div>
              {/* Horizontal List of Technologies */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-light-blue text-background py-1 px-3 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
