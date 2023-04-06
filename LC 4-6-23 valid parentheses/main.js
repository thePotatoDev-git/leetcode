// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// **Solution**

var isValid = function(s) {
    // Create an empty array variable 'parentheses'
    // Loop through s
    // If s[i] is a left parenthesis, push s[i] to 'parentheses'
    // If s[i] is a right parenthesis and 'parentheses' isn't empty, and the last char of 'parentheses' is the left parenthesis, then pop the last element
    // Else return false
    // If 'parentheses' length is 0, return true

    const parentheses = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            parentheses.push(s[i]);
        } else if (s[i] === ')' && parentheses.length > 0 && parentheses[parentheses.length - 1] === '(') {
            parentheses.pop();
        } else if (s[i] === ']' && parentheses.length > 0 && parentheses[parentheses.length - 1] === '[') {
            parentheses.pop();
        } else if (s[i] === '}' && parentheses.length > 0 && parentheses[parentheses.length - 1] === '{') {
            parentheses.pop();
        } else {
            return false;
        }
    } 

    return parentheses.length === 0;
};