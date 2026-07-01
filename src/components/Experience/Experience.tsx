import SectionHeader from "../Common/SectionHeader";
import Container from "../Common/Container";
import ExperienceCard from "./ExperienceCard";

import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>

        <SectionHeader
          badge="Experience"
          title="Professional Journey"
          description="Building enterprise-grade backend applications and delivering scalable business solutions since 2021."
        />

        <div className="space-y-12">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              {...experience}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Experience;