// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

 

// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.

// **Solution**

var differenceOfSum = function(nums) {
    // Make an variable with an empty array
    // Map nums and turn each value into a string and split it then turn it back to numbers
    // Sum nums and the new variable and find the difference
  
    const digits = [];
  
    let numsMap = nums.map(num => num.toString().split(''));
    numsMap.forEach(num => digits.push(...num))
  
    const digitsNum = digits.map(digit => Number(digit))
  
    return nums.reduce((total, num) => total += num) - digitsNum.reduce((total, num) => total+= num)
};

var differenceOfSumRefactor = function(nums) {
    
    const digits = nums.join('').split('').map(num => Number(num));

    return nums.reduce((total, num) => total += num) - digits.reduce((total, num) => total += num);
};