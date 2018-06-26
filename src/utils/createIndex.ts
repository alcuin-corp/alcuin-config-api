import { IExportDto, IAnyObjectDto } from "../dto";

export function createIndex(e: IExportDto): Map<string, IAnyObjectDto> {
    return e.Content.Added.reduce((acc, item) => acc.set(item.Id, item), new Map<string, IAnyObjectDto>());
}
