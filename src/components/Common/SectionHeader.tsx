type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

const SectionHeader = ({
  badge,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">

      <p className="text-primary uppercase tracking-[8px] font-semibold">
        {badge}
      </p>

      <h2 className="text-5xl md:text-6xl font-heading mt-6">
        {title}
      </h2>

      <p className="text-gray-400 leading-8 mt-8">
        {description}
      </p>

    </div>
  );
};

export default SectionHeader;