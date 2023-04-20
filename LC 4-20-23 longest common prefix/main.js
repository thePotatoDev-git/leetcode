// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// **Solution**

var longestCommonPrefix = function(strs) {
    // Make an empty variable 'prefix'
    // Make a for loop
    // If a letter does not match the current letter of strs[0], return prefix
    // If all [j] letter matches with strs[0][i], then add the current letter to prefix

    let prefix = '';
        
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i];
    }

    return prefix;
};