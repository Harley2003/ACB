import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/src/utils/lib/utils';
import { useSidebar } from '@/src/context/sidebar-provider';
import CustomImage from '@/src/components/SystemAdmin/Common/CustomImage';
import { menuItems } from '@/src/utils/constants/menuItems';
// import { bottomMenuItems } from '@/src/utils/constants/bottomMenuItems';

export function Sidebar() {
  const { isOpen, setSidebarOpen } = useSidebar();
  const router = useRouter();
  const currentPath = '/' + router.pathname.split('/').slice(1, 3).join('/');

  return (
    <>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 border-r bg-white transition-transform duration-300 ease-in-out lg:static lg:inset-auto lg:translate-x-0`}>
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-green-500">
              <CustomImage src="https://via.placeholder.com/32x32" alt="Logo" width={32} height={32} />
            </div>
            <h2 className="text-xl font-semibold">Auto Career Bright</h2>
          </Link>
        </div>
        <nav className="mb-10 flex-1 overflow-y-auto">
          <ul className="space-y-2 p-4">
            {menuItems.map(item => (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  className={cn(
                    'flex w-full items-center gap-4 rounded-lg px-4 py-3 text-gray-500 transition-all hover:text-green-500',
                    currentPath === item.href && 'bg-green-100 text-green-600'
                  )}>
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/*<div className="p-4">*/}
        {/*    <ul className="space-y-2">*/}
        {/*        {bottomMenuItems.map((item) => (*/}
        {/*            <li key={item.href} className="w-full">*/}
        {/*                <Link*/}
        {/*                    href={item.href}*/}
        {/*                    className={cn(*/}
        {/*                        "flex items-center gap-4 rounded-lg px-4 py-3 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 w-full",*/}
        {/*                        currentPath === item.href && "bg-green-100 text-green-600"*/}
        {/*                    )}*/}
        {/*                >*/}
        {/*                    <item.icon className="h-5 w-5"/>*/}
        {/*                    <span className="text-sm font-medium">{item.title}</span>*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*        ))}*/}
        {/*    </ul>*/}
        {/*</div>*/}
      </div>
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
    </>
  );
}
