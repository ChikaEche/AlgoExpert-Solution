function isMonotonic(array) {
    let increasing = [];
    let decreasing = []
    for(let i = 0; i < array.length - 1; i++) {
      increasing.push(array[i] >= array[i+1]);
      decreasing.push(array[i] <= array[i+1]);
    }
   // console.log(increasing,decreasing)
    return ((increasing.indexOf(false) === -1) || (decreasing.indexOf(false) === -1))
  }