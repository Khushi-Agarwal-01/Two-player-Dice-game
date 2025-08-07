var randomnumber1=((Math.random())*6);
randomnumber1=Math.floor(randomnumber1)+1;
var randomnumber2=((Math.random())*6); 
randomnumber2=Math.floor(randomnumber2)+1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomnumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomnumber2 + ".png");
if(randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.querySelector(".text1").style.color="Green";
    document.querySelector(".text2").style.color="Red";
}
else if(randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    document.querySelector(".text1").style.color="Red";
    document.querySelector(".text2").style.color="Green";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector(".text1").style.color="yellow";
    document.querySelector(".text2").style.color="yellow";
}