const palindromes = function (string) {
  string = string.toLowerCase();
  const lettersOnlyStr = string.replace(/[.,\/#!$%\^&\*;:{}=\-_" "`~()]/g,"")
  const stringArray = Array.from(lettersOnlyStr);
  const reverseStringArray= stringArray.toReversed();
  const joinReverseStrArr = reverseStringArray.join('');
  console.log(lettersOnlyStr);
  console.log(joinReverseStrArr);
  if(lettersOnlyStr == joinReverseStrArr) {
      return true; 
  } else {
      return false;
  }
  compareArrays();
};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
