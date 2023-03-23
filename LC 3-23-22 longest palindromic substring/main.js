// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// **Solution**

// *Solution is not optimal for long lengths of s

var longestPalindrome = function(s) {
    // Make an empty variable 'longest'
    // Make a nested for loop
    // Check a sliced substring start from (i, j) if it's a palindrome
    // If it is a palindrome and the length is longer than the current 'longest', then replace the 'longest' variable with that palindrome
    // If the current longest palindrome is longer than the remaining letters of i, stop the loop
    if (s.length <= 1) {
      return s;
    }
  
    let longest = '';
  
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length + 1; j++) {
        let current = s.slice(i, j);
        if (longest.length > s.slice(i).length) {
          break;
        }else if (current === current.split('').reverse().join('') && current.length > longest.length) {
          longest = current;
        }
      }
    }
  
    return longest;
};