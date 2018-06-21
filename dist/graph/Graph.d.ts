import { IGraph } from ".";
export declare class Graph<K, V> implements IGraph<K, V> {
    private index;
    private parentFindingStrategy;
    private idFindingStrategy;
    private memoizedParentsIndex;
    private memoizedChildrenIndex;
    constructor(index: Map<K, V>, parentFindingStrategy: (v: any) => IterableIterator<K>, idFindingStrategy: (v: V) => K);
    visitAll<T>(id: K, followings: (id: K) => K[], visitor: (obj: V, lvl: number) => T): T[];
    add(v: V): IGraph<K, V>;
    get(id: K): V | undefined;
    childrenOf(id: K): K[];
    parentsOf(id: K): K[];
    visitAllChildren<T>(id: K, visitor: (obj: V, lvl: number) => T): T[];
    getAllChildren(id: K): V[];
    visitAllParents<T>(id: K, visitor: (obj: V, lvl: number) => T): T[];
    getAllParents(id: K): V[];
    readonly parentsIndex: Map<K, K[]>;
    readonly childrenIndex: Map<K, K[]>;
}
