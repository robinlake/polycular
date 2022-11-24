const createSvgElement = (tagName: string, params: Record<string, string> = {}) => {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tagName) as SVGElement;
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

const circle = createSvgElement( 'circle', {
    'cx': '10',
    'cy': '10',
    'r': '10',
})

svg.appendChild(circle);

export {svg};
