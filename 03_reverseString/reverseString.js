const reverseString = function(text) {
  let split = text.split('');
  let reverse = split.reverse();
  let join = split.join('');
  return join;
};
reverseString("")
// Do not edit below this line
module.exports = reverseString;
