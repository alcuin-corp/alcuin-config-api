"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONTENT = "Content";
const ADDED = "Added";
function isExportDto(input) {
    return CONTENT in input && ADDED in input[CONTENT];
}
exports.isExportDto = isExportDto;
//# sourceMappingURL=IExportDto.js.map