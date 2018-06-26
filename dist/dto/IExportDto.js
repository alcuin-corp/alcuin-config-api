"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONTENT = "Content";
const ADDED = "Added";
function isExportDto(file) {
    return CONTENT in file && ADDED in file[CONTENT];
}
exports.isExportDto = isExportDto;
//# sourceMappingURL=IExportDto.js.map