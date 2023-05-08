// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

// Example 1:

// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5
 

// Constraints:

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

// **Solution**

var diagonalSum = function(mat) {
    // Make a variable 'sum' 0
    // Make a variable 'len' = mat.length - 1
    // Make a for loop that adds mat[i][i] and mat[len][i] to sum
    // If len === i, only add mat[i][i]
    // Decrease len by 1 each repetition

    let sum = 0;
    let len = mat.length - 1;

    for (let i = 0; i < mat.length; i++) {

      if (len === i) {
        sum += mat[i][i];
      } else {
        sum += mat[i][i];
        sum += mat[len][i];
      }
      len--;
    }

    return sum;
};