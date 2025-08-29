var p1=Math.random();
p1=Math.floor(p1*6)+1;

var p2=Math.random();
p2=Math.floor(p2*6)+1;

if(p1>p2){
    document.querySelector("h1").textContent="Player 1 WINS";
    var diceNumber1=p1;
    document.querySelectorAll("img")[0].src="dice" + p1 + ".png"

    var diceNumber2=p2;
    document.querySelectorAll("img")[1].src="dice" + p2 + ".png"
}
else if(p2>p1){
    document.querySelector("h1").textContent="Player 2 WINS";
    var diceNumber1=p1;
    document.querySelectorAll("img")[0].src="dice" + p1 + ".png"

    var diceNumber2=p2;
    document.querySelectorAll("img")[1].src="dice" + p2 + ".png"
}
else{
    document.querySelector("h1").textContent="It's a DRAW";
    var diceNumber1=p1;
    document.querySelectorAll("img")[0].src="dice" + p1 + ".png"

    var diceNumber2=p2;
    document.querySelectorAll("img")[1].src="dice" + p2 + ".png"
}

