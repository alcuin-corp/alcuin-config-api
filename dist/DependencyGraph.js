"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dto_1 = require("./dto");
const Graph_1 = require("./graph/Graph");
const utils_1 = require("./utils");
function* findParents(self) {
    if (self) {
        if (typeof (self) === "object") {
            if (dto_1.isRefDto(self)) {
                yield self.TargetId;
            }
            else {
                for (const entry of Object.entries(self)) {
                    yield* findParents(entry[1]);
                }
            }
        }
        else if (Array.isArray(self)) {
            for (const child of self) {
                yield* findParents(child);
            }
        }
    }
}
function createFromExport(file) {
    return new DependencyGraph(utils_1.createIndex(utils_1.readExportFile(file)));
}
exports.createFromExport = createFromExport;
class DependencyGraph extends Graph_1.Graph {
    constructor(index) {
        super(index, findParents, (x) => x.Id);
    }
}
exports.DependencyGraph = DependencyGraph;
//# sourceMappingURL=DependencyGraph.js.map