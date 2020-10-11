function spiralTraverse(array) {
    let spiralArray = []
    let startingRow = 0;
    let endingRow = array.length - 1;
    let startingColumn = 0;
    let endingColumn = array[0].length - 1;
    
  
      while (startingRow <= endingRow && startingColumn <=endingColumn) {
        console.log(startingColumn, endingColumn)
        for(let j = startingColumn; j <= endingColumn; j++) {
          spiralArray.push(array[startingRow][j])
        }
          for(let k = startingRow + 1; k <= endingRow; k++) {
            spiralArray.push(array[k][endingColumn])
          }
          for(let l = endingColumn - 1; l >= startingColumn; l--) {
            if(startingRow === endingRow) break;
            spiralArray.push(array[endingRow][l])
          }
          for(let m = endingRow - 1; m > startingRow; m--) {
            if(startingColumn === endingColumn) break;
            spiralArray.push(array[m][startingRow])
          }
        ++startingRow;
        ++startingColumn;
        --endingColumn;
        --endingRow;
      }
      return spiralArray
  }