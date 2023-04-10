// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// **Solution**

var isPalindrome = function(s) {
    // Make an array with the alphabet
    // Filter out s so there are only letters
    // Lowercase s
    // Check to see if s is the same backwards as it is forwards

    const abc = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

    s = s.toLowerCase().split('').filter(letter => abc.includes(letter)).join('');

    return s === s.split('').reverse().join('');
};