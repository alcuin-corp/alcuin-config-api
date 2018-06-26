"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
function getAlertId(alert) {
    if (_1.isApiAlertDto(alert)) {
        return alert.Id;
    }
    return alert.ObjectId;
}
exports.getAlertId = getAlertId;
//# sourceMappingURL=AnyAlert.js.map