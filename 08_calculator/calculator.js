const numbers = [];

const add = function(...numToCalc) {
    numbers.push(...numToCalc);
	return numbers[0] + numbers[1];
};

const subtract = function(...numToCalc) {
    numbers.push(...numToCalc);
	return numbers[0] - numbers[1];
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

//add(2, 6);
subtract(-10, -4);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
