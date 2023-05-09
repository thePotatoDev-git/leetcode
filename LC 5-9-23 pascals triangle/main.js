// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

// **Solution**

var generate = function(numRows) {
    // Make a variable triangle = [[1]]
    // Make a loop starting i = 1
    // Make a variable lastRow = triangle[i - 1]
    // Make a variable currentRow = [1]
    // Nest another loop j = 1
    // Add currentRow[j] = lastRow[j] + lastRow[j - 1]
    // At the end of the first loop, push 1 to currentRow then push the currentRow to triangle

    const triangle = [[1]];
    
    for (let i = 1; i < numRows; i++) {
      let lastRow = triangle[i - 1];
      let currentRow = [1];

      for (let j = 1; j < lastRow.length; j++) {
          currentRow[j] = lastRow[j] + lastRow[j - 1];
      }
      currentRow.push(1);
      triangle.push(currentRow);
    }

    return triangle;
};