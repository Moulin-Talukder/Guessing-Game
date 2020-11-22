var won = 0;
var lose = 0;

for(var i = 1; i<=5; i++){

    var guessNum = parseInt(prompt("Guess number from 1 to 5 : "));
    var randomNum = Math.floor(Math.random() * 5) + 1;
    
    if(guessNum == randomNum){
    
        console.log("You Won!");
        won++;
    
    }
    else{
    
        console.log("You Lose, The Number Was "+randomNum);
        lose++;
    }


}

document.write("Total Number of Win : "+won+"<br>");
document.write("Total Number of Lose : "+lose);


