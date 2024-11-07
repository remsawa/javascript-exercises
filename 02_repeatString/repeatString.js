const repeatString = function(text, number) {
  let string = "";
  for(let i = 0; i < number; i++) {
    string += text;
  }
  return string;
};
repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
