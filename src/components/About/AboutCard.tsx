import { motion } from "framer-motion";
import { ReactNode } from "react";

type AboutCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const AboutCard = ({
  icon,
  title,
  description,
}: AboutCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      glass
      rounded-3xl
      p-8
      transition-all
      duration-300"
    >
      <div className="text-primary text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
};

export default AboutCard;