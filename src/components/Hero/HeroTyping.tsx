import { TypeAnimation } from "react-type-animation";

const HeroTyping = () => {
  return (
    <TypeAnimation
     sequence={[
        "Backend Engineer", 1500,
        "Spring Boot Expert", 1500,
        "REST API Developer", 1500,
        "RabbitMQ Integration", 1500,
        "SQL Server", 1500,
        "Microservices", 1500,
        "API Architect", 1500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-primary font-semibold text-2xl md:text-3xl"
    />
  );
};

export default HeroTyping;