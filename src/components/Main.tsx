import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <section id="main" className="relative text-white py-20">
      <div className="absolute inset-0 opacity-40"></div>
      <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-12">
        <motion.div
          className="relative inline-block rounded-full p-1 bg-gradient-to-r from-pink to-blue"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/me.png"
            alt="Apostolia Maria Sofianopoulou"
            className="mx-auto rounded-full w-40 h-40 object-cover"
          />
        </motion.div>

        <motion.h1
          className="sm:text-5xl text-4xl font-semibold mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
        >
          APOSTOLIA MARIA SOFIANOPOULOU
        </motion.h1>

        <motion.h2
          className="sm:text-2xl text-xl text-white mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
        >
          SOFTWARE DEVELOPER
        </motion.h2>
      </div>
    </section>
  );
};

export default MainSection;
