function topologicalSort(jobs, deps) {
    let depsMap = {}
    let visited = {}
    let queue = [];
      let parent = []
    let topoSort = [];
    for(let i = 0; i < deps.length; i++) {
      if(depsMap[deps[i][0]] !== undefined) {
        depsMap[deps[i][0]] = [...depsMap[deps[i][0]], deps[i][1]]
      }
      else {
        depsMap[deps[i][0]] = [deps[i][1]]
      }
    }
  
    for(let i = 0; i < jobs.length; i++) {
      if(visited[jobs[i]] === undefined) {
        queue.unshift(jobs[i])
        if(depsMap[jobs[i]] !== undefined) { 
                  parent = []
                  parent.push(jobs[i])
          for(let k = 0; k < depsMap[jobs[i]].length; k++) {
            if(visited[depsMap[jobs[i]][k]] === undefined) {
              queue.unshift(depsMap[jobs[i]][k]);
              //visited[depsMap[jobs[i]][k]] = true;
            }
          }
                  delete depsMap[jobs[i]]
          while(queue.length > 0) {
            const job = queue.shift();
            if(visited[job] === undefined) {
              if(depsMap[job] !== undefined) {
                              parent.push(job)
                queue.unshift(job);
                for(let j = 0; j < depsMap[job].length; j++) {
                  if(visited[depsMap[job][j]] === undefined) {
                                      if(parent.indexOf(depsMap[job][j]) > -1) return []
                    queue.unshift(depsMap[job][j]);
                  }
                }
                delete depsMap[job];
              }
              else {
                visited[job] = true;
                topoSort.unshift(job);
              }
            }
                      else {
                          //return [];
                      }
          }
        }
        else {
                  const currentJob = queue.shift();
                  visited[currentJob] = true;
          topoSort.unshift(currentJob);
        }
      }
    }
    return topoSort
  }