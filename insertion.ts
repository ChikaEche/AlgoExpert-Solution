let insertionSet = (arrayNum: number[]) => {
    for(let i = 1; i < arrayNum.length; i++) {
      let smallestIndex = i
      for(let m = i-1; m >= 0; m--) {
        if(arrayNum[smallestIndex] < arrayNum[m]) {
          let temp = arrayNum[smallestIndex];
          arrayNum[smallestIndex] = arrayNum[m];
          arrayNum[m] = temp;
          smallestIndex = m
        }
      }
    }
    return arrayNum
  }
  