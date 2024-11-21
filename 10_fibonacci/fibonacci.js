const fibonacci = function(number) {
  let answer;
  const fibSeq = [0];
  function makeFibSeq() {
      let i = 1;
      fibSeq.push(i);
      
      for(i; i < number; i++) {
          let num1 = fibSeq[i-1];
          let num2 = fibSeq[i];
          let newNum = num1 + num2;
          fibSeq.push(newNum);
      }
     
  }
  makeFibSeq();
  console.log(fibSeq);
  answer = fibSeq[fibSeq.length -1];

  return answer;
};
fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
