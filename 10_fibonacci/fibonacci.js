const fibonacci = function(number) {
  number = Number(number);
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
  answer = fibSeq[fibSeq.length -1];
  if (number === 0){
      answer = 0;
  } else if (number < 0) {
      answer = "OOPS";
  }

  return answer;
};
fibonacci("0");
// Do not edit below this line
module.exports = fibonacci;
