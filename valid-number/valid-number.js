/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return /^[+-]?((\d+(\.\d+)?|(\d+\.)|(\.\d+)))(e[+-]?\d+)?(E[+-]?\d+)?$/.test(s.trim());
};
