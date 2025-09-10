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
      level = "Ferro"
      break;
    case (experience >= 1001 && experience <= 2000):
      level = "Bronze"
      break;
    case (experience >= 2001 && experience <= 5000):
      level = "Prata"
      break;
    case (experience >= 5001 && experience <= 7000):
      level = "Ouro"
      break;
    case (experience >= 7001 && experience <= 8000):
      level = "Platina"
      break;
    case (experience >= 8001 && experience <= 9000):
      level = "Ascendente"
      break;
    case (experience >= 9001 && experience <= 10000):
      level = "Imortal"
      break;
    case (experience >= 10001):
      level = "Radiante"
      break;
    default:
      console.log('Error: invalid experience')
  }
  console.log(`The hero named ${name} is at the ${level} level`)

}


rankHeroLevel('Camus', 5000.5);