// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// **Solution**

var isAnagram = function(s, t) {
    // Split s and t into individual letters
    // Sort s and t alphabetically
    // Join s and t back into strings
    // Check if s === t

    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    return s === t;
};