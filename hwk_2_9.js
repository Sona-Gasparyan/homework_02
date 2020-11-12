function decimalCombination (){
  let result = ""
  for(let i = 0; i < 10; i++){
    for(let j =0 ; j < 10; j++ ){
      result = result + i + j +",";
    }
  }
  return result
}
console.log(decimalCombination()); 