"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor(index, parentFindingStrategy, idFindingStrategy) {
        this.index = index;
        this.parentFindingStrategy = parentFindingStrategy;
        this.idFindingStrategy = idFindingStrategy;
    }
    visitAll(id, followings, visitor, options) {
        options = options || {};
        const result = [];
        const visited = new Set();
        const stack = [];
        stack.push({ currentId: id, currentDepth: 0 });
        while (true) {
            const pop = stack.pop();
            if (!pop) {
                break;
            }
            const { currentId, currentDepth } = pop;
            if (!visited.has(currentId) && (!options.maxDepth || currentDepth <= options.maxDepth)) {
                visited.add(currentId);
                const content = this.get(currentId);
                if (content) {
                    if (this.idFindingStrategy(content)) {
                        result.push(visitor(content, currentDepth));
                    }
                    for (const childId of followings(this.idFindingStrategy(content))) {
                        stack.push({ currentId: childId, currentDepth: currentDepth + 1 });
                    }
                }
            }
        }
        return result;
    }
    add(v) {
        return new Graph(this.index.set(this.idFindingStrategy(v), v), this.parentFindingStrategy, this.idFindingStrategy);
    }
    get(id) {
        return this.index.get(id);
    }
    childrenOf(id) {
        return this.childrenIndex.get(id) || [];
    }
    parentsOf(id) {
        return this.parentsIndex.get(id) || [];
    }
    visitAllChildren(id, visitor) {
        return this.visitAll(id, this.childrenOf.bind(this), visitor);
    }
    allChildrenOf(id) {
        return this.visitAllChildren(id, (obj, _) => obj);
    }
    visitAllParents(id, visitor) {
        return this.visitAll(id, this.parentsOf.bind(this), visitor);
    }
    allParentsOf(id) {
        return this.visitAllParents(id, (obj, _) => obj);
    }
    get parentsIndex() {
        if (!this.memoizedParentsIndex) {
            this.memoizedParentsIndex = Array.from(this.index, ([id, o]) => {
                const refs = Array.from(this.parentFindingStrategy(o));
                return { id, refs };
            }).reduce((acc, { id, refs }) => acc.set(id, refs), new Map());
        }
        return this.memoizedParentsIndex;
    }
    get childrenIndex() {
        if (!this.memoizedChildrenIndex) {
            this.memoizedChildrenIndex = new Map();
            for (const [childId, currentParents] of this.parentsIndex.entries()) {
                for (const currentParent of currentParents) {
                    this.memoizedChildrenIndex.set(currentParent, [...this.memoizedChildrenIndex.get(currentParent) || [], childId]);
                }
            }
        }
        return this.memoizedChildrenIndex;
    }
}
exports.Graph = Graph;
//# sourceMappingURL=Graph.js.map