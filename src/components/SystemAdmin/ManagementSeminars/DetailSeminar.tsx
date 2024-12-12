'use client';

import { Bold, Italic, Link2, List, ListOrdered, Strikethrough } from 'lucide-react';
import { Button } from '@/src/shadcn/components/ui/button';
import { Textarea } from '@/src/shadcn/components/ui/textarea';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
}

export function RichTextEditor({ value, onChange, disabled = false, readOnly = false }: RichTextEditorProps) {
  return (
    <div className="rounded-md border">
      <div className="flex items-center gap-0.5 border-b p-2">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
          <Strikethrough className="h-4 w-4" />
        </Button>
        <span className="mx-2 h-6 w-px bg-border" />
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
          <ListOrdered className="h-4 w-4" />
        </Button>
        <span className="mx-2 h-6 w-px bg-border" />
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={disabled}>
          <Link2 className="h-4 w-4" />
        </Button>
      </div>
      <Textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        className="min-h-[200px] rounded-none border-0"
        // placeholder="Nhập nội dung..."
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  );
}
