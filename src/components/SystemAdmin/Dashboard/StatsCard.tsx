interface StatsCardProps {
  title: string;
  value: number;
  className?: string;
}

export function StatsCard({ title, value, className }: StatsCardProps) {
  return (
    <div className={`rounded-lg p-6 ${className}`}>
      <div className="mb-2 text-4xl font-bold text-white">{value}</div>
      <div className="text-white/90">{title}</div>
    </div>
  );
}
