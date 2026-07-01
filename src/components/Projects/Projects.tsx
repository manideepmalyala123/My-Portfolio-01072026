import Container from "../Common/Container";
import SectionHeader from "../Common/SectionHeader";
import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="scroll-mt-32 py-32"
    >

      <Container>

        <SectionHeader
          badge="Projects"
          title="Featured Enterprise Projects"
          description="A selection of enterprise applications and integrations I have contributed to."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              {...project}
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Projects;