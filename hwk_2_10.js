function calculate(num){
  num = "" + num;
  let a = 0;
  let b = 1;
  for(let i = 0; i < num.length; i++){
    a += Number(num[i]);
    b *= num[i];
  }
  if(b % a === 0){
    return " Quotient is" + " " + b / a ;
  } else if (b === 0 || a === 0) { 
    return "Cannot calculate"
  } else {
    return " Reminder is" + " " + b % a ;
  }
}

console.log(calculate(787));