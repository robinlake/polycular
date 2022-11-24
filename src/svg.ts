import {Node, Edge} from './graph.js';

const createSvgElement = <ElemType extends SVGElement>(tagName: string, params: Record<string, string> = {}) => {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tagName) as ElemType;
    for (const [key, val] of Object.entries(params)) {
        elem.setAttribute(key, val);
    }
    return elem;
}

abstract class BoundThing<ElemType extends SVGElement> {
    constructor(public elem: ElemType) {};


}

class Stage {
    elem: SVGElement;
    constructor() {
        this.elem = createSvgElement('svg', {
            'viewBox': '0 0 300 100',
            'stroke': 'taupe',
            'fill': 'purple',
        });
    }

    mount(child: BoundThing<SVGElement>) {
        this.elem.appendChild(child.elem);
    }
}

class BoundNode extends BoundThing<SVGCircleElement> {
    constructor(
        public node: Node,
        circle: SVGCircleElement,
    ) { super(circle) }

    get x() {
        return parseInt(this.elem.getAttribute('cx') || 'NaN');
    }

    get y() {
        return parseInt(this.elem.getAttribute('cy') || 'NaN');
    }

    static draw(node: Node, x: number, y: number) {
        return new BoundNode(node, createSvgElement<SVGCircleElement>('circle', {
            'cx': x.toString(),
            'cy': y.toString(),
            'r': '10',
        }))
    }
}

class BoundEdge extends BoundThing<SVGLineElement> {
    constructor(
        public edge: Edge,
        line: SVGLineElement,
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

const robin = new Node();
const max = new Node();

const stage = new Stage();
const boundRobin = BoundNode.draw(robin, 10, 10);
const boundMax = BoundNode.draw(max, 50, 50);
const mobinrax = BoundEdge.draw(new Edge(robin,max));
stage.mount(boundRobin);
stage.mount(boundMax);
stage.mount(mobinrax);
// boundRobin.mount(svg);
// boundMax.mount(svg);
// mobinrax.mount(svg);


export {stage, BoundNode, BoundEdge};
