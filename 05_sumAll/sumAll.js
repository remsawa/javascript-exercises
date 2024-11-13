const sumAll = function(int1, int2) {
  const intArray = [];
  let sum = 0;
  let lesserInt
  let greaterInt
  const lesserGreaterArray = [lesserInt, greaterInt];
 if (int1 > int2) {
     lesserGreaterArray[1] = int1;
     lesserGreaterArray[0] = int2;
  } else { 
     lesserGreaterArray[1] = int2;
     lesserGreaterArray[0] = int1;
 }
 function countUpToGreaterInt() {
     for (let i = lesserGreaterArray[0]; i <= lesserGreaterArray[1]; i++) {
         intArray.push(i)
     }  
     //puts 1~4 in an array
 }
 countUpToGreaterInt();
 intArray.forEach(getSum);
 function getSum(number) {
      sum += number;
  }
  return sum;
}
sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
