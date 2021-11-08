/**  
 * BFS using recursion
@param {Array|Object} nodes , root node is object, otherwise is array
@return {Boolean} found or not 
*/
export function breathFirstSearch(node, matcher) {
    // FIFO queue
    const toMatchQueue = [];
    //   push the root node to queue to start
    toMatchQueue.push(node);

    //   helper function to perform BFS, input is the queue to process
    function bfsHelper(queue) {
        //   eject the first element of the queue
        let target = queue.shift();
        if (target) {
            // queue is not empty
            if (matcher(target)) {
                return true;
            } else {
                //   push the child elements of current node to the end of the queue.
                if (target.elements) {
                    queue.push(...target.elements);
                }
            }
            //   not found. keep on search the queue
            return bfsHelper(queue);
        }
        return false;
    }

    //   start from the queue that contains the root node
    return bfsHelper(toMatchQueue);
}
