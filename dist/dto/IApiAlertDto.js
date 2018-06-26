"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_ERROR = "ApiError";
function isApiAlertDto(alert) {
    return API_ERROR in alert;
}
exports.isApiAlertDto = isApiAlertDto;
//# sourceMappingURL=IApiAlertDto.js.map