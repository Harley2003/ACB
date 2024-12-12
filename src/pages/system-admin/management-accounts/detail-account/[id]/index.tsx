'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Header } from '@/src/components/SystemAdmin/Common/Header';
import { Sidebar } from '@/src/components/SystemAdmin/Common/Sidebar';
import { Input } from '@/src/shadcn/components/ui/input';
import { Button } from '@/src/shadcn/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/shadcn/components/ui/select';
import { useSidebar } from '@/src/context/sidebar-provider';
import Heading from '@/src/components/Common/Heading';

export default function AccountDetailsPage() {
  const { isOpen } = useSidebar();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Heading title={'System Admin | Auto Career Bridge'} description={''} keywords={''} />
      <div className="flex h-screen">
        <Sidebar />
        <div className={`flex flex-1 flex-col overflow-hidden ${isOpen ? 'lg:ml-64' : ''}`}>
          <Header />
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <h1 className="mb-6 text-2xl font-bold">THÔNG TIN TÀI KHOẢN: NGUYỄN VĂN TÀI</h1>

              <div className="rounded-lg bg-white p-6 shadow">
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-4 text-xl font-semibold">Thông tin tài khoản</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="grid gap-2">
                        <label className="font-medium">
                          Tên tài khoản
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <Input value="Nguyễn Văn Tài" className="bg-gray-100" readOnly />
                      </div>
                      <div className="grid gap-2">
                        <label className="font-medium">
                          Email
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <Input value="example1@gmail.com" className="bg-gray-100" readOnly />
                      </div>
                      <div className="grid gap-2">
                        <label className="font-medium">
                          Mật khẩu
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input type={showPassword ? 'text' : 'password'} value="********" className="bg-gray-100" readOnly />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700">
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label className="font-medium">
                          Số điện thoại
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <Input value="012345678" className="bg-gray-100" readOnly />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label className="font-medium">
                      Tổ chức
                      <span className="ml-1 text-red-500">*</span>
                    </label>
                    <Select defaultValue="business" disabled>
                      <SelectTrigger className="bg-gray-100">
                        <SelectValue>Doanh nghiệp</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Doanh nghiệp</SelectItem>
                        <SelectItem value="school">Trường học</SelectItem>
                        <SelectItem value="other">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h2 className="mb-4 text-xl font-semibold">Thông tin địa chỉ</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="grid gap-2">
                        <label className="font-medium">
                          Tỉnh/Thành phố
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <Select defaultValue="hanoi" disabled>
                          <SelectTrigger className="bg-gray-100">
                            <SelectValue>Hà Nội</SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hanoi">Hà Nội</SelectItem>
                            <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                            <SelectItem value="danang">Đà Nẵng</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <label className="font-medium">
                          Quận/Huyện
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <Select defaultValue="namtuliem" disabled>
                          <SelectTrigger className="bg-gray-100">
                            <SelectValue>Nam Từ Liêm</SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="namtuliem">Nam Từ Liêm</SelectItem>
                            <SelectItem value="caugiay">Cầu Giấy</SelectItem>
                            <SelectItem value="dongda">Đống Đa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-end gap-4">
                  <Button variant="outline">Quay lại</Button>
                  <Button className="bg-green-500 text-white hover:bg-green-600">Lưu thông tin</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
