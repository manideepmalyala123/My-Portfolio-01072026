import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-28"
    >
      <div className="section grid lg:grid-cols-2 gap-20 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;