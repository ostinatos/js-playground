/**  
 * BFS using loop
@param {Array|Object} nodes
@return {Boolean} found or not 
*/
export function breathFirstSearch(node, matcher) {
  // queue to be searched (FIFO)
  let pendingQueue = [];

  // push the root node to pending queue
  pendingQueue.push(node);
  //   loop while the pending queue is not empty, means there are still nodes to be examined
  while (pendingQueue.length) {
    //   dequeue the first element in pending queue
    let curNode = pendingQueue.shift();
    if (matcher(curNode)) {
      return true;
    } else {
      // if not matched, add all children nodes of current node to the pending queue
      if (curNode.elements) {
        for (let i = 0; i < curNode.elements.length; i++) {
          pendingQueue.push(curNode.elements[i]);
        }
      }
    }
  }
  return false;
}
