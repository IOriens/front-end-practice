/**
 * Created by IOriens on 2016/3/20.
 * https://segmentfault.com/a/1190000004620352
 */
// Build a binary tree
var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

// BFS
var breadthFirstSearch = function(node) {
    if(!node) {
        throw new Error('Empth Tree')
    }

    var que = []
    que.push(node)
    while(que.length !== 0) {
        node = que.shift()
        console.log(node.value)
        if(node.left) que.push(node.left)
        if(node.right) que.push(node.right)
    }
}

// Preorder
var preOrder = function(node) {
    if(node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }

}

// Inorder
var inOrder = function(node) {
    if(node) {
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}

// PostOrder
var postOrder = function(node) {
    if(node) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.value)
    }
}


// Depth First Search PreOrder UnRecur
var depthFirstSearchPreOrderUnRecur = function(node) {
    if(!node) {
        throw new Error('Empty Tree')
    }

    var stack = []
    stack.push(node)
    while(stack.length !== 0) {
        node = stack.pop()
        console.log(node.value)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
}



console.log('========BFS========')
breadthFirstSearch(tree)
console.log('========PREORDER========')
preOrder(tree)
console.log('========INORDER========')
inOrder(tree)
console.log('========POSTORDER========')
postOrder(tree)
console.log('========Depth First Search PreOrder UnRecur========')
depthFirstSearchPreOrderUnRecur(tree)
