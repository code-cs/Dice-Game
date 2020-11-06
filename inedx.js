
var randNumber1 = Math.floor(Math.random() * 6)+ 1; //random number between 1 to 6
var randomeDiceImage = "dice" + randNumber1 + ".png"; //dice1.png to dice6.png
var randomImageSource = "images/" + randomeDiceImage; //images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randNumber2 = Math.floor(Math.random() * 6) +1;
var randomImageSource2 = "images/dice" + randNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randNumber1 > randNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}else if(randNumber2 > randNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw!";

}