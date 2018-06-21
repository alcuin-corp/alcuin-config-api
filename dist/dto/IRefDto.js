"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TARGET_ID = "TargetId";
const IS_REF = "IsRef";
const REF_TYPE = "RefType";
function isRefDto(self) {
    if (self && typeof (self) === "object") {
        if (TARGET_ID in self && IS_REF in self && REF_TYPE in self) {
            return true;
        }
    }
    return false;
}
exports.isRefDto = isRefDto;
//# sourceMappingURL=IRefDto.js.map