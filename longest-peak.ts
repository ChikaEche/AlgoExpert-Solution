function longestPeak(numbers) {
    let peaks = [0];
    let count = 0;
    let index = 0
    let reached = false
    
    for (let i = 1; i < numbers.length; i++) {
      count = 0;
      if(numbers[i-1] < numbers[i]) {
        ++count;
        for (let k = i+1; k < numbers.length; k++) {
                if(numbers[k+1] && (numbers[k] === numbers[k-1])) {
              i = k;
              break;
          }
          ++count;
          if(numbers[k-1] > numbers[k]) {
                    if(numbers[k+1] && (numbers[k] === numbers[k+1])) {
              i = k;
              peaks.push(count+1);
              reached = true;
              break;
            }
                     if((!numbers[k+1])) {
              i = k;
              peaks.push(count+1);
              reached = true;
            }
            if(numbers[k+1] && (numbers[k] < numbers[k+1])) {
              i = k;
              peaks.push(count+1);
              reached = true;
              break;
            }
          }
        }
      }
    }
      return Math.max(...peaks);
    }