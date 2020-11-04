function minNumberOfJumps(array) {
    let currentIdx = 0;
      let jump = 0;
  
      let step = 0;
      while(currentIdx < array.length - 1) {
          jump = array[currentIdx];
          let jumpTo = currentIdx;
          const currentElement = array[currentIdx];
          if((currentElement + currentIdx) < array.length - 1) {
              for(let i = 1; i <= currentElement; i++) {
                  if((array[i+currentIdx] + i + currentIdx) >= jump) {
                      jump = (array[i+currentIdx] + i + currentIdx)
                      jumpTo = i+currentIdx
                  }
              }
          }
          else {
              return ++step;
          }
          currentIdx = jumpTo;
          ++step
      }
      return step;