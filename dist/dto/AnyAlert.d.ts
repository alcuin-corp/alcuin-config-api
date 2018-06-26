import { IApiAlertDto, IServiceAlertDto } from ".";
export declare type AnyAlert = IApiAlertDto | IServiceAlertDto;
export declare function getAlertId(alert: AnyAlert): string;
