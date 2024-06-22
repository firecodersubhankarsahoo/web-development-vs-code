// for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // generate random number from 1 to 6
var randomDiceImageName1 = "dice" + randomNumber1 + ".png";  // get random dice image name
var location1 = "./images/" + randomDiceImageName1; // get random dice image location
document.querySelector(".img1").setAttribute("src", location1);// set dice 1 image source to random dice image location




// for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;    // generate random number from 1 to 6
var randomDiceImageName2 = "dice" + randomNumber2 + ".png";// get random dice image name
var location2 = "./images/" + randomDiceImageName2;        // get random dice image location
document.querySelector(".img2").setAttribute("src", location2); // set dice 2 image source to random dice image location




if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";   
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
