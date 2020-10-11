function smallestDifference(arrayOne, arrayTwo) {
    let smallestPair = []
    let difference = Infinity;
    arrayOne.map(x => arrayTwo.map(y => {
      if(Math.abs(x - y) < difference) {
        difference = Math.abs(x - y);
        smallestPair = [x,y]
      }
    }))
    return smallestPair;
  }