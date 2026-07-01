import { ReactNode } from "react";

type HeroStatCardProps = {
  value: ReactNode;
  title: string;
};

const HeroStatCard = ({ value, title }: HeroStatCardProps) => {
  return (
    <div className="glass rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-4xl font-bold gradient-text">
        {value}
      </div>

      <p className="mt-2 text-gray-400">
        {title}
      </p>
    </div>
  );
};

export default HeroStatCard;