/* eslint-disable */

"use client"

import {useState} from "react"
import {Header} from "@/src/components/SystemAdmin/Common/Header"
import {Sidebar} from "@/src/components/SystemAdmin/Common/Sidebar"
import {RichTextEditor} from "@/src/components/SystemAdmin/ManagementPosts/DetailPost"
import {Button} from "@/src/shadcn/components/ui/button"
import {Input} from "@/src/shadcn/components/ui/input"
import {RadioGroup, RadioGroupItem} from "@/src/shadcn/components/ui/radio-group"
import {Label} from "@/src/shadcn/components/ui/label"
import {useSidebar} from "@/src/context/sidebar-provider"
import Heading from '@/src/components/Common/Heading';

export default function JobDetailsPage() {
    const {isOpen} = useSidebar()
    const [description, setDescription] = useState("")
    const [benefits, setBenefits] = useState("")
    const [requirements, setRequirements] = useState("")

    return (
        <>
            <Heading title={"System Admin | Auto Career Bridge"} description={""} keywords={""}/>
            <div className="flex h-screen">
                <Sidebar/>
                <div className={`flex-1 flex flex-col overflow-hidden ${isOpen ? 'lg:ml-64' : ''}`}>
                    <Header/>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                        <div className="container mx-auto px-6 py-8">
                            <h1 className="text-2xl font-bold mb-6">THÔNG TIN CHI TIẾT BÀI ĐĂNG VIỆC LÀM</h1>

                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="grid gap-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="grid gap-2">
                                            <label className="font-medium">Tiêu đề</label>
                                            <Input defaultValue="Support Sales (Part Time - Tiếng Nhật)"
                                                   className="bg-gray-100" readOnly disabled={true}/>
                                        </div>
                                        <div className="grid gap-2">
                                            <label className="font-medium">Doanh nghiệp</label>
                                            <Input defaultValue="Công ty Cổ phần JVB Việt Nam" className="bg-gray-100"
                                                   readOnly disabled={true}/>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="grid gap-2">
                                            <label className="font-medium">Số lượng tuyển</label>
                                            <Input defaultValue="2" type="number" className="bg-gray-100" readOnly
                                                   disabled={true}/>
                                        </div>
                                        <div className="grid gap-2">
                                            <label className="font-medium">Lĩnh vực</label>
                                            <Input defaultValue="Sales" className="bg-gray-100" readOnly
                                                   disabled={true}/>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="grid gap-2">
                                            <label className="font-medium">Mô tả</label>
                                            <RichTextEditor
                                                value={description}
                                                onChange={setDescription}
                                                disabled={true}
                                            />
                                        </div>

                                        <div className="grid md:grid-rows-3 gap-6">
                                            <div className="grid md:grid-cols-2 gap-3">
                                                <div className="grid gap-x-10">
                                                    <label className="font-medium">Lương (từ)</label>
                                                    <Input defaultValue="0" type="number" className="bg-gray-100"
                                                           readOnly disabled={true}/>
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="font-medium">Lương (đến)</label>
                                                    <Input defaultValue="5000000" type="number" className="bg-gray-100"
                                                           readOnly disabled={true}/>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-3">
                                                <div className="grid gap-2">
                                                    <label className="font-medium">Thời gian làm việc (từ)</label>
                                                    <Input defaultValue="05/11/2024" type="text" className="bg-gray-100"
                                                           readOnly disabled={true}/>
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="font-medium">Thời gian làm việc (đến)</label>
                                                    <Input defaultValue="19/11/2024" type="text" className="bg-gray-100"
                                                           readOnly disabled={true}/>
                                                </div>
                                            </div>

                                            <div className="grid gap-2">
                                                <label className="font-medium">Giới tính</label>
                                                <RadioGroup defaultValue="both" className="flex gap-4"
                                                            disabled={true}>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="both" id="both"
                                                                        disabled={true}/>
                                                        <Label htmlFor="both">Nam/Nữ</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="male" id="male"
                                                                        disabled={true}/>
                                                        <Label htmlFor="male">Nam</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="female" id="female"
                                                                        disabled={true}/>
                                                        <Label htmlFor="female">Nữ</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </div>


                                    </div>


                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="grid gap-2">
                                            <label className="font-medium">Phúc lợi</label>
                                            <RichTextEditor value={benefits} onChange={setBenefits} disabled={true}/>
                                        </div>

                                        <div className="grid gap-2">
                                            <label className="font-medium">Yêu cầu</label>
                                            <RichTextEditor value={requirements} onChange={setRequirements}
                                                            disabled={true}/>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="grid gap-2">
                                            <label className="font-medium">Tỉnh/thành phố</label>
                                            <Input defaultValue="Hà Nội" className="bg-gray-100" readOnly
                                                   disabled={true}/>
                                        </div>
                                        <div className="grid gap-2">
                                            <label className="font-medium">Quận/huyện</label>
                                            <Input defaultValue="Nam Từ Liêm" className="bg-gray-100" readOnly
                                                   disabled={true}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-4 mt-8">
                                    <Button
                                        variant="outline"
                                        className="border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 rounded-md px-4 py-2"
                                    >
                                        Quay Lại
                                    </Button>
                                    <Button
                                        className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md px-4 py-2 shadow-md hover:shadow-lg"
                                    >
                                        Phê Duyệt
                                    </Button>
                                    <Button
                                        className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-md px-4 py-2 shadow-md hover:shadow-lg"
                                    >
                                        Từ Chối
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}