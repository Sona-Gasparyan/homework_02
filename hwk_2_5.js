let user = prompt("Write rock, paper or scissors?");
  let computer;

if(Math.random() <= 0.35 )  {
   computer = "paper"   ;  
} else if(Math.random() <= 0.7) {
  computer =  "rock"
} else {
  computer = "scissors" ;
}
alert (computer)

if(user !== "rock" && user !== "paper" && user !== "scissors") {
  alert ("Invalid input, enter correct value" )
 } 

function gamePlay (firstPlayer, secondPlayer) {
  
  if (user === computer ){
    return ("Draw! Enter new values.")
  } 
  if (user === "paper" ){
    if (computer ==="rock"){
      return ("1st player Wins!!") 
    } else {
      return ("2nd player Wins!!")
    }
  }
  if(user === "rock"){
    if(computer === "paper"){
      return ("2nd player Wins!!")
    } else {
      return ("1st player Wins!!") 
    }
  }
  if(user === "scissors"){
    if(computer === "paper"){
      return ("1st player Wins!!") 
    } else {
      return ("2nd player Wins!!") 
    }
  }
  
  if (computer === "paper" ){
    if (user ==="rock"){
      return ("2nd player Wins!!") 
    } else {
      return ("1st player Wins!!")
    }
    if(computer === "rock"){
      if(user === "paper"){
        return ("1st player Wins!!")
      } else {
        return ("2nd player Wins!!") 
      }
    }
    if(computer === "scissors"){
      if(user === "paper"){
        return ("2nd player Wins!!") 
      } else {
        return ("1st player Wins!!") 
      }
      
    }
  }
}


console.log(gamePlay(user,computer))

