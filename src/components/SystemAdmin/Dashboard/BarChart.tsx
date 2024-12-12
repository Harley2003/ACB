/* eslint-disable */

"use client"

import {useState} from 'react'
import {BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import {ChartFilters} from '@/src/components/SystemAdmin/Dashboard/ChartFilters'

interface BarChartProps {
    data: Array<{
        name: string
        value: number
        category?: string
        year: string
    }>
    title: string
    categoryType: "trường học" | "chuyên ngành"
}

export function BarChart({data, title, categoryType}: BarChartProps) {
    const [category, setCategory] = useState("all")
    const [year, setYear] = useState("2024")

    const filteredData = data.filter(item =>
        (category === "all" || item.category === category) &&
        item.year === year
    )

    return (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <ChartFilters
                categoryType={categoryType}
                category={category}
                year={year}
                onCategoryChange={setCategory}
                onYearChange={setYear}
            />
            <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={filteredData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Bar dataKey="value" fill="#00E676" radius={[4, 4, 0, 0]}/>
                    </RechartsBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}