// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1

// **Solution**

var addDigits = function(num) {
    // If num is < 10, return num
    // Else split num into individual digits
    // Find the sum of the digits
    // If num is still > 9, loop again
    // If num is < 10, return num

    if (num < 10) {
      return num;
    } 

    while (num > 9) {
      num = num.toString().split('');
      num = num.map(num => Number(num)).reduce((total, num) => total += num);
    }

    return num;
};