import { AnyAlert, IExportMetadataDto, IAnyObjectDto } from ".";

const CONTENT = "Content";
const ADDED = "Added";

export interface IExportDto {
    Metadata: IExportMetadataDto;
    Alerts: AnyAlert[];
    [CONTENT]: {
        [ADDED]: IAnyObjectDto[];
        Updated: any[];
        Deleted: any[];
    };
}

export function isExportDto(file: any): file is IExportDto {
    return CONTENT in file && ADDED in file[CONTENT];
}
