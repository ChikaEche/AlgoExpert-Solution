class LinkedList {
    value: string;
    next: {value: string, next: LinkedList};
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
      let temp = {...head.next};
    let node = head;
      let lists = []
      let count = 0;
      lists.push(head)
      while(node.next !== null) {
          node = node.next;
          lists.push(node);
      }
      if(k === 0) {
          node = lists[lists.length - 2]
          node.next = null
      }
      else if(k === (lists.length)) {
          head.value = lists[1].value
          head.next = lists[1].next
      }
      else {
      count = (lists.length - 1) - k
      node = lists[count];
      node.next = lists[count+1].next
      }
      
      //node.next = null;
  }