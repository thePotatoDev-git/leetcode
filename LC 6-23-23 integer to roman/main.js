// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

 

// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= num <= 3999

// **Solution**

var intToRoman = function(num) {
    // Make an empty string variable "roman"
    // Make an empty number variable "remainder"
    // Get the floor of num / 1000. Add 'M' with that number to "roman"
    // Find the remainder of num with modulus 1000
    // If the remainder is >= 900, add CM to "roman"
    // If < 900, find the floor of the remainder / 500. Add 'D' with that number to "roman"
    // Find the remainder with modulus 500
    // If the remainder is >= 400, add CD to "roman"
    // If < 400, find the floor of the remainder / 100 and add 'C' to "roman"
    // Repeat until end
    // >90 = XC
    // >40 = XL
    // 9 = IX
    // 4 = IV

    let roman = '';
    let remainder = 0;

    let floor = Math.floor(num / 1000);
    roman += 'M'.repeat(floor);
    remainder = num % 1000;
    
    if (remainder >= 900) {
      roman += 'CM';
      remainder = remainder - 900;
    } else if (remainder < 900) {
      floor = Math.floor(remainder / 500);
      roman += 'D'.repeat(floor);
      remainder = remainder % 500;
    }

    if (remainder >= 400) {
      roman += 'CD';
      remainder = remainder - 400;
    } else if (remainder < 400) {
      floor = Math.floor(remainder / 100);
      roman += 'C'.repeat(floor);
      remainder = remainder % 100;
    }

    if (remainder >= 90) {
      roman += 'XC';
      remainder = remainder - 90;
    } else if (remainder < 90) {
      floor = Math.floor(remainder / 50);
      roman += 'L'.repeat(floor);
      remainder = remainder % 50;
    }

    if (remainder >= 40) {
      roman += 'XL';
      remainder = remainder - 40;
    } else if (remainder < 40) {
      floor = Math.floor(remainder / 10);
      roman += 'X'.repeat(floor);
      remainder = remainder % 10;
    }

    if (remainder >= 9) {
      roman += 'IX';
      remainder = remainder - 9;
    } else if (remainder < 9) {
      floor = Math.floor(remainder / 5)
      roman += 'V'.repeat(floor);
      remainder = remainder % 5;
    }

    if (remainder >= 4) {
      roman += 'IV';
      remainder = remainder - 4;
    } else if (remainder < 4) {
      roman += 'I'.repeat(remainder);
    }

    return roman;

};