function diskStacking(disks) {
    disks.sort((a,b) => a[2] - b[2]);
    let stack = new Array(disks.length);
    let newStack = [];
    let heights = disks.map(x => x[2])
    let highestHeightIdx = 0;
  
    for (let i = 1; i < disks.length; i++) {
      for(let k = 0; k < i; k++) {
        if(disks[i][0] > disks[k][0] && disks[i][1] > disks[k][1] && disks[i][2] > disks[k][2] ) {
          if(heights[i] <= (heights[k] + disks[i][2])) {
            heights[i] = heights[k] + disks[i][2]
            stack[i] = k;
          }
        }
      }
      if(heights[i] > heights[highestHeightIdx]) highestHeightIdx = i;
    }
      //console.log(disks, stack, highestHeightIdx)
      return buildSequence(disks, stack, highestHeightIdx)
  }
  
      function buildSequence(array, sequences, currentIdx) {
          console.log(sequences)
          const sequence = [];
          while(true) {
              sequence.unshift(array[currentIdx]);
              currentIdx = sequences[currentIdx]
              if(currentIdx === undefined || currentIdx === null || currentIdx === 0) {
                  if( currentIdx === 0) {
                      sequence.unshift(array[currentIdx])
                  }
                  //sequence.unshift(array[currentIdx]);
                  return sequence
              }
          }
          return sequence;
      }
  