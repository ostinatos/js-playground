class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const find_middle_of_linked_list = function (head) {
    if (!head) {
        return null;
    }
    /* 总体思路：fast and slow pointer
    fast 走 2x speed，slow 走 1x speed.
    fast到达尾部时，slow 就会在list 的中间
    */
    const preNode = new Node(0, head);
    let fast = preNode;
    let slow = preNode;

    /* 由于最开始已经做过head为null的edge case判断，因此这里可以放心的对fast 走两步 */
    while (true) {
        // fast run 2x speed
        fast = fast.next;
        fast = fast.next;
        // slow run 1x speed
        slow = slow.next;
        if (fast === null) {
            return slow;
        } else if (fast.next === null) {
            return slow.next;
        }
    }
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);
