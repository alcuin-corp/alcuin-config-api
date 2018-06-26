export interface IGraph<K, V> {
    add(v: V): IGraph<K, V>;
    get(id: K): V | undefined;

    visitAllChildren<T>(id: K, visitor: (obj: V, lvl: number) => T): T[];
    visitAllParents<T>(id: K, visitor: (obj: V, lvl: number) => T): T[];

    allChildrenOf(id: K): V[];
    allParentsOf(id: K): V[];

    childrenOf(id: K): K[];
    parentsOf(id: K, options?: { recursive?: boolean }): K[];
}
