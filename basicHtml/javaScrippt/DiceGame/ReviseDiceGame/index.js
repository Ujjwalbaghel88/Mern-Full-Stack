function start() {

    console.log("Game Started");
    document.getElementById("rolldice1").disabled = false;
     document.getElementById("restart").disabled = false;
      document.getElementById("start").disabled = false;
}
function restart() {
    window.location.reload();
}
function p1Play() {
    console.log("Player 1 Dice Rolled");
  let Score = Number( document.getElementById("rolldice1").innerText);

  const DF=Math.floor(Math.random()*6)+1;


  switch(DF) {

    case 1:{
        document.getElementById("dice1").src="./dice-six-faces-one.png";
        break;
    }
  }
  if(DF====6){
    document.getElementById("rolldice1").disabled = false;
     document.getElementById("rolldice2").disabled = true;
  }
  else{
    Score=Score+DF;
     document.getElementById("p2sc").innerText=Score;
  }
   
}
function p2Play() {
    console.log("Player 2 Dice Rolled");
     let Score = ( document.getElementById("rolldice2").innerText);

    const DF=Math.floor(Math.random()*6)+1;

    Score=Score+DF;
    document.getElementById("rolldice2").innerText=Score;
}