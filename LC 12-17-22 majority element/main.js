// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// **Solution**

var majorityElement = function(nums) {
    // Make a hashCount variable with an empty object
    // Make a majority variable with 0 value
    // Make an element variable that is empty
    // Count the occurrences for each element
    // Loop through the object. If the value is bigger than 'majority', replace it with that number, and change 'element' to that number

    const hashCount = {};
    let majority = 0;
    let element = '';

    for (num of nums) {
        hashCount[num] = hashCount[num] ? hashCount[num] + 1 : 1;
    }

    for (const el in hashCount) {
        if (hashCount[el] > majority) {
            majority = hashCount[el];
            element = el;
        }
    }

    return element;
};