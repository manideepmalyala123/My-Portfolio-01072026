import { motion } from "framer-motion";
import HeroTyping from "./HeroTyping";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { portfolio } from "../../data/portfolio";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center lg:text-left"
    >
      <p className="text-xl text-gray-400">
        👋 Hello, I'm
      </p>

      <h1 className="text-7xl md:text-8xl font-heading gradient-text mt-4">
        {portfolio.personal.firstName}
      </h1>

      <div className="mt-8 flex justify-center lg:justify-start">
        <HeroTyping />
      </div>

      <p className="max-w-xl text-gray-400 lg:mx-0 mx-auto mt-8 leading-8">
        {portfolio.personal.heroDescription}
      </p>

      <HeroButtons />

      <HeroSocials />

    </motion.div>
  );
};

export default HeroContent;