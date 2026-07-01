import { FaArrowRight, FaDownload } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

      <button
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="
          flex items-center gap-3
          bg-primary
          px-8
          py-4
          rounded-full
          font-semibold
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(59,130,246,.5)]
          transition-all duration-300"
        >
        View Projects
        <FaArrowRight />
      </button>

      <a
        href="/resume.pdf"
        download="Manideep_Resume.pdf"
        className="
          flex items-center gap-3
          border border-primary
          px-8
          py-4
          rounded-full
          hover:bg-primary
          transition-all duration-300"
      >
        <FaDownload />
        Download Resume
      </a>

    </div>
  );
};

export default HeroButtons;