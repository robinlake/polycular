interface Node {
    element: SVGCircleElement;

}

interface Edge {
    nodeA: Node;
    nodeB: Node;
    element: SVGLineElement;
}

export {Node, Edge};