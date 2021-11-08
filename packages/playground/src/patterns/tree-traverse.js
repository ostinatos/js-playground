let vnodeTree = {
    type: 'parent',
    key: '1',
    elements: [
        {
            type: 'comp2',
            key: '2',
            elements: [
                {
                    type: 'comp5',
                    key: '3',
                    elements: [
                        {
                            type: 'comp5',
                            key: '4',
                        },
                        {
                            type: 'comp5',
                            key: '5',
                        },
                    ],
                },
                {
                    type: 'comp5',
                    key: '6',
                },
            ],
        },
        {
            type: 'comp3',
            key: '7',
            elements: [],
        },
        {
            type: 'comp4',
            key: '8',
            elements: [
                {
                    type: 'comp5',
                    key: '9',
                    elements: [
                        {
                            type: 'comp5',
                            key: '10',
                        },
                        {
                            type: 'comp5',
                            key: '11',
                        },
                    ],
                },
                {
                    type: 'comp5',
                    key: '12',
                },
            ],
        },
    ],
};

/* traverse entry function */
function traverse(tree, walk, perform) {
    if (tree) {
        walk(tree, perform);
    }
}

/* walk interface */
function walkNode(node, perform) {
    depthFirstWalk(node, perform);
}

/* walk impl */
/* depth first walk */
function depthFirstWalk(node, perform) {
    if (!node) {
        return;
    }
    perform(node);
    if (node.elements) {
        node.elements.forEach((element) => {
            depthFirstWalk(element, perform);
        });
    }
}

traverse(vnodeTree, walkNode, (n) => {
    console.log(`node key: ${n.key}, node type: ${n.type}`);
});
