/* eslint-disable */

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/shadcn/components/ui/select"

interface ChartFiltersProps {
    categoryType: "trường học" | "chuyên ngành"
    category: string
    year: string
    onCategoryChange: (value: string) => void
    onYearChange: (value: string) => void
}

export function ChartFilters({categoryType, category, year, onCategoryChange, onYearChange}: ChartFiltersProps) {
    return (
        <div className="flex justify-end gap-4 mb-4">
            <Select value={category} onValueChange={onCategoryChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={categoryType}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    {categoryType === "trường học" ? (
                        <>
                            <SelectItem value="university1">Đại học A</SelectItem>
                            <SelectItem value="university2">Đại học B</SelectItem>
                        </>
                    ) : (
                        <>
                            <SelectItem value="it">Công nghệ thông tin</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                        </>
                    )}
                </SelectContent>
            </Select>
            <Select value={year} onValueChange={onYearChange}>
                <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Năm"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}