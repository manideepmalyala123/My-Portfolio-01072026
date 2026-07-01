import SkillChip from "./SkillChip";

type Props = {
  category: string;
  items: string[];
};

const SkillCategory = ({
  category,
  items,
}: Props) => {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-2xl font-semibold mb-6">
        {category}
      </h2>

      <div className="flex flex-wrap gap-3">

        {items.map((item) => (

          <SkillChip
            key={item}
            name={item}
          />

        ))}

      </div>

    </div>
  );
};

export default SkillCategory;