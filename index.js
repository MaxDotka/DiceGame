var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generates number 1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // First dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0]; //Selects first img in Array

image1.setAttribute("src", randomDiceImage); // Changes the first dice according to randomDiceImage

var randomNumber2 = Math.floor(Math.random()* 6) + 1; //Generates number 1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //Second dice1.png - dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); //Selects second img in Array and changes second dice

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}

else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}