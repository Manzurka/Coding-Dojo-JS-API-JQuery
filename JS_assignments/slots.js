function Slots(c){
  while(c > 0){
  var play = Math.floor(Math.random() * 100);  //the chances of winning
  var win = Math.floor(Math.random() * 50) + 50; //the chances of how much you win
  if (play === 1 ){
    var winnings=c+win;
    console.log("You won",winnings);
  }
  else {
    console.log("Try Again");
  }
  c--;
}
  console.log("You lost everything")
}
Slots(100);

// function randomChance(c){
//   var winnings = 0; // how much you won
  // var play = Math.floor(Math.random() * 50)+1;  //the chances of winning
//   var win = Math.floor(Math.random() * (100 - 50)) + 50; //chances of how much you win

//     // for(i=0; i<c; i++)
//     {
//       if(play === 1){
//         winnings += win;
//         console.log("You won", winnings)
//       }
//     }
//     return winnings;
// }

// randomChance(94);

function slotMachine(quarters){
  while (quarters > 0){
      var winner = Math.floor(Math.random()*100); // gives us either 0 or 1. 1 should only happen 1 in 100
      if (winner === 1){
          var winnings = Math.floor((Math.random()*50) + 50);
          console.log("You have", quarters, "quarters left"); // added this for checking behavior
          return quarters + winnings;
      }
      quarters--; // lose a quarter every time you're not a winner
  }
  return 0; // if we exit the while loop, we've ran out of quarters, so we're left with 0 winnings
}

console.log(slotMachine(100));