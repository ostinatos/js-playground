/** 
given the head of a linked list
@return {Node} middle node of the linked list.

if the length of the linked list is even, return the second middle node.
eg:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4

if the length of the linked list is odd, return the middle node
eg:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 3

time complexity: O(N)
space complexity: O(1)

*/
function findMiddleNode(head) {
    /* find middle node using fast and slow pointer  */
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        // fast goes 2x speed
        fast = fast.next.next;
        // slow goes 1x speed
        slow = slow.next;
    }
    return slow;
}

export { findMiddleNode };
