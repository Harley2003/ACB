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

interface Job {
    id: number
    title: string
    company: string
    email: string
    date: string
    status: string
    description: string
    requirements: string[]
}

interface JobListingsProps {
    jobs: Job[]
    startIndex: number
}

export function JobListings({jobs, startIndex}: JobListingsProps) {
    return (
        <div className="w-full overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40px]">STT</TableHead>
                        <TableHead>Tiêu đề</TableHead>
                        <TableHead>Doanh nghiệp đăng bài</TableHead>
                        <TableHead>Email tài khoản đăng</TableHead>
                        <TableHead>Ngày đăng</TableHead>
                        <TableHead>Trạng thái duyệt</TableHead>
                        <TableHead>Hành động</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobs.map((job, index) => (
                        <TableRow key={job.id}>
                            <TableCell>{startIndex + index + 1}</TableCell>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>{job.email}</TableCell>
                            <TableCell>{job.date}</TableCell>
                            <TableCell>
                            <span
                                className={`inline-flex justify-center items-center w-32 h-8 rounded-[50px] px-2 py-1 text-xs ${
                                    job.status === "Đang chờ phê duyệt" ? "bg-yellow-100 text-yellow-800" :
                                        job.status === "Đã phê duyệt" ? "bg-green-100 text-green-800" :
                                            "bg-red-100 text-red-800"
                                }`}>
                            {job.status}
                            </span>
                            </TableCell>
                            <TableCell>
                                <Link href={`/system-admin/management-posts/detail-post/${job.id}`} passHref>
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-green-500 hover:bg-green-600 text-white"
                                    >
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