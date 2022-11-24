import {createGraphContainer, createNode, createEdge} from './svg.js';
const graphContainer = createGraphContainer();

const people = [
  createNode("robin", 10, 10), // robin
  createNode("max", 50, 50), // max
]

const relationships = [
    createEdge(people[0], people[1], "sexy as hell") // mobinrax
]

document.body.appendChild(graphContainer.svg);

for (const relationship of relationships) {
    graphContainer.mount(relationship.element)
}

for (const person of people) {
    graphContainer.mount(person.element)
}