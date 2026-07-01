//import { Github, Linkedin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSocials = () => {
  return (
    <div className="flex justify-center lg:justify-start gap-6 mt-10">
      <FaGithub
        size={26}
        className="cursor-pointer rounded-full bg-white/10 p-3 w-12 h-12 hover:bg-primary transition-all duration-300 hover:scale-110"
      />

      <FaLinkedin
        size={26}
        className="cursor-pointer rounded-full bg-white/10 p-3 w-12 h-12 hover:bg-primary transition-all duration-300 hover:scale-110"
      />

      <MdEmail
        size={26}
        className="cursor-pointer rounded-full bg-white/10 p-3 w-12 h-12 hover:bg-primary transition-all duration-300 hover:scale-110"
      />
    </div>
  );
};

export default HeroSocials;