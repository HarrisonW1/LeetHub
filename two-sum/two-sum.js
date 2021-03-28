/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numVisited = {};
    const res = [];

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;

      if (numVisited[complement] != null) {
        res.push(i);
        res.push(numVisited[complement])
      }

      numVisited[num] = i
    }

    return res;
  };