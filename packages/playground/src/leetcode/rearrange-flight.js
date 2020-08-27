/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // 以起点为key，ticket index 数组为value的一个对象
  const flightByStartPoint = {};
  const availableRoutes = [];

  for (let i = 0; i < tickets.length; i++) {
    // 按每张票的起点，记录相应的票的index
    flightByStartPoint[tickets[i][0]] = flightByStartPoint[tickets[i][0]] || [];
    flightByStartPoint[tickets[i][0]].push(i);
  }

  const compareRoute = (route1, route2) => {
    let returnValue = 0;
    // < 0, less than
    // =0, equal
    // > 0, larger than
    const comparePort = (port1, port2) => {
      let ret = 0;
      for (let i = 0; i < 3; i++) {
        let ret = port1.charCodeAt(i) - port2.charCodeAt(i);
        if (ret !== 0) {
          return ret;
        }
      }
      return ret;
    };
    for (let i = 0; i < route1.length; i++) {
      let returnValue = comparePort(route1[i], route2[i]);
      if (returnValue !== 0) {
        break;
      }
    }
    if (returnValue <= 0) {
      return route1;
    } else {
      return route2;
    }
  };

  //@param {String} start, start port
  //@param {Array} usedTickets, used ticket index
  //@return {Array} available route (including start port), empty if no available route
  const findAvailableRoute = (start, usedTickets) => {
    // 以start为起点的ticket index 集合
    let viableTickets = flightByStartPoint[start];
    // 可行的线路集合，二维数组
    let candidateRoute = [];
    if (viableTickets && viableTickets.length > 0) {
      for (viableTicket of viableTickets) {
        if (
          usedTickets.findIndex(
            (ticketIndex) => ticketIndex === viableTicket
          ) === -1
        ) {
          // viable ticket 没在 usedTickets 中，证明是可行的，
          let rt = null;
          if (usedTickets.length + 1 === tickets.length) {
            // 当前已经是最后一个ticket，不需要再递归查找
            rt = [tickets[viableTicket][1]];
          } else {
            //继续递归查找
            rt = findAvailableRoute(
              // 以可行ticket的终点为起点
              tickets[viableTicket][1],
              // 这里用concat 重新创造一个使用过的ticket数组
              [viableTicket].concat(usedTickets)
            );
          }
          if (rt.length > 0) {
            // 找到可行路径，结合start 一起返回
            if (candidateRoute.length === 0) {
              // 之前还没可行路径，直接赋值
              candidateRoute = rt;
            } else {
              // 之前已经有，需要和之前的路径比较
              candidateRoute = compareRoute(candidateRoute, rt);
            }
          }
        }
      } //end for
    }

    if (candidateRoute.length > 0) {
      return [start].concat(candidateRoute);
    } else {
      return [];
    }
  };

  // 循环每个以JFK开头的票，查找可能的路径
  findAvailableRoute("JFK", []);
};

findItinerary([
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
]);
