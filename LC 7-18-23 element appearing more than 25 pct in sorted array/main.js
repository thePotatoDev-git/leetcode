// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 105

// **Solution**

var findSpecialInteger = function(arr) {
    // Map out occurrences of each element in arr
    // Divide each occurrence by the length of arr. If it is > 0.25, return that number 
    
    const counts = {};
  
    for (num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  
    for (num in counts) {
      if (counts[num] / arr.length > 0.25) {
        return Number(num);
      }
    }
};