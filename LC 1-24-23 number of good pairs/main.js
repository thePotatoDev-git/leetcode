// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// **Solution**

var numIdenticalPairs = function(nums) {
    // Make a 'goodPairs' variable with the value of 0
    // Make a nested for-loop comparing i and j
    // If the pair matches and i is less than j, add 1 to 'goodPairs'

    let goodPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                goodPairs++
            }
        }
    }

    return goodPairs;
};