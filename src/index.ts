import {createGraphContainer, createNode, createEdge} from './svg.js';
// const svgContainer = document.getElementById('mysvg');
const graphContainer = createGraphContainer();
const robin = createNode(10, 10);
const max = createNode(50, 50);
const mobinRax = createEdge(robin, max);
document.body.appendChild(graphContainer.svg);
graphContainer.mount(mobinRax.element)
graphContainer.mount(robin.element)
graphContainer.mount(max.element)
// svgContainer?.appendChild(svg);