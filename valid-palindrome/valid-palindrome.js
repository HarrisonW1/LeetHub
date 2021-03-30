/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    lowerWord = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    const reversed = lowerWord.split("").reverse().join("")

    if (reversed == lowerWord) {
        return true
    } else {
        return false
    }
};