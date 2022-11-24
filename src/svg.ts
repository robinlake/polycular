import {Node, Edge} from './graph.js';

const createSvgElement = <ElemType extends SVGElement>(tagName: string, params: Record<string, string | null> = {}) => {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tagName) as ElemType;
    for (const [key, val] of Object.entries(params)) {
        if (val) {
            elem.setAttribute(key, val);
        }
    }
    return elem;
}

const createNode = (x: number, y: number): Node => {
    const element = createSvgElement<SVGCircleElement>('circle', {
        'cx': x.toString(),
        'cy': y.toString(),
        'r': '10',
    });
    return {element};
}

const createEdge = (nodeA: Node, nodeB: Node): Edge => {
    const element = createSvgElement<SVGLineElement>('line', {
        'x1': nodeA.element.getAttribute('cx'),
        'x2': nodeB.element.getAttribute('cx'),
        'y1': nodeA.element.getAttribute('cy'),
        'y2':  nodeB.element.getAttribute('cy'),
        'stroke': 'black',
    });
    return {element, nodeA, nodeB};
}

interface GraphContainer {
    svg: SVGElement;
    nodes: Node[];
    edges: Edge[];
    mount: (child: SVGElement) => void;
}

const createGraphContainer = (): GraphContainer => {
    const svg = createSvgElement('svg', {
        stroke: '#343',
        fill: '#393'
    });
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const mountChild = (child: SVGElement) => mount(svg, child);
    return {
        svg,
        nodes,
        edges,
        mount: mountChild,
    }
}

const mount = (parent: SVGElement, child: SVGElement) => {
    parent.appendChild(child);
}





// const stage = createGraphContainer();
// const boundRobin = BoundNode.draw(robin, 10, 10);
// const boundMax = BoundNode.draw(max, 50, 50);
// const mobinrax = BoundEdge.draw(new Edge(robin,max), boundRobin, boundMax);
// stage.mount(boundRobin);
// stage.mount(boundMax);
// stage.mount(mobinrax);
// boundRobin.mount(svg);
// boundMax.mount(svg);
// mobinrax.mount(svg);


export {createGraphContainer, createNode, createEdge};
