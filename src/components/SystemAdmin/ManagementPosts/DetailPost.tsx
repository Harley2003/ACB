/* eslint-disable */

"use client"

import {Bold, Italic, Link2, List, ListOrdered, Strikethrough} from 'lucide-react'
import {Button} from "@/src/shadcn/components/ui/button"
import {Textarea} from "@/src/shadcn/components/ui/textarea"

interface RichTextEditorProps {
    value: string
    onChange: (value: string) => void
    disabled?: boolean
}

export function RichTextEditor({value, onChange, disabled = false}: RichTextEditorProps) {
    return (
        <div className="border rounded-md">
            <div className="flex items-center gap-0.5 border-b p-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
                    <Bold className="h-4 w-4"/>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
                    <Italic className="h-4 w-4"/>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
                    <Strikethrough className="h-4 w-4"/>
                </Button>
                <span className="w-px h-6 bg-border mx-2"/>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
                    <List className="h-4 w-4"/>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
                    <ListOrdered className="h-4 w-4"/>
                </Button>
                <span className="w-px h-6 bg-border mx-2"/>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
                    <Link2 className="h-4 w-4"/>
                </Button>
            </div>
            <Textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border-0 rounded-none min-h-[200px]"
                placeholder="Nhập nội dung..."
                disabled={disabled}
            />
        </div>
    )
}