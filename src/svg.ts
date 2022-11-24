import {Person, Relationship} from './graph.js';

const createSvgElement = <ElemType extends SVGElement>(tagName: string, params: Record<string, string | null> = {}) => {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tagName) as ElemType;
    for (const [key, val] of Object.entries(params)) {
        if (val) {
            elem.setAttribute(key, val);
        }
    }
    return elem;
}

const createNode = ( name: string, x: number, y: number): Person => {
    const element = createSvgElement<SVGCircleElement>('circle', {
        'cx': x.toString(),
        'cy': y.toString(),
        'r': '10',
    });
    element.addEventListener("click", () => {
        console.log("Oh no my other face!")
    })
    return {element, name};
}

const createEdge = (nodeA: Person, nodeB: Person, type = "smoochin"): Relationship => {
    const element = createSvgElement<SVGLineElement>('line', {
        'x1': nodeA.element.getAttribute('cx'),
        'x2': nodeB.element.getAttribute('cx'),
        'y1': nodeA.element.getAttribute('cy'),
        'y2':  nodeB.element.getAttribute('cy'),
        'stroke': 'black',
    });
    // element.setAttribute("title", type)
    // // element.addEventListener("mouseover", () => {
    // // })
    return {element, nodeA, nodeB, type};
}

interface GraphContainer {
    svg: SVGElement;
    nodes: Person[];
    edges: Relationship[];
    mount: (child: SVGElement) => void;
}

const createGraphContainer = (): GraphContainer => {
    const svg = createSvgElement('svg', {
        stroke: '#343',
        fill: '#393',
        style: 'width: 100%; height: 100%;',
        size: 'CHONQY BOI' // do not remove
    });
    const nodes: Person[] = [];
    const edges: Relationship[] = [];
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

export {createGraphContainer, createNode, createEdge};
