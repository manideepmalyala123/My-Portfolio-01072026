import AboutCard from "./AboutCard";
import SectionHeader from "../Common/SectionHeader";

import {
  FaJava,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-32 py-32"
    >
      <div className="section">

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          <AboutCard
            icon={<FaJava />}
            title="Java Backend"
            description="Building secure and scalable enterprise applications using Java, Spring Boot and Microservices."
          />

          <AboutCard
            icon={<FaDatabase />}
            title="Data & Messaging"
            description="Experience with SQL Server, RabbitMQ, REST APIs and enterprise integrations."
          />

          <AboutCard
            icon={<FaServer />}
            title="Enterprise Applications"
            description="Developing high-performance business applications with clean architecture and best practices."
          />

        </div>

        {/* Heading */}
        <div className="mt-24">
          <SectionHeader
            badge="About Me"
            title="Building Enterprise Backend Solutions"
            description="I specialize in designing and developing scalable backend applications using Java, Spring Boot, REST APIs, RabbitMQ and SQL Server. I enjoy solving complex business problems with clean architecture and maintainable code."
          />
        </div>

      </div>
    </section>
  );
};

export default About;