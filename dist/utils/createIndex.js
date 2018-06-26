"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createIndex(e) {
    return e.Content.Added.reduce((acc, item) => acc.set(item.Id, item), new Map());
}
exports.createIndex = createIndex;
//# sourceMappingURL=createIndex.js.map