var readlineSync = require('readline-sync');
var playerName = readlineSync.question('May I have your name? ');

var welcomeMessage =  'Hello ${playerName} welcome to the Escape Room Game Simulation!';
console.log(welcomeMessage);


//Boolean Flags
var isAlive = true;
var hasKey = false;

while(isAlive == true){
const menuOptions = readlineSync.keyIn('Enter 1 to Put hand in hole \nEnter 2 to Find the Key \nEnter 3 to open door', {limit: '$<1-3>'});
console.log(menuOptions);
isAlive = false;
if (menuOptions == 1){
    //They die if they put their hand in the hole.
    console.log('${playerName}, oops you are Dead. Game is Over.');
    isAlive = False;
}
else if (menuOptions == 2 && haskey == true){
    //First time player choose option 2
    console.log('${playerName}, Choose option 2');

}
else if (menuOptions == 2 && haskey == true){
    //Subsequent entry with option 2
    //Display a message that the player is waisting time and that they need to proced to option-3
    console.log('${playerName}, you are waisting time and proceed to option 3!');
}
else if  (menuOptions == 3 && hasKey == false){
    //First time player chooses option 2, and has Not found the key
    console.log('${playerName}, you have not found the key yet!');

}
else if (menuOptions == 3 && hasKey == true){
    //Player choose option 3 and has Found the key and escaped the room! Player is alive!
    console.log('${playerName} Congratulations!! You have found the key and open the door to escape!!');
    isAlive = false;

}
}