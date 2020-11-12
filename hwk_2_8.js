function calc(n,k){
  let sum= 0;
  for(let i=1; i<=n; i++){
    sum+= Math.pow(-1, k)/(2*i-1)
    k++;
  }
  return sum;
}
console.log(calc(2,2));