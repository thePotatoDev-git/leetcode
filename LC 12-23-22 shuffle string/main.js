// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// **Solution**

var restoreString = function(s, indices) {
    // Make a 'shuffled' variable that is empty
    // Make a for loop
    // Find the indexOf i in indices
    // Add s[indexOf i]
    // Return shuffled

    let shuffled = '';

    for (let i = 0; i < s.length; i++) {
        shuffled += s[indices.indexOf(i)]
    }

    return shuffled;
};