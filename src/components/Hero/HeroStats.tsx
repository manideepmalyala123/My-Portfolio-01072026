import CountUp from "react-countup";
import HeroStatCard from "./HeroStatCard";

const HeroStats = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      <HeroStatCard
        value={<><CountUp end={3} duration={2} />+</>}
        title="Years Experience"
      />

      <HeroStatCard
        value={<><CountUp end={20} duration={2} />+</>}
        title="REST APIs Built"
      />

      <HeroStatCard
        value={<><CountUp end={10} duration={2} />+</>}
        title="Enterprise Projects"
      />
    </div>
  );
};

export default HeroStats;