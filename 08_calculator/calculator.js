let calc;
const add = function(...numToCalc) {
    const numbers = [];
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
    const numbers = [];
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
    const numbers = [];
	numbers.push(...numToCalc);
    const flatArray = numbers.flat();
    const addNums = (a, b)=> a + b;
    calc = flatArray.reduce(addNums);
    return calc;
};

const multiply = function(numToCalc) {
  //const numbers = [];
  //numbers.push(numToCalc);
  const multiplyNums = (a, b)=> a * b;
  calc = numToCalc.reduce(multiplyNums);
  return calc;

};

const power = function(...numToCalc) {
  const numbers = [];
numbers.push(...numToCalc);
   calc = numbers[0] ** numbers[1]; 
  return calc;
};


const factorial = function() {
	
};


power(3, 10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
