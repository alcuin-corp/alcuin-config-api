import { IApiAlertDto, IServiceAlertDto, isApiAlertDto } from ".";

export type AnyAlert = IApiAlertDto | IServiceAlertDto;

export function getAlertId(alert: AnyAlert): string {
    if (isApiAlertDto(alert)) {
        return alert.Id;
    }
    return alert.ObjectId;
}
