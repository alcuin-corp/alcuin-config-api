"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getName(obj) {
    if (obj.Name) {
        return obj.Name["fr-FR"] || "no name";
    }
    return "no name";
}
exports.getName = getName;
//# sourceMappingURL=IAnyObjectDto.js.map