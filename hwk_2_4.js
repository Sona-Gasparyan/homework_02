function primeNumber (a) {
  for(let i = 2; i < a; i++){
    if(a % i === 0) return false;
    return true;
  }
 }

console.log(primeNumber(1000)) ;