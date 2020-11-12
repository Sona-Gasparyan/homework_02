function fibNumber(number){
  let num1 = 1;
  let num2 = 0;
  
  for(let i = 0; i < number; i++){
    
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    if(num2 >= number){
      break
    } else {
      console.log(num2);
    }
    // num1++;
    
  }
}

fibNumber(10);
