import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold text-foreground lg:hidden">
        Contact
      </h1>
      <div className="mt-10 flex justify-between px-10 sm:px-32 lg:px-0 lg:gap-8 lg:mt-20 text-foreground">
        <a
          href="https://www.linkedin.com/in/dimitri-kokhtashvili-6a816a297/"
          aria-label="LinkedIn"
          className="transition-colors hover:text-accent"
        >
          <FaLinkedin className="text-2xl" />
        </a>

        <a
          href="https://github.com/dlkokhta"
          aria-label="GitHub"
          className="transition-colors hover:text-accent"
        >
          <FaGithub className="text-2xl" />
        </a>

        <a
          href="mailto:dl.kokhtashvili@gmail.com"
          aria-label="Email"
          className="lg:hidden transition-colors hover:text-accent"
        >
          <FiMail className="text-2xl" />
        </a>

        <div className="hidden lg:flex lg:flex-col lg:gap-5 mt-1">
          <div className="flex items-center gap-3">
            <FiMail className="text-lg shrink-0" />
            <a href="mailto:dl.kokhtashvili@gmail.com" className="cursor-pointer">
              dl.kokhtashvili@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone className="text-lg shrink-0" />
            <a className="cursor-pointer">+995555331167</a>
          </div>
        </div>

        <div className="group lg:hidden">
          <a href="tel:+995555331167" aria-label="Phone">
            <div className="flex gap-2">
              <FiPhone className="text-2xl" />
              <span className="absolute left-10 bottom-1 opacity-0 transition-opacity duration-300 text-white bg-black px-2 py-1 rounded-md group-hover:opacity-100">
                +995555331167
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
