var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomDice1 = " dice" + randomNumber1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("Src", randomDice1);

var randomNumber2 = Math.floor(Math.random() *6) + 1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("Src", randomDice2);



if ( randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = "👍 PLAYER ONE WINS "
    } 
    
 else if ( randomNumber2 > randomNumber1 ){
        document.querySelector("h1").innerHTML = " 👌PLAYER TWO WINS";
    } 
    
    else {
        document.querySelector("h1").innerHTML = " 🙌 ITS A DRAW LOSERS ";
    } 
    