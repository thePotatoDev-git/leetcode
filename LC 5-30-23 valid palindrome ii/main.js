// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

// **Solution** (Unoptimized)

var validPalindrome = function(s) {
    // If s === s reversed, return true
    // Loop through s removing 1 char a time and check if it is the same reversed
    // If yes, return true
    // At the end of the loop doesn't contain a palindrome after removing 1 char, return false

    if (s.split('').reverse().join('') === s) {
      return true;
    }

    for (let i = 0; i < s.length; i++) {
      let str = s.split('');
      str.splice(i, 1);
      
      if (str.join('') === str.reverse().join('')) {
        return true;
      }
    }

    return false;
};