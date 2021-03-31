/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/\s/).filter((e) => e).reverse().join(" ")
};