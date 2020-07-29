/**  
@param {Array|Object} nodes , root node is object, otherwise is array
@return {Boolean} found or not 
*/
export function breathFirstSearch(nodes, matcher) {
  if (Array.isArray(nodes)) {
    let nextLevelNodes = [];
    // input is an array
    for (let i = 0; i < nodes.length; i++) {
      if (matcher(nodes[i])) {
        return true;
      } else {
        if (nodes[i].elements) {
          nextLevelNodes.push(...nodes[i].elements);
        }
      }
    }
    return breathFirstSearch(nextLevelNodes, matcher);
  } else {
    // input is an object node, this is the root node case
    return breathFirstSearch([nodes], matcher);
  }
}
