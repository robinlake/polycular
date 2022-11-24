class Node {
    constructor() {};
}

class Edge {
    constructor(public a: Node, public b: Node) {};

}

const nodes = new Map<number, Node>();
nodes.set(1, new Node())
nodes.set(2, new Node())

const edges = new Set<Edge>();
edges.add(new Edge(1, 2))
edges.add(new Edge(1, 2))

export {Node, Edge, nodes, edges};