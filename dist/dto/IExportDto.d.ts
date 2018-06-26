import { AnyAlert, IExportMetadataDto, IAnyObjectDto } from ".";
declare const CONTENT = "Content";
declare const ADDED = "Added";
export interface IExportDto {
    Metadata: IExportMetadataDto;
    Alerts: AnyAlert[];
    [CONTENT]: {
        [ADDED]: IAnyObjectDto[];
        Updated: any[];
        Deleted: any[];
    };
}
export declare function isExportDto(file: any): file is IExportDto;
export {};
