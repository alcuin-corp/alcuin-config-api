import { AnyAlert } from ".";
declare const API_ERROR = "ApiError";
export interface IApiAlertDto {
    Progress: number;
    Id: string;
    Type: string;
    Name: string;
    Message: string;
    ObjectType: string;
    [API_ERROR]: {
        Status: number;
        Details: {
            [key: string]: string;
        };
        Reason: string;
        StackTrace: string;
        ValidationErrors?: string[];
    };
}
export declare function isApiAlertDto(alert: AnyAlert): alert is IApiAlertDto;
export {};
