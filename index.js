const readline = require('readline');

let name = 'Invalid Name';
let experience = 'Invalid Experience';
let level = 'Invalid Level';

function question(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}



async function getName() {
  let name = await question('What is your name? ');
  return name;
}
async function getExperience() {
  let experience = await question('How many experience points do you have? ');
  return parseInt(experience, 10);
}

function rankHeroLevel(name, experience) {
  switch (true) {
    case (experience < 1000):
      level = "Iron"
      break;
    case (experience >= 1001 && experience <= 2000):
      level = "Bronze"
      break;
    case (experience >= 2001 && experience <= 5000):
      level = "Silver"
      break;
    case (experience >= 5001 && experience <= 7000):
      level = "Gold"
      break;
    case (experience >= 7001 && experience <= 8000):
      level = "Platinum"
      break;
    case (experience >= 8001 && experience <= 9000):
      level = "Ascendant"
      break;
    case (experience >= 9001 && experience <= 10000):
      level = "Immortal"
      break;
    case (experience >= 10001):
      level = "Radiant"
      break;
    default:
      console.log('Error: Invalid experience')
      level = 'Invalid'
  }
  console.log(`\nThe hero named ${name} is at the ${level} level\n`)

}




async function main() {
  let repeatQuestions = 'yes';

  while (repeatQuestions.toLowerCase() === 'yes') {
    name = await getName();
    experience = await getExperience();


    rankHeroLevel(name, experience)
    repeatQuestions = await question("Want to see another player's rank? (yes/no) ");
    while (repeatQuestions.toLowerCase() !== 'no' && repeatQuestions.toLowerCase() !== 'yes') {
      console.log('Enter a valid answer');
      repeatQuestions = await question("Want to see another player's rank? (yes/no) ");
    }
  }

  console.log('Program closed.');
}

main();