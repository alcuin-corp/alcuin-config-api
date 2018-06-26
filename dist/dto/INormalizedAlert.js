"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
function normalizeAlert(err) {
    if (_1.isApiAlertDto(err)) {
        const result = {
            ObjectId: err.Id,
            Message: err.ApiError.Reason,
            Status: err.ApiError.Status,
            ObjectType: err.ObjectType,
            StackTrace: err.ApiError.StackTrace,
        };
        if (err.ApiError.ValidationErrors) {
            result.Message += " (" + err.ApiError.ValidationErrors.join(", ") + ")";
        }
        return result;
    }
    else {
        return {
            ObjectId: err.ObjectId,
            Message: err.Message,
            Status: 500,
            ObjectType: err.ObjectType,
            StackTrace: err.StackTrace,
        };
    }
}
exports.normalizeAlert = normalizeAlert;
//# sourceMappingURL=INormalizedAlert.js.map