
function reverse (num) {
  let counter = "";
  num = "" + num;
  for(let i = 1; i < num.length; i++ ){
    counter += num[i]
  }
  // return counter;
  if(num.length <=2 ){
    return ("" + counter +num[0] )
  } else {
    let lastInd = counter % 10;
    // console.log(lastInd);
    let middleInd = (counter - lastInd) /10;
    let firstInd = num[0];
    let reverse = Number("" + lastInd + middleInd + firstInd);
    return  reverse;
  }
}

console.log (reverse(365));


