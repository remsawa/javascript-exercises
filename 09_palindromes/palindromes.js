const palindromes = function (string) {
  string = string.toLowerCase();
  const noPuncStr = string.replace(/[.,\/#!$%\^&\*;:{}=\-_" "`~()]/g,"");
  const noNumStr = noPuncStr.replace(/[0-9]/g, '');
  const stringArray = Array.from(noPuncStr);
  const reverseStringArray= stringArray.toReversed();
  const joinReverseStrArr = reverseStringArray.join('');
  console.log(noNumStr);
  console.log(joinReverseStrArr);
  if(noPuncStr == joinReverseStrArr) {
      return true; 
  } else {
      return false;
  }
  compareArrays();
};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
