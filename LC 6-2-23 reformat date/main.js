// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.
 

// Example 1:

// Input: date = "20th Oct 2052"
// Output: "2052-10-20"
// Example 2:

// Input: date = "6th Jun 1933"
// Output: "1933-06-06"
// Example 3:

// Input: date = "26th May 1960"
// Output: "1960-05-26"

// **Solution**

var reformatDate = function(date) {
    // Make a month variable holding months
    // Split date by spaces
    // If day length is 3, slice '0' + day.slice(0, 1). Else day.slice(0, 2)
    // If indexOf(month) is less than 10, add '0' to indexOf(month). Else return indexOf(month)
    // Return new formatted date

    const months = ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let [day, month, year] = date.split(' ');

    day.length === 3 ? day = '0' + day.slice(0, 1) : day = day.slice(0, 2);

    months.indexOf(month) < 10 ? month = '0' + months.indexOf(month) : month = months.indexOf(month);


    return `${year}-${month}-${day}`
};