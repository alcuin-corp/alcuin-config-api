import { IAnyObjectDto, isRefDto } from "./dto";
import { Graph } from "./graph/Graph";
import { readExportFile, createIndex } from "./utils";

function* findParents(self: any): IterableIterator<string> {
    if (self) {
        if (typeof(self) === "object") {
            if (isRefDto(self)) {
                yield self.TargetId;
            } else {
                for (const entry of Object.entries(self)) {
                    yield *findParents(entry[1]);
                }
            }
        } else if (Array.isArray(self)) {
            for (const child of self) {
                yield *findParents(child);
            }
        }
    }
}

export function createFromExport(file: string): DependencyGraph {
    return new DependencyGraph(createIndex(readExportFile(file)));
}

export class DependencyGraph extends Graph<string, IAnyObjectDto> {
    constructor(index: Map<string, IAnyObjectDto>) {
        super(index, findParents, (x) => x.Id);
    }
}
