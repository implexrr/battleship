// Map attributes object to some pre-existing DOM element
function setAttributes(element, attributes) {
  const keys = Object.keys(attributes);
  for (let keyDex = 0; keyDex < keys.length; keyDex += 1) {
    const key = keys[keyDex];
    element.setAttribute(key, attributes[key]);
  }
}

/**
 * @param {string} element Element to be synthesized
 * @param {object} attributes Attributes to be included
 * @example
 * // Example usage:
 * const el = synthesizeElement('div', { id: 'foo', class: 'bar', 'data-thing': 'data' }
 * console.log(el); Output: <div id="foo" class="bar" data-thing="data"></div>
 */
// Create DOM element with attributes defined via an "attributes" object
export default function synthesizeElement(element, attributes) {
  const el = document.createElement(element);
  setAttributes(el, attributes);
  return el;
}
