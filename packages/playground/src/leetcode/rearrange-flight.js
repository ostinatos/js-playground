import { testcase } from "./rearrange-flight-testcase";

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    //   用最简单的方法加入队列
    // 顺序找到第一个比输入item大的元素k，加入到k的前面
    let targetIndex = -1;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] > item) {
        targetIndex = i;
        break;
      }
    }
    if (targetIndex === -1) {
      // 没找到比item大的元素，把item加入末尾
      this.queue.push(item);
    } else {
      this.queue.splice(targetIndex, 0, item);
    }
  };
  // 从头部弹出item
  dequeue() {
    return this.queue.shift();
  };

  size() {
    return this.queue.length;
  }
}

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // 遍历所有机票，创建一个以起点为key，value为按字母顺序排列的终点队列
  const starterMap = {};
  for (let ticket of tickets) {
    // 之前当前ticket的起点还没在map中出现过
    if (!starterMap[ticket[0]]) {
      //create new priority queue to store destination
      starterMap[ticket[0]] = new PriorityQueue();
    }
    // enqueue current ticket destination
    starterMap[ticket[0]].enqueue(ticket[1]);
  }

  //   路径
  const route = [];

  const dfs = function (startPort) {
    //   当输入节点startPort仍然有可行的路径时，则先递归探索可行路径
    while (starterMap[startPort] && starterMap[startPort].size() > 0) {
      // 按优先级获取优先的目的地节点
      const tmp = starterMap[startPort].dequeue();
      dfs(tmp);
    }
    // 当没有可行的路径，意味着进入了胡同，或者是可走的路都走过了，此时将当前节点加入路线中
    route.push(startPort);
  };

  dfs("JFK");

  return route.reverse();
};

console.log(findItinerary(testcase[1]));
