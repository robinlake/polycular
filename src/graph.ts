interface Person {
    name: string;
    element: SVGCircleElement;

}

interface Relationship {
    nodeA: Person;
    nodeB: Person;
    element: SVGLineElement;
    type: string;
}

export {Person, Relationship};