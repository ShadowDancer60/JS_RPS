var weapons = ['rock' , 'paper', 'scissors'];
var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3]; 
var weaponOfChoice2 = weapons[parseInt(Math.random()*weapons.length) %3]; 
var win1=0;
var win2=0;
var weapon1=weaponOfChoice;
var weapon2=weaponOfChoice;

console.log(weapon1 + weapon2);

while (win1< 3 && win2< 3 ); { 
    console.log(win1);
  console.log (win1 + win2);

if (weapon1 == weapon2) {
  console.log ("This hand is a tie.");
} else if ((weapon1=="rock") && (weapon2=="scissors")) {
    console.log="PlayerOne wins"
    win1++
} else if ((weapon1=="paper") && (weapon2=="rock")) {
    console.log="PlayerOne wins"
     win1++
} else if ((weapon1=="scissors") && (weapon2=="paper")) {
    console.log="PlayerOne wins"
     win1++
} else if ((weapon1=="rock") && (weapon2=="paper")) {
    console.log="PlayerTwo wins"
     win2++
} else if ((weapon1=="scissors") && (weapon2=="rock")) {
    console.log="PlayerTwo wins"
     win2++
} else if ((weapon1=="paper") && (weapon2=="scissors")) {
    console.log="Player Two wins"
   win2++
}
}
if (win1==3 || win2==3); {
    console.log ("Game over");
    }