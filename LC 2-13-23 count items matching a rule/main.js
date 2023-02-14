// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

 

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
// Example 2:

// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

// **Solution**

var countMatches = function(items, ruleKey, ruleValue) {
    // Make a variable ruleKeys with value of ['type', 'color', 'name']
    // Make a variable keyIndex the index of ruleKey in ruleKeys
    // Make a count variable with the value of 0
    // Loop through items. If the keyIndex of items[i] matches ruleValue, then add 1 to count
    // Return count

    const ruleKeys = ['type', 'color', 'name'];
    const keyIndex = ruleKeys.indexOf(ruleKey);
    let count = 0;
    
    for (let i = 0; i < items.length; i++) {
        if (items[i][keyIndex] === ruleValue) {
            count++
        }
    }

    return count;
};