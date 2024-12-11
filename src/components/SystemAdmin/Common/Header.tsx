/* eslint-disable */

import {Avatar, AvatarFallback, AvatarImage} from "@/src/shadcn/components/ui/avatar"
import {Bell, ChevronDown, Menu} from 'lucide-react'
import {useSidebar} from "@/src/context/sidebar-provider"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/src/shadcn/components/ui/dropdown-menu"

const notifications = [
    {id: 1, message: "Bài đăng mới cần phê duyệt", time: "5 phút trước"},
    {id: 2, message: "Có 3 ứng viên mới ứng tuyển", time: "30 phút trước"},
    {id: 3, message: "Nhắc nhở: Cuộc họp lúc 15:00", time: "1 giờ trước"},
]

export function Header() {
    const {toggleSidebar} = useSidebar()

    return (
        <header className="flex items-center justify-between p-4 border-b bg-white">
            <div className="flex items-center gap-2">
                <button onClick={toggleSidebar} className="lg:hidden">
                    <Menu className="h-6 w-6"/>
                </button>
                <div className="w-8 h-8 bg-green-500 rounded-md"></div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Quản trị viên</span>
                        {/*<ChevronDown className="h-4 w-4 text-gray-500"/>*/}
                    </div>
                    <span className="text-sm text-gray-500">Super Admin</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="relative">
                            <Bell className="h-5 w-5 text-gray-500"/>
                            <span
                                className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                        <DropdownMenuLabel>Thông báo</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        {notifications.map((notification) => (
                            <DropdownMenuItem key={notification.id} className="flex flex-col items-start">
                                <span>{notification.message}</span>
                                <span className="text-xs text-gray-500">{notification.time}</span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="Admin"/>
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="font-medium">Admin</div>
                        <div className="text-sm text-gray-500">Mariakfly@email.com</div>
                    </div>
                </div>
            </div>
        </header>
    )
}