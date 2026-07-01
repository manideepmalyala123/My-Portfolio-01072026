type Props = {
  name: string;
};

const SkillChip = ({ name }: Props) => {
  return (
    <span
      className="
      px-4
      py-2
      rounded-full
      bg-primary/10
      border
      border-primary/20
      text-primary
      transition-all
      duration-300
      hover:bg-primary
      hover:text-white
      hover:scale-105"
    >
      {name}
    </span>
  );
};

export default SkillChip;