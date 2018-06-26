export interface IImportResultMetadataDto {
    DbVersion: object;
    ApiVersion: string;
    Date: string;
    Durations: {
        [key: string]: number;
    };
    AverageDurationsByTypes: {
        [key: string]: number;
    };
    Errors: number;
    Warnings: number;
    Created: number;
    Updated: number;
    Deleted: number;
    FixedCycles: number;
}
