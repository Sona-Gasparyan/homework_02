function fibNumber(number){
  let num1 = 0;
  let num2 = 0;
  num1++
  num2++
  for(let i = 2; i < number; i++){
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return(num2);
}

console.log(fibNumber(20));


