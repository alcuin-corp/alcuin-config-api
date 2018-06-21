import { IGraph } from ".";

export class Graph<K, V> implements IGraph<K, V> {
    private memoizedParentsIndex: Map<K, K[]> | undefined;
    private memoizedChildrenIndex: Map<K, K[]> | undefined;

    constructor(private index: Map<K, V>,
                private parentFindingStrategy: (v: any) => IterableIterator<K>,
                private idFindingStrategy: (v: V) => K) { }

    public visitAll<T>(id: K,
                       followings: (id: K) => K[],
                       visitor: (obj: V, lvl: number) => T): T[] {
        const result: T[] = [];
        const stack: Array<{currentId: K, currentLevel: number}> = [];
        stack.push({currentId: id, currentLevel: 0});
        while (true) {
            const pop = stack.pop();
            if (!pop) { break; }

            const {currentId, currentLevel} = pop;
            const content = this.get(currentId);
            if (content) {
                if (this.idFindingStrategy(content) !== id) {
                    result.push(visitor(content, currentLevel));
                }
                for (const childId of followings(this.idFindingStrategy(content))) {
                    stack.push({currentId: childId, currentLevel: currentLevel + 1});
                }
            }
        }
        return result;
    }

    public add(v: V): IGraph<K, V> {
        return new Graph(
            this.index.set(this.idFindingStrategy(v), v),
            this.parentFindingStrategy,
            this.idFindingStrategy);
    }

    public get(id: K): V | undefined {
        return this.index.get(id);
    }

    public childrenOf(id: K): K[] {
        return this.childrenIndex.get(id) || [];
    }

    public parentsOf(id: K): K[] {
        return this.parentsIndex.get(id) || [];
    }

    public visitAllChildren<T>(id: K, visitor: (obj: V, lvl: number) => T): T[] {
        return this.visitAll(id, this.childrenOf.bind(this), visitor);
    }

    public getAllChildren(id: K): V[] {
        return this.visitAllChildren(id, (obj, _) => obj);
    }

    public visitAllParents<T>(id: K, visitor: (obj: V, lvl: number) => T): T[] {
        return this.visitAll(id, this.parentsOf.bind(this), visitor);
    }

    public getAllParents(id: K): V[] {
        return this.visitAllParents(id, (obj, _) => obj);
    }

    public get parentsIndex(): Map<K, K[]> {
        if (!this.memoizedParentsIndex) {
            this.memoizedParentsIndex = Array.from(this.index, ([id, o]) => {
                const refs = Array.from(this.parentFindingStrategy(o));
                return {id, refs};
            }).reduce((acc, {id, refs}) => acc.set(id, refs), new Map<K, K[]>());
        }
        return this.memoizedParentsIndex;
    }

    public get childrenIndex(): Map<K, K[]> {
        if (!this.memoizedChildrenIndex) {
            this.memoizedChildrenIndex = new Map<K, K[]>();
            for (const [childId, currentParents] of this.parentsIndex.entries()) {
                for (const currentParent of currentParents) {
                    this.memoizedChildrenIndex.set(currentParent,
                        [...this.memoizedChildrenIndex.get(currentParent) || [], childId]);
                }
            }
        }
        return this.memoizedChildrenIndex;
    }
}
