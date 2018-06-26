import { IObjectInfoDto, IImportResultMetadataDto, AnyAlert } from ".";

const ALERTS = "Alerts";

export interface IImportResultDto {
    Metadata: IImportResultMetadataDto;
    [ALERTS]: AnyAlert[];
    Created: IObjectInfoDto[];
    Updated: IObjectInfoDto[];
    Deleted: IObjectInfoDto[];
    FixedCycles: any[];
}

export function isImportResultDto(input: any): input is IImportResultDto {
    return ALERTS in input;
}
