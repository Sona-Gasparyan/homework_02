function container(digit, number){
  digit = "" + digit;
  number = "" + number;
  let result = "no."
  for(let i = 0; i < number.length; i++){
    if(digit === number[i]) return "yes.";
  }
  
  return result;
}

console.log(container(8,187));

