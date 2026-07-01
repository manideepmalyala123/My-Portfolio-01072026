import { motion } from "framer-motion";

type Props = {
  company: string;
  role: string;
  period: string;
  location: string;
  technologies: string[];
  achievements: string[];
};

const ExperienceCard = ({
  company,
  role,
  period,
  location,
  technologies,
  achievements,
}: Props) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass rounded-3xl p-8"
    >
      <div className="flex justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold">
            {role}
          </h2>
          <p className="text-primary mt-2">
            {company}
          </p>
        </div>

        <div className="text-right">
          <p>{period}</p>
          <p className="text-gray-400">
            {location}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-primary/20 text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-8 space-y-3">
        {achievements.map((item) => (
          <li
            key={item}
            className="text-gray-300"
          >
            ✔ {item}
          </li>

        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;