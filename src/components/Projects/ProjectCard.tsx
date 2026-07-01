type Props = {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
};

const ProjectCard = ({
  title,
  description,
  technologies,
  highlights,
}: Props) => {
  return (
    <div className="glass rounded-3xl p-8 transition duration-300 hover:-translate-y-2">

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-6 text-gray-400 leading-8">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-primary/10 text-primary"
          >
            {tech}
          </span>

        ))}

      </div>

      <ul className="mt-8 space-y-3">

        {highlights.map((item) => (

          <li
            key={item}
            className="text-gray-300"
          >
            ✔ {item}
          </li>

        ))}

      </ul>

    </div>
  );
};

export default ProjectCard;