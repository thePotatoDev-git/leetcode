// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

 

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

// **Solution**

var removeDuplicates = function(s) {
    // Split s
    // Loop through s
    // If s[i] === s[i+1], splice s[i, 2]
    // Then make i = i - 2
    // Return joined s

    sSplit = s.split('');

    for (let i = 0; i < sSplit.length; i++) {
      if ( (sSplit[i] === sSplit[i+1]) && (i > 0) ) {
        sSplit.splice(i, 2);
        i = i - 2;
      } else if ( (sSplit[i] === sSplit[i+1]) && (i === 0) ) {
        sSplit.splice(i, 2);
        i = i - 1;
      }
    }

    return sSplit.join('');
};