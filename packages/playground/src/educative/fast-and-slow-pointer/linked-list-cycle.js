/* 
https://leetcode-cn.com/problems/linked-list-cycle/
https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const has_cycle = function (head) {
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    // fast pointer run 2x speed (2 step at a time)
    fast = fast.next.next;
    // slow pointer run 1x speed (1 step at a time)
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  /* fast is empty, or fast.next is empty, means list has ended. */
  return false;
};

function case1() {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  // head.next.next.next.next.next.next = null;

  head.next.next.next.next.next.next = head.next.next;

  // head.next.next.next.next.next.next = head.next.next.next;
  console.log(has_cycle(head));
}

function case2() {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = null;

  console.log(has_cycle(head));
}

case1();
case2();
