// There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

// On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

// Return the number of bulbs that are on after n rounds.

// Example 1:


// Input: n = 3
// Output: 1
// Explanation: At first, the three bulbs are [off, off, off].
// After the first round, the three bulbs are [on, on, on].
// After the second round, the three bulbs are [on, off, on].
// After the third round, the three bulbs are [on, off, off]. 
// So you should return 1 because there is only one bulb is on.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 1

// **Solution**

var bulbSwitch = function(n) {
    // Make a nested loop. Outer loop is rounds and inner loop is bulbs
    // Make a bulbs variable 
    // At i round 1, make an array for all bulbs to be 'on'
    // At i round 2, turn off every second bulb
    // At i round 3, toggle every third bulb
    // At any round after 3, toggle i bulb
    // If i === n, toggle the last bulb
    const bulbs = [];
    // Round 1
    for (let i = 0; i < n; i++) {
      bulbs.push('on');
    }
    function toggle(status) {
      return status === 'on' ? status = 'off' : status = 'on';
    }
    // Round 2
    if (n > 1) {
      bulbs.map((bulb, i) => {
        if (i % 2 !== 0) {
         bulbs[i] = toggle(bulbs[i]);
        }
      });
    }
    // Round 3
    if (n > 2) {
      bulbs.map((bulb, i) => {
        if ((i+1) % 3 === 0) {
          bulbs[i] = toggle(bulbs[i]);
        }
      });
    }
    // Round 4+
    for (let i = 4; i <= n; i++) {
      for (let j = 0; j < bulbs.length; j++) {
        if ((j+1) % i === 0) {
          bulbs[j] = toggle(bulbs[j]);
        }
      }
    }

    return bulbs.filter(bulb => bulb === 'on').length;
};