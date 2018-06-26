"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dto_1 = require("../dto");
function readJSON(fileName) {
    const buffer = fs_1.default.readFileSync(fileName);
    const json = buffer.toString();
    const data = JSON.parse(json);
    return data;
}
exports.readJSON = readJSON;
function readExportFile(fileName) {
    const file = readJSON(fileName);
    if (dto_1.isExportDto(file)) {
        return file;
    }
    throw new Error(`File ${fileName} is not a proper export file.`);
}
exports.readExportFile = readExportFile;
function readResultFile(fileName) {
    const file = readJSON(fileName);
    if (dto_1.isImportResultDto(file)) {
        return file;
    }
    throw new Error(`File ${fileName} is not a proper result file.`);
}
exports.readResultFile = readResultFile;
//# sourceMappingURL=readers.js.map