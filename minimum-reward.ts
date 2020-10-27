function minRewards(scores) {
    let rewardMap = {};
      let sum = 0;
      for(let i = 0; i < scores.length; i++) {
          rewardMap[scores[i]] = {score: scores[i], reward: 1}
      }
      
      for(let i = 0; i < scores.length - 1; i++) {
          let currentStudent = rewardMap[scores[i]];
          let nextStudent = rewardMap[scores[i+1]];
          if((scores[i] > scores[i+1]) && (currentStudent.reward <= nextStudent.reward)) {
        
              currentStudent.reward += (nextStudent.reward - currentStudent.reward) + 1;
        console.log(currentStudent)
              rewardMap[scores[i]].reward = currentStudent.reward
          }
          else if((scores[i] < scores[i+1]) && (currentStudent.reward >= nextStudent.reward)) {
              nextStudent.reward += (currentStudent.reward - nextStudent.reward) + 1;
              rewardMap[scores[i+1]].reward = nextStudent.reward
          }
      }
      
          for(let i = scores.length - 1; i > 0; i--) {
          let currentStudent = rewardMap[scores[i]];
          let nextStudent = rewardMap[scores[i-1]];
          if((scores[i] > scores[i-1]) && (currentStudent.reward <= nextStudent.reward)) {
              currentStudent.reward += (nextStudent.reward - currentStudent.reward) + 1;
              rewardMap[scores[i]].reward = currentStudent.reward
          }
          else if((scores[i] < scores[i-1]) && (currentStudent.reward >= nextStudent.reward)) {
              nextStudent.reward += (currentStudent.reward - nextStudent.reward) + 1;
              rewardMap[scores[i-1]].reward = nextStudent.reward
          }
      }
      
      Object.values(rewardMap).forEach(x => {
          sum += x['reward']
      })
      return sum;
  }