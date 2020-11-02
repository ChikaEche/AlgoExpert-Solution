function maxSumIncreasingSubsequence(array) {
    let sumArray = array.map(x => x);
    let sequence = Array(array.length).fill(null);
    let maxSum = -Infinity
    let maxIdx = 0
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j <= i; j++) {
        if(array[i] > array[j] && (array[i] + sumArray[j]) > sumArray[i]) {
          sumArray[i] = array[i] + sumArray[j]
          sequence[i] = j;
        }
      }
      if(sumArray[i] > maxSum) {
        maxIdx = i;
        maxSum = sumArray[i]
      }
    }
    return [maxSum, getSequence(array, maxIdx, sequence)]
  }
  
  function getSequence(array, startIdx, sequences) {
    let sequence = []
    while(startIdx !== null) {
      sequence.unshift(array[startIdx]);
      startIdx = sequences[startIdx]
    }
    return sequence;
  }