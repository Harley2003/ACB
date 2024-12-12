import { Header } from '@/src/components/SystemAdmin/Common/Header';
import { Sidebar } from '@/src/components/SystemAdmin/Common/Sidebar';
import { StatsCard } from '@/src/components/SystemAdmin/Dashboard/StatsCard';
import { BarChart } from '@/src/components/SystemAdmin/Dashboard/BarChart';
import { PieChart } from '@/src/components/SystemAdmin/Dashboard/PieChart';
import { useSidebar } from '@/src/context/sidebar-provider';
import Heading from '@/src/components/Common/Heading';

const accountData = Array.from({ length: 36 }, (_, i) => ({
  name: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'][i % 12],
  value: Math.floor(Math.random() * 3000) + 1000,
  category: i % 2 === 0 ? 'university1' : 'university2',
  year: i < 12 ? '2022' : i < 24 ? '2023' : '2024',
}));

const jobData = Array.from({ length: 36 }, (_, i) => ({
  name: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'][i % 12],
  value: Math.floor(Math.random() * 2000) + 500,
  category: i % 2 === 0 ? 'it' : 'marketing',
  year: i < 12 ? '2022' : i < 24 ? '2023' : '2024',
}));

const matchingData = [
  { name: 'Tỉ lệ thành công', value: 150, color: '#00E676', category: 'it', year: '2024' },
  { name: 'Tỉ lệ không thành công', value: 50, color: '#4F46E5', category: 'marketing', year: '2024' },
  { name: 'Tỉ lệ thành công', value: 100, color: '#00E676', category: 'it', year: '2023' },
  { name: 'Tỉ lệ không thành công', value: 100, color: '#4F46E5', category: 'it', year: '2023' },
  { name: 'Tỉ lệ thành công', value: 120, color: '#00E676', category: 'marketing', year: '2022' },
  { name: 'Tỉ lệ không thành công lệ', value: 80, color: '#4F46E5', category: 'marketing', year: '2022' },
];

export default function DashboardPage() {
  const { isOpen } = useSidebar();

  return (
    <>
      <Heading title={'System Admin | Auto Career Bridge'} description={''} keywords={''} />
      <div className="flex h-screen">
        <Sidebar />
        <div className={`flex flex-1 flex-col overflow-hidden ${isOpen ? 'lg:ml-64' : ''}`}>
          <Header />
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <div className="mb-8">
                <h1 className="mb-2 text-2xl font-bold">Xin chào quản trị viên</h1>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <StatsCard title="tài khoản mới" value={76} className="bg-[#4640DE]" />
                <StatsCard title="Tổng số việc làm được đăng" value={18} className="bg-[#56CDAD]" />
                <StatsCard title="Phù hợp" value={24} className="bg-[#4640DE]" />
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-1">
                <BarChart data={accountData} title="Thống kê đăng ký tài khoản" categoryType="trường học" />
                <BarChart data={jobData} title="Thống kê việc làm được đăng tuyển" categoryType="chuyên ngành" />
                <PieChart data={matchingData} title="Biểu đồ tỉ lệ matching" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
