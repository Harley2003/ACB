'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Header } from '@/src/components/SystemAdmin/Common/Header';
import { Sidebar } from '@/src/components/SystemAdmin/Common/Sidebar';
import { RichTextEditor } from '@/src/components/SystemAdmin/ManagementSeminars/DetailSeminar';
import { Button } from '@/src/shadcn/components/ui/button';
import { Input } from '@/src/shadcn/components/ui/input';
import { useSidebar } from '@/src/context/sidebar-provider';
import Heading from '@/src/components/Common/Heading';

export default function WorkshopDetailsPage() {
  const { isOpen } = useSidebar();
  const [description, setDescription] = useState('');

  return (
    <>
      <Heading title={'System Admin | Auto Career Bridge'} description={''} keywords={''} />
      <div className="flex h-screen">
        <Sidebar />
        <div className={`flex flex-1 flex-col overflow-hidden ${isOpen ? 'lg:ml-64' : ''}`}>
          <Header />
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <h1 className="mb-6 text-2xl font-bold">THÔNG TIN CHI TIẾT BUỔI HỘI THẢO</h1>
              <div className="rounded-lg bg-white p-6 shadow">
                <div className="grid gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="font-medium">
                        Tiêu đề
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="Hội thảo IT" className="bg-gray-100" readOnly disabled={true} />
                    </div>

                    <div className="grid gap-2">
                      <label className="font-medium">
                        Trường đại học
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      <Input defaultValue="Trường đại học bách khoa Hà Nội" className="bg-gray-100" readOnly disabled={true} />
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
                        <div className="grid gap-2">
                          <label className="font-medium">
                            Ngày bắt đầu
                            <span className="ml-1 text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input defaultValue="29/11/2024" className="bg-gray-100" readOnly disabled={true} />
                            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <label className="font-medium">
                            Ngày kết thúc
                            <span className="ml-1 text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input defaultValue="30/11/2024" className="bg-gray-100" readOnly disabled={true} />
                            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <label className="font-medium">
                          Số lượng tối đa
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <Input defaultValue="30" type="number" className="bg-gray-100" readOnly disabled={true} />
                      </div>
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
