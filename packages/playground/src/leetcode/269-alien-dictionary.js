/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    // edge case, words is empty or only one word is present
    if (words.length === 0) {
        return "";
    }

    // compare adjacent words in input words, to find all the directed edges,
    // and generate the in-degree map
    // define an array for storing directed edges
    const edges = [];
    // adj list map: key is char, value is adj list
    const adjLists = {};
    // in degree map: key is char, value is in degree of key
    const inDegree = {};
    // walk thru all words once to init the adj list and in degree map
    words.forEach((word) => {
        for (let i = 0; i < word.length; i++) {
            if (!adjLists[word[i]]) {
                adjLists[word[i]] = [];
            }
            if (inDegree[word[i]] === undefined) {
                inDegree[word[i]] = 0;
            }
        }
    });

    // invalid flag for invalid case
    let invalidFlag = false;
    for (let pt1 = 0, pt2 = 1; !invalidFlag && pt2 < words.length; pt1++ , pt2++) {
        // char pointer
        let charPt = 0;
        // move char pointer while
        while (
            words[pt1][charPt] &&
            words[pt2][charPt] &&
            words[pt1][charPt] === words[pt2][charPt]
        ) {
            charPt++;
        }
        // both has value, then words[pt1][charPt] comes before words[pt2][charPt]
        if (words[pt1][charPt] && words[pt2][charPt]) {
            edges.push([words[pt1][charPt], words[pt2][charPt]]);

            // add to adj lists
            adjLists[words[pt1][charPt]].push(words[pt2][charPt]);

            // update in-degree map
            inDegree[words[pt2][charPt]]++;
        } else if (words[pt1][charPt] && words[pt2][charPt] === undefined) {
            // invalid input dictionary, eg: ["ab", "a"]
            invalidFlag = true;
            break;
        }
    }

    if(invalidFlag){
        return "";
    }

    // find the source vertex
    const sourceList = [];
    Object.keys(inDegree).forEach((charKey) => {
        if (inDegree[charKey] === 0) {
            sourceList.push(charKey);
        }
    });

    // use topo sort to get the order
    const ret = [];

    while (sourceList.length > 0) {
        const next = sourceList.shift();
        ret.push(next);
        // decrease in degree
        adjLists[next].forEach((adjVertex) => {
            inDegree[adjVertex]--;
            if (inDegree[adjVertex] === 0) {
                sourceList.push(adjVertex);
            }
        });
    }
    if (ret.length === Object.keys(inDegree).length) {
        return ret.join("");
    } else {
        return "";
    }
};

console.log(alienOrder(["wnlb"]));
