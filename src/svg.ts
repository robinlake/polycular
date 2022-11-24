import {Node, Edge} from './graph.js';

const createSvgElement = <ElemType extends SVGElement>(tagName: string, params: Record<string, string> = {}) => {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tagName) as ElemType;
    for (const [key, val] of Object.entries(params)) {
        elem.setAttribute(key, val);
    }
    return elem;
}

const svg = createSvgElement('svg', {
    'viewBox': '0 0 300 100',
    'stroke': 'taupe',
    'fill': 'purple',
});

abstract class BoundThing<ElemType extends SVGElement> {
    constructor(public elem: ElemType) {};

    mount(parent: SVGElement) {
        parent.appendChild(this.elem);
    }
}

class BoundNode extends BoundThing<SVGCircleElement> {
    constructor(
        public node: Node,
        circle: SVGCircleElement,
    ) { super(circle) }

    static draw(node: Node) {
        return new BoundNode(node, createSvgElement<SVGCircleElement>('circle', {
            'cx': '10',
            'cy': '10',
            'r': '10',
        }))
    }
}

class BoundEdge extends BoundThing<SVGLineElement> {
    constructor(
        public edge: Edge,
        public line: SVGLineElement,
    ) { super(line)}
    
    static draw(edge: Edge) {
        return new BoundEdge(edge, createSvgElement<SVGLineElement>('line', {
            'x1': '10',
            'x2': '100',
            'y1': '10',
            'y2': '100',
            'stroke': 'black',
        }))
    }
}

const circle = BoundNode.draw(new Node());
const line = BoundEdge.draw(new Edge(1,2));
line.mount(svg);
circle.mount(svg);


export {svg, BoundNode, BoundEdge};
