// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// **Solution**

 var numJewelsInStones = function(jewels, stones) {
    // Split jewels and stones into individual elements
    // Find the occurrences in stones and store them in an object
    // Find the jewels in the stoneCount object and add them together
    
    jewels = jewels.split('');
    stones = stones.split('');
    const stoneCount = {};
    let totalJewels = 0;

    
    for (const stone of stones) {
        stoneCount[stone] = stoneCount[stone] ? stoneCount[stone] + 1 : 1;
    }

    jewels.forEach(jewel => {
        stoneCount[jewel] ? totalJewels += stoneCount[jewel] : totalJewels;
    });

    return totalJewels;
};