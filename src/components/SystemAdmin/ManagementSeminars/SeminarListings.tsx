/* eslint-disable */

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/src/shadcn/components/ui/table"
import {Button} from "@/src/shadcn/components/ui/button"
import Link from 'next/link';

interface Seminar {
    id: number
    title: string
    school: string
    email: string
    date: string
    status: "Đang chờ phê duyệt" | "Đã phê duyệt" | "Từ chối"
    url: string
}

interface SeminarTableProps {
    seminars: Seminar[]
    startIndex: number
}

export function SeminarTable({seminars, startIndex}: SeminarTableProps) {
    return (
        <div className="w-full overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40px]">STT</TableHead>
                        <TableHead>Tiêu đề</TableHead>
                        <TableHead>Trường đại học</TableHead>
                        <TableHead>Email tài khoản đăng</TableHead>
                        <TableHead>Ngày đăng</TableHead>
                        <TableHead>Trạng thái duyệt</TableHead>
                        <TableHead>Hành động</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {seminars.map((seminar, index) => (
                        <TableRow key={seminar.id}>
                            <TableCell>{startIndex + index + 1}</TableCell>
                            <TableCell>{seminar.title}</TableCell>
                            <TableCell>{seminar.school}</TableCell>
                            <TableCell>{seminar.url}</TableCell>
                            <TableCell>{seminar.date}</TableCell>
                            <TableCell>
                            <span
                                className={`inline-flex justify-center items-center w-32 h-8 rounded-[50px] px-2 py-1 text-xs ${
                                    seminar.status === "Đang chờ phê duyệt" ? "bg-yellow-100 text-yellow-800" :
                                        seminar.status === "Đã phê duyệt" ? "bg-green-100 text-green-800" :
                                            "bg-red-100 text-red-800"
                                }`}>
                                {seminar.status}
                            </span>
                            </TableCell>
                            <TableCell>
                                <Link href={`/system-admin/management-seminars/detail-seminar/${seminar.id}`} passHref>
                                    <Button variant="default" size="sm"
                                            className="bg-green-500 hover:bg-green-600 text-white">
                                        Chi Tiết
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}