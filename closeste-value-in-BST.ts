function findClosestValueInBst(tree, target) {
    let difference = []
    let node = tree
    while(node) {
      let diff = Math.abs(node.value - target)
              let data  = node.value
      difference.push({data, diff})
      if(node.value < target) {
        node = node.right;
      }
      else {
        node = node.left
      }
    }
    difference.sort((a,b) => a.diff - b.diff)
    let closestValue = difference.shift()
    return closestValue.data;
}

let specialArray = (array, multiplier) => {
  let sum = 0;
  for(const element of array) {
    if(Array.isArray(element)) {
      sum += specialArray(element,++multiplier)
    }
  }
}