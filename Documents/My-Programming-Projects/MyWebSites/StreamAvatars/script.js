const container = document.getElementById("charContainer");
const amountChar = document.getElementById("amountChar");

// TODO 
// Calculate the RandomX Distance From CharacterClientWidthX
// Why?

function createCharacters(characterName) {
    // Implement createCharacter logic here
    console.log('Character name: ', characterName);
  }

  // Set up an endpoint to receive data
  document.addEventListener('DOMContentLoaded', function () {
    const server = new XMLHttpRequest();
    server.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        createCharacters(data.name);
      }
    };
    server.open("POST", "/createCharacter", true);
    server.send();
  });



const names = ["James", "Dolores", "Stefan", "Geoffrey", "Candice", "Autisha",
         "Eleanor", "Quentin", "Isabella", "Raphael", "Serena", "Malcolm",
         "Fiona", "Sander Kooistra", "Ruben Ensing", "Oliver", "Zara", "Nathaniel", "Emily",
         "Victor", "Penelope", "Dominic", "Gabrielle", "Tristan", "Hazel",
         "Lucas", "Aria", "Sebastian", "Mia", "Elijah", "Sophia", "Gavin",
         "Lydia", "Caleb", "Amelia", "Nolan", "Isabelle", "Wyatt", "Vivian",
         "Liam", "Nora", "Oscar", "Scarlett", "Henry", "Madeline", "Emma",
         "Jacob", "Abigail", "Aiden", "Grace", "Eva", "Vincent", "Julia",
         "Connor", "Lily", "Samuel", "Hannah", "Mason", "Zoe", "Noah", "Chloe"];

const char = ["char00.png","char01.png","char02.png","char03.png","char04.png","char05.png","yuuna.png"];

const namesLength = names.length;
const charLength = char.length;

function createCharacter() {
    const character = document.createElement("div");
    character.className = "person";

    const name = document.createElement('span');
    name.className = "name";
    name.innerText = names[Math.floor(Math.random() * namesLength)];

    const img = document.createElement('img');
    img.className = 'char';
    img.src = char[Math.floor(Math.random() * charLength)];

    character.appendChild(name);
    character.appendChild(img);
    container.appendChild(character);
    return character;
}

function moveCharacter(character) {
    const maxX = window.innerWidth - character.clientWidth;
    const randomX = Math.floor(Math.random() * maxX);
    const fromLoc = character.randomX || 0;
    const distance = Math.abs(randomX - fromLoc);
    const maxSpeed = 120; // Adjust this value based on the desired maximum speed

    character.randomX = randomX;

    const animationTime = Math.min(16, distance / maxSpeed);

    character.style.transition = `transform ${animationTime}s`;
    character.style.transform = `translateX(${randomX}px)`;

    // console.log("RandomX goto:", randomX, " RandomX from:", fromLoc, " Animation Time:", animationTime);
}
function startMoving(character) {
    moveCharacter(character);
    setInterval(() => moveCharacter(character), Math.random() * 1000 + 7000); 
}

spawnAmount = 50;
const characters = [];
var addChar = document.getElementById("addChar");

window.addEventListener("load", (event) => {
    for (i = 0;i<spawnAmount;i++){
        spawn()
    }
});

function spawn() {
    const character = createCharacter();
    characters.push(character);
    startMoving(character);
    amountChar.innerText++;
}

function remove() {
    const lastCharacter = characters.pop();
    if (lastCharacter) {
        container.removeChild(lastCharacter);
        amountChar.innerText--;
    }
}

function removeAll() {
    let removedCharacter;
    
    while (characters.length) {
        removedCharacter = characters.pop();
        if (removedCharacter) {
            container.removeChild(removedCharacter);
        }
    }
    
    amountChar.innerText = '0'; // Reset the character count
}


