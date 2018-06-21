import { IAnyObjectDto } from "./dto";
import { Graph } from "./graph/Graph";
export declare function findParents(self: any): IterableIterator<string>;
export declare class DependencyGraph extends Graph<string, IAnyObjectDto> {
    constructor(index: Map<string, IAnyObjectDto>);
}
