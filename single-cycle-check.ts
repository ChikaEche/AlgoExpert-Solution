function hasSingleCycle(array) {
    let visited = []
    let index = 0
    while (true) {
      index = array[index] + index;
      if((index > array.length - 1)) {
        while (index > array.length - 1) {
          index -= array.length
        }
              if(visited.indexOf(index) === -1 ) {
                  
              }
        visited.push(index)
      }
      else if ((index < 0)) {
        while (index < 0) {
          index += array.length
        }
        visited.push(index)
      }
      else {
        visited.push(index)
      }
      if (visited.length > 20 || index === 0) {
        break;
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (visited.indexOf(i) === -1) {
        return false;
      }
    }
    return true;
  }