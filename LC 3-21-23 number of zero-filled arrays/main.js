// Given an integer array nums, return the number of subarrays filled with 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation: 
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
// Example 2:

// Input: nums = [0,0,0,2,0,0]
// Output: 9
// Explanation:
// There are 5 occurrences of [0] as a subarray.
// There are 3 occurrences of [0,0] as a subarray.
// There is 1 occurrence of [0,0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.
// Example 3:

// Input: nums = [2,10,2019]
// Output: 0
// Explanation: There is no subarray filled with 0. Therefore, we return 0.

// **Solution**

// *Solution is not yet optimized

var zeroFilledSubarray = function(nums) {
    // If nums contains no zeros, return 0
    // Make a variable named subarrays = 0
    // Loop through nums using forEach
    // If an element is 0, add +1 to subarrays
    // If the element index + 1 is 0, add +1 to subarrays and continue adding +1 to subarrays if the next element is 0
    // If the next element is not 0, break the loop

    if (!nums.includes(0)) {
      return 0;
    }

    let subarrays = 0;

    nums.forEach((num, index) => {
      for (let i = 0; i < nums.length; i++) {
        if (nums[index + i] === 0) {
          subarrays++
        } else {
          break;
        }
      }
    })

    return subarrays;
};