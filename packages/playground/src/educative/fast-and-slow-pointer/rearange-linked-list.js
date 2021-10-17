class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

function findMiddleNode(head) {
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseList(head) {
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

const reorder = function (head) {
  /* 
    1. find middle node
    2. reverse the 2nd half list
    3. concatenate the 1st half list and the 2nd half list alternatively to form the final list
    */

  let pHead = head;
  let middle = findMiddleNode(head);

  let reversedListHead = reverseList(middle);

  let pCurrent = pHead;
  let pReverseCurrent = reversedListHead;
  /* iterate 1st half of the list will finally reach the middle node */
  while (pCurrent.next !== middle) {
    let pNext = pCurrent.next;
    pCurrent.next = pReverseCurrent;
    let pReverseNext = pReverseCurrent.next;
    pReverseCurrent.next = pNext;
    pCurrent = pNext;
    pReverseCurrent = pReverseNext;
  }

  return pHead;
};

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();
