let calc;
const add = function(...numToCalc) {
    const numbers = [];
    numbers.push(...numToCalc);
    const addNums = (a, b)=> a + b;
    calc = numToCalc.reduce(addNums);
	return calc;
};

const subtract = function(...numToCalc) {
    const numbers = [];
    numbers.push(...numToCalc);
    const subNums = (a, b)=> a - b;
    calc = numToCalc.reduce(subNums);
	return calc;
};

const sum = function(...numToCalc) {
    const numbers = [];
    if(numToCalc == '') {
        numbers.push(0); 
    } else {
        numbers.push(...numToCalc);
    }
    const flatArray = numbers.flat();
    const addNums = (a, b)=> a + b;
    calc = flatArray.reduce(addNums);
    return calc;
};

const multiply = function(numToCalc) {
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


const factorial = function(numToCalc) {
    if(numToCalc === 0){
      calc = 1;
    } else {
        const numbers = [];
        for(let i = numToCalc; i >= 1; i--){
            numbers.push(i)
        } 
        const factorialNum = (a, b) => a * b;
        calc = numbers.reduce(factorialNum);
    }
  return calc;
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
