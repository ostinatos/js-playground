import { depthFirstSearch } from "./search/depth-first-search";
// import { breathFirstSearch } from "./search/breath-first-search";
// import { breathFirstSearch } from "./search/breath-first-search-2";
import { breathFirstSearch } from "./search/breath-first-search-3";
let vnodeTree = {
  type: "parent",
  key: "1",
  elements: [
    {
      type: "comp2",
      key: "2",
      elements: [
        {
          type: "comp5",
          key: "3",
          elements: [
            {
              type: "comp5",
              key: "4",
            },
            {
              type: "comp5",
              key: "5",
            },
          ],
        },
        {
          type: "comp5",
          key: "6",
        },
      ],
    },
    {
      type: "comp3",
      key: "7",
      elements: [],
    },
    {
      type: "comp4",
      key: "8",
      elements: [
        {
          type: "comp5",
          key: "9",
          elements: [
            {
              type: "comp5",
              key: "10",
            },
            {
              type: "comp5",
              key: "11",
            },
          ],
        },
        {
          type: "comp5",
          key: "12",
        },
      ],
    },
  ],
};

/* searchTree entry function */
function searchTree(tree, walk, matcher) {
  if (tree) {
    walk(tree, matcher);
  }
}

/* walk interface */
function walkNode(node, matcher) {
  breathFirstSearch(node, matcher);
}

searchTree(vnodeTree, walkNode, (n) => {
  console.log(`node key: ${n.key}, node type: ${n.type}`);
  if (n.key === "10") {
    console.log("target key found.");
    return true;
  }
  return false;
});
