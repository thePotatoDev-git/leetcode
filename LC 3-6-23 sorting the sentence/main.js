// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

// **Solution**

var sortSentence = function(s) {
    // Make a variable sortedSentence with an empty array
    // Split s into individual words
    // Loop through the array
    // If the element includes the index num, push into sortedSentence
    // Return the sorted sentence

    const sortedSentence = [];
    s = s.split(' ');

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j].includes(i)) {
                sortedSentence.push(s[j].slice(0, s[j].length - 1))
            }
        }
    }

    return sortedSentence.join(' ');
};