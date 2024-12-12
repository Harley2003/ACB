/* eslint-disable */

interface StatsCardProps {
    title: string
    value: number
    className?: string
}

export function StatsCard({title, value, className}: StatsCardProps) {
    return (
        <div className={`p-6 rounded-lg ${className}`}>
            <div className="text-4xl font-bold text-white mb-2">{value}</div>
            <div className="text-white/90">{title}</div>
        </div>
    )
}