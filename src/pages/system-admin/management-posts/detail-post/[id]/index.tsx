'use client';

import { useState } from 'react';
import { Header } from '@/src/components/SystemAdmin/Common/Header';
import { Sidebar } from '@/src/components/SystemAdmin/Common/Sidebar';
import { RichTextEditor } from '@/src/components/SystemAdmin/ManagementPosts/DetailPost';
import { Button } from '@/src/shadcn/components/ui/button';
import { Input } from '@/src/shadcn/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/src/shadcn/components/ui/radio-group';
import { Label } from '@/src/shadcn/components/ui/label';
import { useSidebar } from '@/src/context/sidebar-provider';
import Heading from '@/src/components/Common/Heading';

export default function JobDetailsPage() {
  const { isOpen } = useSidebar();
  const [description, setDescription] = useState('');
  const [benefits, setBenefits] = useState('');
  const [requirements, setRequirements] = useState('');

  return (
    <>
      <Heading title={'System Admin | Auto Career Bridge'} description={''} keywords={''} />
      <div className="flex h-screen">
        <Sidebar />
        <div className={`flex flex-1 flex-col overflow-hidden ${isOpen ? 'lg:ml-64' : ''}`}>
          <Header />
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <h1 className="mb-6 text-2xl font-bold">THÔNG TIN CHI TIẾT BÀI ĐĂNG VIỆC LÀM</h1>

              <div className="rounded-lg bg-white p-6 shadow">
                <div className="grid gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Tiêu đề
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="Support Sales (Part Time - Tiếng Nhật)" className="bg-gray-100" readOnly disabled={true} />
                    </div>
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Doanh nghiệp
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="Công ty Cổ phần JVB Việt Nam" className="bg-gray-100" readOnly disabled={true} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Số lượng tuyển
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="2" type="number" className="bg-gray-100" readOnly disabled={true} />
                    </div>
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Lĩnh vực
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="Sales" className="bg-gray-100" readOnly disabled={true} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Mô tả
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <RichTextEditor value={description} onChange={setDescription} disabled={true} />
                    </div>

                    <div className="grid gap-6 md:grid-rows-3">
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="grid gap-x-10">
                          <label className="font-medium">
                            Lương (từ)
                            <span className="ml-1 text-red-500">*</span>
                          </label>
                          <Input defaultValue="0" type="number" className="bg-gray-100" readOnly disabled={true} />
                        </div>
                        <div className="grid gap-2">
                          <label className="font-medium">
                            Lương (đến)
                            <span className="ml-1 text-red-500">*</span>
                          </label>
                          <Input defaultValue="5000000" type="number" className="bg-gray-100" readOnly disabled={true} />
                        </div>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="grid gap-2">
                          <label className="font-medium">
                            Thời gian làm việc (bắt đầu)
                            <span className="ml-1 text-red-500">*</span>
                          </label>
                          <Input defaultValue="Từ T2-T6, 8h-17h15" type="text" className="bg-gray-100" readOnly disabled={true} />
                        </div>
                        <div className="grid gap-2">
                          <label className="font-medium">
                            Loại thời gian làm việc
                            <span className="ml-1 text-red-500">*</span>
                          </label>
                          <Input defaultValue="Toàn thời gian" type="text" className="bg-gray-100" readOnly disabled={true} />
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <label className="font-medium">
                          Giới tính
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <RadioGroup defaultValue="both" className="flex gap-4" disabled={true}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="both" id="both" disabled={true} />
                            <Label htmlFor="both">Nam/Nữ</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" disabled={true} />
                            <Label htmlFor="male">Nam</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" disabled={true} />
                            <Label htmlFor="female">Nữ</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Phúc lợi
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <RichTextEditor value={benefits} onChange={setBenefits} disabled={true} />
                    </div>

                    <div className="grid gap-2">
                      <label className="font-medium">
                        Yêu cầu
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <RichTextEditor value={requirements} onChange={setRequirements} disabled={true} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Tỉnh/thành phố
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="Hà Nội" className="bg-gray-100" readOnly disabled={true} />
                    </div>
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Quận/huyện
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="Nam Từ Liêm" className="bg-gray-100" readOnly disabled={true} />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-end gap-4">
                  <Button variant="outline" className="rounded-md border-gray-300 px-4 py-2 text-gray-700 hover:border-gray-400 hover:text-gray-800">
                    Quay Lại
                  </Button>
                  <Button className="rounded-md bg-green-500 px-4 py-2 font-medium text-white shadow-md hover:bg-green-600 hover:shadow-lg">Phê Duyệt</Button>
                  <Button className="rounded-md bg-red-500 px-4 py-2 font-medium text-white shadow-md hover:bg-red-600 hover:shadow-lg">Từ Chối</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
