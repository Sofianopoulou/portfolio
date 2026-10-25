import React, { useState } from "react";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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
  const detailsId = `experience-details-${company.replace(/\W/g, "-")}-${duration.replace(/\W/g, "-")}`;

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
      className="px-4 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="p-4 shadow-lg shadow-light-blue rounded-lg hover:shadow-xl transition">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          className="flex w-full justify-between items-center text-left cursor-pointer"
          onClick={toggleExpand}
        >
          <div>
            <h3 className="text-xl font-semibold">{role}</h3>
            <p>{company}</p>
            <p>{duration}</p>
          </div>
          <motion.span
            aria-hidden="true"
            className="text-xl"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FaChevronDown />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={detailsId}
              key="experience-details"
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{
                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.25 },
                y: { duration: 0.3, ease: "easeOut" },
              }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-pink mr-2" />{" "}
                  <p>{location}</p>
                </div>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-light-blue text-background py-1 px-3 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
