export interface IGraph<K, V> {
    add(v: V): IGraph<K, V>;

    get(id: K): V | undefined;
    childrenOf(id: K): K[];
    parentsOf(id: K): K[];
    visitAll<T>(id: K, followings: (id: K) => K[], visitor: (obj: V, lvl: number) => T): T[];
    visitAllChildren<T>(id: K, visitor: (obj: V, lvl: number) => T): T[];
    getAllChildren(id: K): V[];
    visitAllParents<T>(id: K, visitor: (obj: V, lvl: number) => T): T[];
    getAllParents(id: K): V[];
}
