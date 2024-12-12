'use client';

import { useState } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { ChartFilters } from '@/src/components/SystemAdmin/Dashboard/ChartFilters';

interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
    category?: string;
    year: string;
  }>;
  title: string;
}

export function PieChart({ data, title }: PieChartProps) {
  const [category, setCategory] = useState('all');
  const [year, setYear] = useState('2024');

  const filteredData = data.filter(item => (category === 'all' || item.category === category) && item.year === year);

  return (
    <div className="rounded-lg bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ChartFilters categoryType="chuyên ngành" category={category} year={year} onCategoryChange={setCategory} onYearChange={setYear} />
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie data={filteredData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={0} dataKey="value">
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
