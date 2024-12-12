import { utils, writeFile } from 'xlsx';

interface ExportData {
  [key: string]: string | number | boolean;
}

interface ExportToExcelProps {
  data: ExportData[];
}

export const exportToExcel = ({ data }: ExportToExcelProps): void => {
  if (!data || data.length === 0) {
    return;
  }

  const worksheet = utils.json_to_sheet(data);
  const workbook = utils.book_new();

  worksheet['!cols'] = Object.keys(data[0]).map(() => ({ width: 20 }));

  utils.book_append_sheet(workbook, worksheet, 'Danh sách');

  writeFile(workbook, 'danh_sach.xlsx');
};
