class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMiddleNode(head) {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        // fast goes 2x speed
        fast = fast.next.next;
        // slow goes 1x speed
        slow = slow.next;
    }
    return slow;
}

function reverseLinkedList(head) {
    let revListHead = null;
    let p = head;
    while (p) {
        let temp = p.next;
        p.next = revListHead;
        revListHead = p;
        p = temp;
    }

    //   return the reversed list head
    return revListHead;
}

const is_palindromic_linked_list = function (head) {
    /*
    1. find the middle node
    2. reverse the second half
    3. compare to determine whether it is a palindrome linked list
    4. restore the second half 
     */
    let middle = findMiddleNode(head);

    let reverseListHead = reverseLinkedList(middle);

    let p = head;
    let q = reverseListHead;

    let falseFlag = false;
    //start compare
    while (p !== middle) {
        if (p.value !== q.value) {
            falseFlag = true;
            break;
        }
        p = p.next;
        q = q.next;
    }

    // restore the the second half
    reverseLinkedList(reverseListHead);

    return falseFlag === false;
};

head = new Node(2);
head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(2);

// console.log("middle node: ", findMiddleNode(head).value);
// console.log(reverseLinkedList(head));

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

// head.next.next.next.next.next = new Node(2);
// // console.log("middle node: ", findMiddleNode(head).value);
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
