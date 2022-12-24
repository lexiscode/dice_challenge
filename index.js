
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 to 6 random integers

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //we can as well choose do use document.getElementByID or by Tagname

image1.setAttribute("src", randomImageSource);

//I repeated the above down here too, but reduced its readability a bit though
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//It's a tie, when both random numbers are the same
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
