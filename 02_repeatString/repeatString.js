const repeatString = function(text, number) {
  let string = "";
  let error = "ERROR";
  if(number < 0) {
  return error;
  }
  for(let i = 0; i < number; i++) {
    string += text;
  }
  return string;
};
function getRandomNumber () {
  return number;
}
//I'm unsure why calling getRandomNumber passes the test only without the () here
repeatString('odin', getRandomNumber);

// Do not edit below this line
module.exports = repeatString;
