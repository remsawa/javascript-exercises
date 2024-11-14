const convertToCelsius = function(degreeF) {
  return Math.round((degreeF -32 * (5/9)) / 100);
};

const convertToFahrenheit = function(degreeC) {
};

convertToCelsius(32);
//convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
