class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findStartingNode(head) {
  /* first determine if the list has cycle */
  /* if the list has cycle, calculate the length of cycle L */
  /* move runner B L step ahead. then move runner A and runner B simultaneously till they meet.
    H + L = L + H
    */

  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    /* fast runner runs 2x speed */
    fast = fast.next.next;
    /* slow runner runs 1x speed */
    slow = slow.next;

    if (fast === slow) {
      // mark the meeting point in cycle
      let target = slow;
      slow = slow.next;
      let lengthOfCycle = 1;
      while (target !== slow) {
        slow = slow.next;
        lengthOfCycle++;
      }

      //   reset the fast runner and slow runner
      fast = head;
      slow = head;

      for (let i = 0; i < lengthOfCycle; i++) {
        fast = fast.next;
      }

      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }

      return fast;
    }
  }
  return null;
}

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
  console.log(findStartingNode(head));
}

function case2() {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  // head.next.next.next.next.next.next = null;

  head.next.next.next.next.next.next = head.next.next.next;

  // head.next.next.next.next.next.next = head.next.next.next;
  console.log(findStartingNode(head));
}

case1();
case2();
