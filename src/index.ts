import {createGraphContainer, createNode, createEdge} from './svg.js';
const graphContainer = createGraphContainer();

const randInRange = (x: number) => {
    return Math.floor(Math.random() * x);
}
const randIn100 = randInRange.bind(null, 600);

const randPlacement = (): [number, number] => [randIn100(), randIn100()]


const people = [
  createNode("robin", 10, 10),
  createNode("max", 50, 50),
  createNode("sigi", ...randPlacement()),
  createNode("bo", ...randPlacement()),
  createNode("mel", ...randPlacement()),
  createNode("katt", ...randPlacement()),
]



const relationships = [
    createEdge(people[0], people[1], "sexy as hell") // mobinrax
]
for (let x = randInRange(16); x > 0; x--) {
    relationships.push(createEdge(people[randInRange(people.length)], people[randInRange(people.length)]))
}
document.body.appendChild(graphContainer.svg);

for (const relationship of relationships) {
    graphContainer.mount(relationship.element)
}

for (const person of people) {
    graphContainer.mount(person.element)
}