import { IAnyObjectDto } from "./dto";
import { Graph } from "./graph/Graph";
export declare function createFromExport(file: string): DependencyGraph;
export declare class DependencyGraph extends Graph<string, IAnyObjectDto> {
    constructor(index: Map<string, IAnyObjectDto>);
}
