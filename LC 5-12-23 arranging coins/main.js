// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:

// [*]
// [*][*]
// [*][*][ ]

// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:

// [*]
// [*][*]
// [*][*][*]
// [*][*][ ][ ]

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
 

// Constraints:

// 1 <= n <= 231 - 1

// **Solution**

var arrangeCoins = function(n) {
    // Make an empty variable rows
    // Make a while loop, while n > 0
    // For each loop, subtract i from n
    // If n >= 0, add 1 to rows
    // Add 1 to i;
    // Return rows
  
    let rows = 0;
    let i = 1;
  
    while (n > 0) {
        n = n - i;
        if (n >= 0) {
          rows++;
        }
        i++;
    }
  
    return rows;
};