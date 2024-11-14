const convertToCelsius = function(degreeF) {
  let convertedDegreeC = (degreeF -32) * (5/9);
   return Math.round(convertedDegreeC * 10) / 10;
   
};

const convertToFahrenheit = function(degreeF) {
   let convertedDegreeF = (degreeF * (9/5) + 32);
   return Math.round(convertedDegreeF * 10) / 10;
};

convertToCelsius(100);
convertToFahrenheit(0);
//convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
