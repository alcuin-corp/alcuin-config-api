export interface IExportMetadataDto {
    DbVersion: number;
    ApiVersion: string;
    Version: string;
    Date: string;
    Duration: number;
    Origin: string;
    Exported: number;
    Errors: number;
    Warnings: number;
}
