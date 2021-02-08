


const readlineSync = require(`readline-sync`);

let demons = [`Red Demon`, `Yellow Demon`, `Black Demon`];
let approachingDemon = demons[Math.floor(Math.random() * demons.length)];
let demonAttack = Math.floor(Math.random() * 50);
let demonTreasure = [
    "Demon Repellent",
    "Heavens Blade",
    "Angelic Horn",
    "Heavens Body Armor",
    "Health Potion",
    "Heavens Wings",
  ];

let inventory = [];
let pickUp = demonTreasure[Math.floor(Math.random() * demonTreasure.length)];

const playerAttack = Math.floor(Math.random() * 50);
let playerHealth = 100;
const playerOptions = [`Walk`, `Inventory`, `Exit`];

let player = readlineSync.question(`Enter name to begin game: `);
console.log(`\n\nWelcome ${player}! You have chosen to play my Demons RPG. 
The mission is to walk through the bowles of Hell and kill demons and collect demon treasures. Start your mission if you dare!`);

const demonQuestRpg = () => {
  const option = readlineSync.keyInSelect(
    playerOptions,
    `You are starting your Demon Quest, which will you do?\n`
  );
  let demonHealth = 100;
  if (playerOptions[option] == `Exit`) {
    return (playerHealth = 0);
  } else if (playerOptions[option] == `Inventory`) {
    console.log(`\n${player}'s Health:${playerHealth} \nInventory: ${inventory} `);
  } else if (playerOptions[option] == `Walk`) {
    let key = Math.random();
    if (key <= 0.3) {
      console.log(`No Demon in sight.`);
    } else if (key >= 0.3) {
      console.log(`${approachingDemon}! DIE HUMAN!!!\n`);

      while (demonHealth > 0 && playerHealth > 0) {
        const runOrAttack = readlineSync.question(
          `${player}, do you want to run (r) or do you want to attack (a)?\n `
        );

        switch (runOrAttack) {
          case "r":
            const runForIt = Math.random();
            if (runForIt < 0.5) {
              console.log(
                `You escaped, however ${approachingDemon} hit you for ${demonAttack} attack points\n`
              );
            } else {
              demonHealth = 0;
              console.log(`You have escaped the Demon!\n`);
              break;
            }
          case "a":
            demonHealth -= playerAttack;
            console.log(
              `You attacked ${approachingDemon} with ${playerAttack} attack points. `
            );

            playerHealth -= demonAttack;
            console.log(
              `${approachingDemon} just hit you with ${demonAttack} attack points. `
            );

            if (demonHealth <= 0) {
              console.log(
                `You defeated ${approachingDemon} it dropped ${pickUp}. `
              );
              let enemyDrop = Math.floor(Math.random());
              if (enemyDrop <= 1) {
                inventory.push(pickUp);
              }
            } else if (playerHealth <= 0) {
              console.log(`Player and Demon have died. GAME OVER!`);
            }
        }
      }
    }
  }
};

while (playerHealth > 0) {
  healthRestore = function () {
    playerActive = true;
    playerHealth = 100;
  };
  healthRestore();
  demonQuestRpg();
}
















































































































