import { AnyAlert, IExportMetadataDto, IAnyObjectDto } from ".";
declare const CONTENT = "Content";
declare const ADDED = "Added";
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
export declare function isExportDto(input: any): input is IExportDto;
export {};
