alert("working!")
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
function randomImage(randomNumber, tag){
  if(randomNumber === 1){
    tag.setAttribute("src","images/dice1.png");
  }
  else if(randomNumber === 2){
    tag.setAttribute("src","images/dice2.png");
  }
  else if(randomNumber === 3){
    tag.setAttribute("src","images/dice3.png");
  }
  else if(randomNumber === 4){
    tag.setAttribute("src","images/dice4.png");
  }
  else if(randomNumber === 5){
    tag.setAttribute("src","images/dice5.png");
  }
  else{
    tag.setAttribute("src","images/dice6.png");
  }
}
function setHeading(number1,number2){
  if(number1 > number2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }
  else if(number1 < number2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
randomImage(randomNumber1,document.querySelector("div .img1"));
randomImage(randomNumber2,document.querySelector("div .img2"));
setHeading(randomNumber1,randomNumber2);
