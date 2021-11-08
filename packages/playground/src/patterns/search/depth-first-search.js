/* walk impl */
/* depth first walk */
export function depthFirstSearch(node, matcher) {
    if (!node) {
        return false;
    }
    if (matcher(node)) {
        return true;
    }
    if (node.elements) {
        for (let i = 0; i < node.elements.length; i++) {
            if (depthFirstSearch(node.elements[i], matcher)) {
                return true;
            }
        }
    }
}
