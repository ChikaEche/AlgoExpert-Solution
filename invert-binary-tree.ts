function invertBinaryTree(tree) {
    let queue = [];
      queue.push(tree);
      while(queue.length > 0) {
          let node = queue.shift();
          if(node.left || node.right) {
              const temp = node.left;
              node.left = node.right;
              node.right = temp;
          }
          if(node.left) {
              queue.push(node.left);
          }
          if(node.right) {
              queue.push(node.right)
          }
      }
      return tree;
  }