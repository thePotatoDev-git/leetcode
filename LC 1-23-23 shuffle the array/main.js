// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

// **Solution**

var shuffle = function(nums, n) {
    // Make arr1 variable that takes nums 0 to n
    // Make arr2 variable that takes nums n to the end of nums
    // Make a for loop and push arr1[i] and arr2[i] to an empty array

    const arr1 = nums.slice(0, n);
    const arr2 = nums.slice(n);
    const finalArr = [];

    for (let i = 0; i < n; i++) {
        finalArr.push(arr1[i]);
        finalArr.push(arr2[i]);
    }

    return finalArr;
};