import { IObjectInfoDto, IImportResultMetadataDto, AnyAlert } from ".";
declare const ALERTS = "Alerts";
export interface IImportResultDto {
    Metadata: IImportResultMetadataDto;
    [ALERTS]: AnyAlert[];
    Created: IObjectInfoDto[];
    Updated: IObjectInfoDto[];
    Deleted: IObjectInfoDto[];
    FixedCycles: any[];
}
export declare function isImportResultDto(input: any): input is IImportResultDto;
export {};
