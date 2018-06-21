import { IAlertDto, IExportMetadataDto, IAnyObjectDto } from ".";
export interface IExportDto {
    Metadata: IExportMetadataDto;
    Alerts: IAlertDto[];
    Content: {
        Added: IAnyObjectDto[];
        Updated: any[];
        Deleted: any[];
    };
}
