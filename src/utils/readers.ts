import fs from "fs";
import { isExportDto, IExportDto, IImportResultDto, isImportResultDto } from "../dto";

export function readJSON(fileName: string): any {
    const buffer = fs.readFileSync(fileName);
    const json = buffer.toString();
    const data = JSON.parse(json);
    return data;
}

export function readExportFile(fileName: string): IExportDto {
    const file = readJSON(fileName);
    if (isExportDto(file)) {
        return file;
    }
    throw new Error(`File ${fileName} is not a proper export file.`);
}

export function readResultFile(fileName: string): IImportResultDto {
    const file = readJSON(fileName);
    if (isImportResultDto(file)) {
        return file;
    }
    throw new Error(`File ${fileName} is not a proper result file.`);
}
