import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-background text-white p-8 rounded-lg shadow-lg space-y-8"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">Let's Connect</h2>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="font-semibold w-32">Name:</span>
          <span className="text-lg">Apostolia Maria Sofianopoulou</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold w-32">Email:</span>
          <span className="text-lg">sofianopoulou@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold w-32">Role:</span>
          <span className="text-lg">Software Developer</span>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-8 mt-8">
        <a
          href="https://www.linkedin.com/in/apostolia-sofianopoulou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl hover:text-light-blue transition duration-300" />
        </a>
        <a
          href="https://github.com/Sofianopoulou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl hover:text-light-blue transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
