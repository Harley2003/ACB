/* eslint-disable */

import {utils, writeFile} from "xlsx";

interface ExportToExcelProps {
    data: any[];
}

export const exportToExcel = ({data}: ExportToExcelProps): void => {
    if (!data || data.length === 0) {
        return;
    }

    const worksheet = utils.json_to_sheet(data);

    const workbook = utils.book_new();

    const table = {
        name: "Danh sách",
        ref: worksheet['!ref'],
        headerRow: 1,
        totalRow: 0,
        columns: Object.keys(data[0]).map((col) => ({
            name: col,
            key: col,
        })),
    };

    worksheet['!cols'] = Object.keys(data[0]).map(() => ({width: 20}));
    utils.book_append_sheet(workbook, worksheet, "Danh sách");

    const range = worksheet['!ref'];
    if (range) {
        worksheet['!table'] = {
            tableRange: range,
        };
    }

    writeFile(workbook, "danh_sach.xlsx");
};
