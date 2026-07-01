import Container from "../Common/Container";
import SectionHeader from "../Common/SectionHeader";
import SkillCategory from "./SkillCategory";

import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="scroll-mt-32 py-32"
    >

      <Container>

        <SectionHeader
          badge="Skills"
          title="Technology Stack"
          description="Technologies and tools I use to build scalable enterprise applications."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {skills.map((skill) => (

            <SkillCategory
              key={skill.category}
              {...skill}
            />

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Skills;