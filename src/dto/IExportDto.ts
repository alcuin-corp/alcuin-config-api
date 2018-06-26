import { AnyAlert, IExportMetadataDto, IAnyObjectDto } from ".";

const CONTENT = "Content";
const ADDED = "Added";

export interface IChunkDto {
    [ADDED]: IAnyObjectDto[];
    Update: any[];
    Deleted: any[];
}

export interface IExportDto {
    Metadata: IExportMetadataDto;
    Alerts: AnyAlert[];
    [CONTENT]: IChunkDto;
}

export function isExportDto(input: any): input is IExportDto {
    return CONTENT in input && ADDED in input[CONTENT];
}
