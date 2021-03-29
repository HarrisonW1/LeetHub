/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const hash = {}
    
    for (let i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i]
        var requiredNumber = target - currentNumber
        const index2 = hash[requiredNumber]
        
        if (index2 != undefined) {
            return [index2 + 1, i + 1]
        } else {
            hash[currentNumber] = i
        }
    }
};