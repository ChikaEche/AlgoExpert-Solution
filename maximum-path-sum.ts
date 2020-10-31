function maxPathSum(tree) {
    let maxPath = getMaxPath(tree)
    return maxPath[1];
  }
  
  function getMaxPath(tree) {
    if(!tree) return [0, -Infinity];
  
    let [leftmaxPathSumBranch, leftmaxPathSumOverall] = getMaxPath(tree.left);
    let [rightMaxPathSumBranch, rightMaxPathSumOverall] = getMaxPath(tree.right);
  
    const value = tree.value;
      let branchSum = Math.max((value + leftmaxPathSumBranch), (value + rightMaxPathSumBranch), value)
     let overAllSum = Math.max(branchSum, (value + leftmaxPathSumBranch + rightMaxPathSumBranch), 
                                                           leftmaxPathSumOverall, rightMaxPathSumOverall);
  
    
    return [branchSum, overAllSum];
  }