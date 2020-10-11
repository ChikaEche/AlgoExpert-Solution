class node {
    name: any;
    children: any[];
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          let queue = [];
          array.push(this.name);
      for(let child of this.children) {
              queue.push(child);
          }
          while(queue.length > 0) {
              let arr = queue.shift();
              array.push(arr.name);
              for(let i =arr['children'].length - 1; i>=0; i-- ) {
                  queue.unshift(arr['children'][i]);
              }
              // for(let node of arr['children']) {
              // 	queue.unshift(node);
              // }
          }
          return array;
    }
  }