function largestRange(array) {
    let map = {}
    let highest = []
    let length = 0
    for(let i = 0; i < array.length; i++) {
      map[array[i]] = {value: [], visited: false}
    }
    console.log(map)
    for(let i = 0; i < array.length; i++) {
      if(!map[array[i]].visited) {
        map[array[i]] = {value: [array[i]], visited: true};
        let left = 1;
        let right = 1;
        while(map[array[i]-left] !== undefined && !map[array[i]-left].visited) {
          map[array[i]-left] = map[array[i]]; 
          map[array[i]-left].value.push(array[i]-left);
          ++left;
        }
        while(map[array[i]+right] !== undefined && !map[array[i]+right].visited) {
          map[array[i] + right] = map[array[i]];
          map[array[i]+right].value.push(array[i]+right)
          ++right;
        }
      }
    }
    Object.values(map).map(ele => {
      if(ele['value'].length >= length) {
        highest = ele['value']
        length = ele['value'].length
      }
    })
    return [Math.min(...highest), Math.max(...highest)]
  }