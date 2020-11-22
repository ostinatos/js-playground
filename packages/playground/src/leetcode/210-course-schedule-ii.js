/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // adj list: key is course id, value is adj nodes list of the course
  const adjLists = new Array(numCourses).fill(0).map(() => new Array());

  // in-degree map: key is course id, value is in-degree of course
  const inDegreeMap = new Array(numCourses).fill(0);

  // walk through prerequisites, to init adjLists and inDegreeMap
  prerequisites.forEach((edges) => {
    // 先要学习的课程
    const pre = edges[1];
    // 后要学习的课程
    const post = edges[0];
    // push to adj list
    adjLists[pre].push(post);

    // 增加入度
    inDegreeMap[post]++;
  });

  // loop in-degree map to find the source course
  const sourceList = [];
  inDegreeMap.forEach((inDegree, index) => {
    if (inDegree === 0) {
      sourceList.push(index);
    }
  });

  // start topo sort
  const sortedList = [];
  while (sourceList.length > 0) {
    // get source course from sourceList
    const courseId = sourceList.shift();
    // push into sorted list
    sortedList.push(courseId);

    // decrease in-degree of adj course of current course by 1
    adjLists[courseId].forEach((adjCourseId) => {
      inDegreeMap[adjCourseId]--;
      if (inDegreeMap[adjCourseId] === 0) {
        // adj course become source now, so add it to source list
        sourceList.push(adjCourseId);
      }
    });
  }

  // abnormal case: has cycle
  if (sortedList.length !== numCourses) {
    return [];
  }

  return sortedList;
};

console.log(
  findOrder(3, [
    [2, 1],
    [1, 0],
  ])
);
