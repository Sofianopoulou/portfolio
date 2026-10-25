import { motion } from "framer-motion";

const EducationalSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="px-4 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl text-center mb-10 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Educational Background
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            className="p-6 shadow-tirquoise shadow-lg rounded-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">
              European Master in Sustainable Systems Engineering (EMSSE)
            </h3>
            <p className="text-xl font-semibold mb-4">
              University of Technology of Compi&#232;gne (UTC), France |
              2025&#8211;
            </p>
            <p className="mb-4">
              <strong>Specialisation:</strong> Advanced Machine Learning and
              Optimisation of Systems
            </p>
            <p>
              <strong>Mobility:</strong> UPC, Spain &#183; UPT, Albania &#183;
              UTC, France
            </p>
          </motion.div>

          <motion.div
            className="p-6 shadow-tirquoise shadow-lg rounded-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">
              Applied Informatics - Information Systems (BSc)
            </h3>
            <p className="text-xl font-semibold mb-4">
              University of Macedonia (2020-2024)
            </p>
            <p className="mb-4">
              <strong>Grade:</strong> 8.72/10
            </p>
            <p className="mb-4">
              <strong>Thesis:</strong> Reconciling Static Analysis for Energy
              Guarantees and Compiler Optimizations for Energy Efficiency
            </p>
            <p className="mb-4">
              <strong>Programming Languages:</strong> Java, C, Python, SQL,
              HTML/CSS
            </p>
            <p>
              During my studies, I gained extensive knowledge in algorithms,
              data structures, software development, databases, and web
              technologies. I also completed various team projects and
              participated in seminars to enhance my skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
