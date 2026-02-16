interface StatCardProps {
  title: string;
  value: string;
  description: string;
  isBad?: boolean;
}

export const StatCard = ({ title, value, description, isBad }: StatCardProps) => {
  return (
    <div className={`
      p-6 border-4 border-white transition-transform hover:-rotate-2
      ${isBad ? 'bg-(--color-rage) text-white' : 'bg-zinc-800 text-zinc-300'}
    `}>
      <h3 className="text-xs uppercase font-black opacity-70 mb-2">{title}</h3>
      <p className="text-4xl font-black mb-4 italic">{value}</p>
      <hr className="mb-4 opacity-20" />
      <p className="text-sm font-medium leading-tight">{description}</p>
    </div>
  );
};