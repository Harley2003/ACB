/* eslint-disable */

"use client"

import {useState, useMemo} from "react"
import {Header} from "@/src/components/SystemAdmin/Common/Header"
import {Sidebar} from "@/src/components/SystemAdmin/Common/Sidebar"
import {JobListings} from "@/src/components/SystemAdmin/ManagementPosts/JobListings"
import {Download, Search} from 'lucide-react';
import {Input} from "@/src/shadcn/components/ui/input"
import {Button} from "@/src/shadcn/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/shadcn/components/ui/select"
import {useSidebar} from "@/src/context/sidebar-provider"
import Heading from '@/src/components/Common/Heading';
import {exportToExcel} from '@/src/components/SystemAdmin/Common/ExportExcel';

// Generate 100 job listings
const jobListings = Array.from({length: 100}, (_, i) => ({
    id: i + 1,
    title: `Job Title ${i + 1}`,
    company: `Company ${Math.floor(i / 3) + 1}`,
    email: `company${Math.floor(i / 3) + 1}@example.com`,
    date: `${Math.floor(Math.random() * 28) + 1}/8/2024`,
    status: ["Đang chờ phê duyệt", "Đã phê duyệt", "Từ chối"][Math.floor(Math.random() * 3)],
    district: `Quận ${Math.floor(Math.random() * 10) + 1}`,
    category: ["Công nghệ thông tin", "Thiết kế", "Marketing", "Kỹ thuật", "Kinh doanh"][Math.floor(Math.random() * 5)],
    description: `This is a job description for Job ${i + 1}. It includes details about the position and the company.`,
    requirements: [
        "Requirement 1",
        "Requirement 2",
        "Requirement 3",
    ]
}))

const districts = [...Array.from(new Set(jobListings.map(job => job.district)))].sort().reverse();
const categories = [...Array.from(new Set(jobListings.map(job => job.category)))].sort().reverse();

export default function Page() {
    const {isOpen} = useSidebar()
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDistrict, setSelectedDistrict] = useState("Tất cả")
    const [selectedCategory, setSelectedCategory] = useState("Tất cả")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const filteredJobs = useMemo(() => {
        return jobListings.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesDistrict = selectedDistrict === "Tất cả" || job.district === selectedDistrict
            const matchesCategory = selectedCategory === "Tất cả" || job.category === selectedCategory
            return matchesSearch && matchesDistrict && matchesCategory
        })
    }, [searchTerm, selectedDistrict, selectedCategory])

    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentJobs = filteredJobs.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const handleItemsPerPageChange = (value: string) => {
        setItemsPerPage(Number(value))
        setCurrentPage(1)
    }

    return (
        <>
            <Heading title={"System Admin | Auto Career Bridge"} description={""} keywords={""}/>
            <div className="flex h-screen">
                <Sidebar/>
                <div className={`flex-1 flex flex-col overflow-hidden ${isOpen ? 'lg:ml-64' : ''}`}>
                    <Header/>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                        <div className="container mx-auto px-6 py-8">
                            <h1 className="text-2xl font-bold mb-6">DANH SÁCH BÀI ĐĂNG VIỆC LÀM</h1>

                            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                                <div className="w-full md:w-[40%] bg-[#fff]">
                                    <Input
                                        placeholder="Tìm kiếm theo tiêu đề, doanh nghiệp"
                                        className="w-full bg-[#fff]"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="w-full md:w-[25%] bg-[#fff]">
                                    <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                                        <SelectTrigger className="w-full bg-[#fff]">
                                            <SelectValue placeholder="Quận huyện"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value={"Tất cả"}>Tất cả quận huyện</SelectItem>
                                            {districts.map((district) => (
                                                <SelectItem key={district} value={district}>{district}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-full md:w-[25%] bg-[#fff]">
                                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                        <SelectTrigger className="w-full bg-[#fff]">
                                            <SelectValue placeholder="Chuyên ngành"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value={"Tất cả"}>Tất cả chuyên ngành</SelectItem>
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category}>{category}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-full md:w-[20%]">
                                    <button
                                        onClick={() => {
                                            if (Array.isArray(filteredJobs) && filteredJobs.length > 0) {
                                                exportToExcel({data: filteredJobs});
                                            }
                                        }}
                                        className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded flex items-center gap-2"
                                    >
                                        <Download className="w-5 h-5"/>
                                        Tải Excel
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                                <JobListings jobs={currentJobs} startIndex={startIndex}/>

                                {filteredJobs.length === 0 ? (
                                    <div className="text-center py-8 h-[30rem]">
                                        <p className="text-gray-500 text-lg">Không tìm thấy kết quả phù hợp.</p>
                                    </div>
                                ) : ("")}
                            </div>
                            {filteredJobs.length > 0 && (
                                <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">Xem</span>
                                        <Select value={itemsPerPage.toString()}
                                                onValueChange={handleItemsPerPageChange}>
                                            <SelectTrigger className="w-[70px] bg-[#fff]">
                                                <SelectValue placeholder={itemsPerPage.toString()}/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                                <SelectItem value="50">50</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <span className="text-sm text-gray-500">Số lượng trên mỗi trang</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="w-8 h-8"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            {"<"}
                                        </Button>
                                        {Array.from({length: Math.min(5, totalPages)}, (_, i) => {
                                            let pageNumber: number;
                                            if (totalPages <= 5) {
                                                pageNumber = i + 1;
                                            } else if (currentPage <= 3) {
                                                pageNumber = i + 1;
                                            } else if (currentPage >= totalPages - 2) {
                                                pageNumber = totalPages - 4 + i;
                                            } else {
                                                pageNumber = currentPage - 2 + i;
                                            }
                                            return (
                                                <Button
                                                    key={pageNumber}
                                                    variant="outline"
                                                    size="sm"
                                                    className={currentPage === pageNumber ? "bg-green-500 text-white hover:bg-green-600 hover:text-white" : ""}
                                                    onClick={() => handlePageChange(pageNumber)}
                                                >
                                                    {pageNumber}
                                                </Button>
                                            );
                                        })}
                                        {totalPages > 5 && currentPage < totalPages - 2 && (
                                            <>
                                                <span>...</span>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handlePageChange(totalPages)}
                                                >
                                                    {totalPages}
                                                </Button>
                                            </>
                                        )}
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="w-8 h-8"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            {">"}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

