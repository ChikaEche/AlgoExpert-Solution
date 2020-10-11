function moveElementToEnd(array, toMove) {
    let currentIndexPosition = array.length - 1;
    for(let i = 0; i < currentIndexPosition; i++) {
      if(array[i] === toMove) {
        array.splice(i,1);
        array.push(toMove)
        --currentIndexPosition;
        --i;
      }
    }
    return array;
  }