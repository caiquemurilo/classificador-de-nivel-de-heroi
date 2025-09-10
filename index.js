const readline = require('readline');

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

let name;
let experience;
let level = 'Invalid Level';

function getName(name) {
  return name
}
function getExperience(experience) {
  return experience
}

function rankHeroLevel(name, experience) {
  getName(name);
  getExperience(experience);
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
      console.log('Error: invalid experience')
  }
  console.log(`\nThe hero named ${name} is at the ${level} level\n`)

}




async function main() {
  let repeatQuestions = 'yes';

  while (repeatQuestions.toLowerCase() === 'yes') {
    let name = await question('What is your name? ');

    let experience = await question('How many experience points do you have? ');


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