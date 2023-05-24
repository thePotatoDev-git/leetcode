// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// **Solution**

var searchInsert = function(nums, target) {
    // Find the indexOf target
    // If it is >= 0, return the index
    // If it is < 0, loop through nums
    // If the target is less than nums[0], return 0
    // If the target is greater than nums[i] and less than nums[i+1], return i+1
    
    if (nums.indexOf(target) >= 0) {
      return nums.indexOf(target);
    } else if (target <= nums[0]) {
      return 0;
    }

    for (let i = 0; i < nums.length; i++) {
      if (target > nums[nums.length - 1]) {
        return nums.length;
      } else if (target > nums[i] && target <= nums[i+1]) {
        return i + 1;
        }
    }
};