'use client';

import { useState, useMemo } from 'react';
import { Download } from 'lucide-react';
import { Header } from '@/src/components/SystemAdmin/Common/Header';
import { Sidebar } from '@/src/components/SystemAdmin/Common/Sidebar';
import { SeminarTable } from '@/src/components/SystemAdmin/ManagementSeminars/SeminarListings';
import { Input } from '@/src/shadcn/components/ui/input';
import { Button } from '@/src/shadcn/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/shadcn/components/ui/select';
import { useSidebar } from '@/src/context/sidebar-provider';
import Heading from '@/src/components/Common/Heading';
import { exportToExcel } from '@/src/components/SystemAdmin/Common/ExportExcel';

// Generate data
const seminarListings = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: 'Hội thảo ' + (i + 1),
  school: 'Công ty JVB Việt Nam',
  email: 'company@jvb-corp.com',
  date: '20/8/2024',
  status: ['Đang chờ phê duyệt', 'Đã phê duyệt', 'Từ chối'][Math.floor(Math.random() * 3)] as 'Đang chờ phê duyệt' | 'Đã phê duyệt' | 'Từ chối',
  url: 'https://jvb-corp.com/vi/',
}));

const status = [...Array.from(new Set(seminarListings.map(seminar => seminar.status)))].sort().reverse();

export default function Page() {
  const { isOpen } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredSeminars = useMemo(() => {
    return seminarListings.filter(seminar => {
      const matchesSearch = seminar.title.toLowerCase().includes(searchTerm.toLowerCase()) || seminar.school.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === 'Tất cả' || seminar.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatus]);

  const totalPages = Math.ceil(filteredSeminars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSeminars = filteredSeminars.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //   const handleItemsPerPageChange = (value: string) => {
  //     setItemsPerPage(Number(value));
  //     setCurrentPage(1);
  //   };

  return (
    <>
      <Heading title={'System Admin | Auto Career Bridge'} description={''} keywords={''} />
      <div className="flex h-screen">
        <Sidebar />
        <div className={`flex flex-1 flex-col overflow-hidden ${isOpen ? 'lg:ml-64' : ''}`}>
          <Header />
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <h1 className="mb-6 text-2xl font-bold">DANH SÁCH HỘI THẢO</h1>

              <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
                <div className="w-full bg-[#fff] md:w-[40%]">
                  <Input placeholder="Tìm kiếm tiêu đề, trường đại học" className="w-full" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <div className="w-full bg-[#fff] md:w-[25%]">
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full bg-[#fff]">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={'Tất cả'}>Tất cả trạng thái</SelectItem>
                      {status.map(status => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-[20%]">
                  <button
                    onClick={() => {
                      if (Array.isArray(filteredSeminars) && filteredSeminars.length > 0) {
                        exportToExcel({ data: filteredSeminars });
                      }
                    }}
                    className="flex w-full items-center gap-2 rounded bg-green-500 px-4 py-1 text-white hover:bg-green-600 md:w-auto">
                    <Download className="h-5 w-5" />
                    Tải Excel
                  </button>
                </div>
                <div className="w-full bg-[#fff] md:w-1/3"></div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <SeminarTable seminars={currentSeminars} startIndex={startIndex} />

                {filteredSeminars.length === 0 ? (
                  <div className="py-8 text-center">
                    <p className="text-lg text-gray-500">Không tìm thấy kết quả phù hợp.</p>
                  </div>
                ) : (
                  ''
                )}
              </div>
              {filteredSeminars.length > 0 && (
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Xem</span>
                    <Select value={itemsPerPage.toString()} onValueChange={value => setItemsPerPage(Number(value))}>
                      <SelectTrigger className="w-[70px] bg-[#fff]">
                        <SelectValue placeholder={itemsPerPage.toString()} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-gray-500">trên mỗi trang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                      {'<'}
                    </Button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
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
                          className={currentPage === pageNumber ? 'bg-green-500 text-white hover:bg-green-600 hover:text-white' : ''}
                          onClick={() => handlePageChange(pageNumber)}>
                          {pageNumber}
                        </Button>
                      );
                    })}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <span>...</span>
                        <Button variant="outline" size="sm" onClick={() => handlePageChange(totalPages)}>
                          {totalPages}
                        </Button>
                      </>
                    )}
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}>
                      {'>'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
