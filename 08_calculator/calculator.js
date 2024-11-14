const numbers = [];
let calc;

const add = function(...numToCalc) {
    numbers.push(...numToCalc);
    if(numbers[0] == null) {
        numbers[0] = 0;
    }
    if (numbers[1] == null) {
        numbers[1] = 0;
    }
    calc = numbers[0] + numbers[1];
	return calc;
};

const subtract = function(...numToCalc) {
    numbers.push(...numToCalc);
    if(numbers[0] == null) {
        numbers[0] = 0;
    }
    if (numbers[1] == null) {
        numbers[1] = 0;
    }
    if(numbers[0] < 0 && numbers[1] < 0) {
        calc = numbers[0] + numbers[1];
    } else {
        calc = numbers[0] - numbers[1];
    }
	return calc;
	
};

const sum = function(...numToCalc) {
	numbers.push(...numToCalc);
    if(numbers[0] == null) {
        numbers[0] = 0;
    }
    if (numbers[1] == null) {
        numbers[1] = 0;
    }
    calc = numbers[0] + numbers[1];
    return calc;
    
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

//add(2, 6);
//subtract(-8, 7);
sum();
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
