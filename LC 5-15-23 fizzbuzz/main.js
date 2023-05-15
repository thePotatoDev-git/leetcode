// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104

// **Solution**

var fizzBuzz = function(n) {
    // Make an empty variable answers
    // Make a for loop
    // If i is divisible by 3 & 5, push FizzBuzz to answers
    // If i is divisible by 3, push Fizz to answers
    // If i is divisible by 5, push Buzz to answers

    const answers = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answers.push('FizzBuzz');
        } else if (i % 3 === 0) {
            answers.push('Fizz');
        } else if (i % 5 === 0) {
            answers.push('Buzz');
        } else {
            answers.push(`${i}`);
        }
    }

    return answers;
};