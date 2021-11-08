import { TreeNode } from './treenode';

function serialize(root) {
    if (!root) {
        return '[]';
    }
    const pendingNodes = [root];
    const resultValues = [];
    let current = root;
    while (pendingNodes.length > 0) {
        current = pendingNodes.shift();
        if (!current) {
            resultValues.push(null);
            continue;
        }
        pendingNodes.push(current.left);
        pendingNodes.push(current.right);

        resultValues.push(current.val);
    }

    //   generate result string
    let ret = '';
    for (let i = 0; i < resultValues.length; i++) {
        if (i === 0) {
            ret += '[';
        }
        if (i === resultValues.length - 1) {
            ret += `${resultValues[i]}]`;
        } else {
            ret += `${resultValues[i]},`;
        }
    }
    return ret;
}

function deserialize(str) {}

export { serialize, deserialize };
