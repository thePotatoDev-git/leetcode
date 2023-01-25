// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// **Solution**

var defangIPaddr = function(address) {
    // Split address by '.'
    // Join it with '[.]'

    return address.split('.').join('[.]');
};