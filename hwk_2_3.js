
function diff (num){
  num = "" + num;
  let max = 0; min = 9;
  for(let i = 0; i < num.length; i++){
    if (num[i] > max) {
      max = num[i];
    } 
    if (num[i] < min){
      min = num[i];
    }
    
  }
  return max - min 
}

console.log(diff(4925));