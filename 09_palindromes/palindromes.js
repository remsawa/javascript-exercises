const palindromes = function (string) {
  string = string.toLowerCase();
  const lettersOnlyStr = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  const stringArray = Array.from(lettersOnlyStr);
  const flatStrArr = stringArray.flat();
  const reverseStringArray= stringArray.toReversed();
  const joinReverseStrArr = reverseStringArray.join('');
  
  if(lettersOnlyStr == joinReverseStrArr) {
      return true; 
  } else {
      return false;
  }
  compareArrays();
};

palindromes('RACEcar');

// Do not edit below this line
module.exports = palindromes;
