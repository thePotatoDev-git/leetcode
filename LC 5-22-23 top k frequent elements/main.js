// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// **Solution**

var topKFrequent = function(nums, k) {
    // Make an empty variable 'result'
    // Map out nums to find the number of occurrences of each number
    // Sort by the most occurrences
    // Push the top k numbers into result
    
    const result = [];
    let sorted = [];
    const counts = {};

    for (const num of nums) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (const el in counts) {
      sorted.push([el, counts[el]]);
    }

    sorted = sorted.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
      result.push(Number(sorted[i][0]));
    }

    return result;
};