import { LayoutDashboard, Users, FileText, LogOut } from 'lucide-react';

export const menuItems = [
  { title: 'Tổng quan', icon: LayoutDashboard, href: '/system-admin/dashboard' },
  { title: 'Quản lý tài khoản', icon: Users, href: '/system-admin/management-accounts' },
  { title: 'Quản lý bài đăng', icon: FileText, href: '/system-admin/management-posts' },
  { title: 'Quản lý hội thảo', icon: FileText, href: '/system-admin/management-seminars' },
  { title: 'Đăng xuất', icon: LogOut, href: '/' },
];
