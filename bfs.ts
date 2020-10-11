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
  
    breadthFirstSearch(array) {
          let queue = []
          array.push(this.name)
          queue.push(this.children)
          while(queue.length > 0) {
              let child = queue.shift() 
              for (let i = 0; i < child.length; i++) {
                  queue.push(child[i].children)
                  array.push(child[i].name)
              }
          }
      return array
    }
  }