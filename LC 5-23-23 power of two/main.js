// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1

// **Solution**

var isPowerOfTwo = function(n) {
    // Make a while loop, while result < n
    // If result === n, return true
    // If loop ends and result !== n, return false

    let result = 0;
    let i = 0;

    if (n <= 0) {
      return false;
    }

    while (result < n) {
      result = 2**i;

      if (result === n) {
        return true;
      } else if (result > n) {
        return false;
      }

      i++;
    }
};