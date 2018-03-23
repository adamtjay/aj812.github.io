console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth

  const middleEarth = document.createElement('section');
  middleEarth.setAttribute('id', 'middle-earth');

  for (let i = 0; i < lands.length; i++) {
      // add each land as an article tag
      const land = document.createElement('article');
        // inside each article tag include an h1 with the name of the land
      land.innerHTML = `<h1>${lands[i]}</h1>`;
      if (lands[i] === "Rivendell") {
          land.classList.add('rivendell');
        }
        // append middle-earth to your document body
        middleEarth.appendChild(land);

      }

body.appendChild(middleEarth);

//console.log(middleEarth);

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  const hobbitUl = document.createElement('ul');
  const theShire = document.getElementsByTagName('article')[0];
  theShire.classList.add("the-shire");

  for (let i = 0; i < hobbits.length; i++) {
      let hobbitLi = document.createElement('li');
      hobbitLi.classList.add('hobbit');
      hobbitLi.innerHTML = hobbits[i];

      if (hobbits[i] === "Frodo Baggins") {
          hobbitLi.classList.add('frodo');
      }

      hobbitUl.appendChild(hobbitLi);

  }

theShire.appendChild(hobbitUl);

  // give each hobbit a class of hobbit
}

makeHobbits();



// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
let theRing = document.createElement('div');
let frodo = document.querySelector('.frodo');
frodo.appendChild(theRing);

theRing.setAttribute('id', 'the-ring');
theRing.classList.add('magic-imbued-jewelry');
theRing.addEventListener("click", nazgulScreech);


  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  let rivenLi = document.querySelector('.rivendell');
  let theAside = document.createElement('aside');
  //rivenLi.appendChild(theAside);
  let buddyList = document.createElement('ul');


  for (let i = 0; i < buddies.length; i++) {
      let buddy = document.createElement('li');
      buddy.innerHTML = buddies[i];
      buddy.classList.add('buddy');

      if (buddies[i] === "Strider") {
          buddy.classList.add('strider');
      }
      buddyList.appendChild(buddy);
  }

  rivenLi.appendChild(theAside);
  theAside.appendChild(buddyList);

  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies();

// Part 5


function beautifulStranger() {
  let strider = document.querySelector('.strider');
  strider.innerHTML = "Aragorn";

  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  let theHobbits = document.querySelectorAll('.hobbit');
  let rivenLi = document.querySelector('.rivendell');


  for (let i = 0; i < theHobbits.length; i++) {
        rivenLi.appendChild(theHobbits[i]);
      }

  // assemble the hobbits and move them to Rivendell
}

leaveTheShire();


// Part 7
function forgeTheFellowShip() {

  // create a new div called 'the-fellowship' within rivendell
  let rivendell = document.querySelector('.rivendell');
  let theFellowship = document.createElement('div');

  rivendell.appendChild(theFellowship);
  theFellowship.setAttribute('id', 'the-fellowship');

    // add each hobbit and buddy one at a time to 'the-fellowship'

  let hobbitsAndBuddies = document.querySelectorAll('.hobbit, .buddy');
  let hbList = document.createElement('ul');
  hbList.setAttribute('id', 'buddies-list');
  theFellowship.appendChild(hbList);

  let newCharList = [];

  for (let i = 0; i < hobbitsAndBuddies.length; i++) {

      hbList.appendChild(hobbitsAndBuddies[i]).setAttribute('id',hobbitsAndBuddies[i].textContent);


      newCharList.push('\n' + hobbitsAndBuddies[i].textContent);
      }

  // after each character is added make an alert that they have joined your party

  alert(`The following heroes have joined your party:\n ${newCharList}`);

  console.log(theFellowship);

}

forgeTheFellowShip();


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'

  let gandalf = document.querySelector('#the-fellowship > ul > li')
  gandalf.innerHTML = "Gandalf the White";

  // apply style to the element
  // make the background 'white', add a grey border

  gandalf.setAttribute('style', 'background-color:white; border:2px solid grey');

}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

   var boromir = document.getElementById('Boromir')
   var hblist = document.getElementById('buddies-list')

   setTimeout(function() {alert('The Horn of Gondor has been blown. Boromir has died.')}, 2500);
   setTimeout(function() {boromir.setAttribute("style", "text-decoration:line-through;")}, 3000)
   setTimeout(function() {hblist.removeChild(boromir)}, 5000);

}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor

let mordor = document.querySelector('#middle-earth > article:nth-child(3)');
mordor.classList.add('mordor');
let frodo = document.getElementById('Frodo Baggins');
let sam = document.getElementById("Samwise 'Sam' Gamgee");

let mList = document.createElement('ul');
mList.classList.add('mordorList');
mordor.appendChild(mList);
mList.appendChild(frodo);
mList.appendChild(sam);

console.log(mordor);

  // add a div with an id of 'mount-doom' to Mordor

  let mtDoom = document.createElement('div');
  mtDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mtDoom);
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt() {

  // Create a div with an id of 'gollum' and add it to Mordor
let gollum = document.createElement('div');
gollum.setAttribute('id', 'gollum');


  // Remove the ring from Frodo and give it to Gollum
let theRing = document.getElementById('the-ring');
gollum.appendChild(theRing);


  // Move Gollum into Mount Doom
  mtDoom = document.getElementById('mount-doom');
  mtDoom.appendChild(gollum);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  let mtDoom = document.getElementById('mount-doom');
  let gollum = document.getElementById('gollum');
  setTimeout(function() {mtDoom.removeChild(gollum)}, 6000);

  // remove all the baddies from the document
  // * What? No other baddies to remove?

  // Move all the hobbits back to the shire
let hobbits = document.querySelectorAll('.hobbit');
let theShire = document.querySelector('.the-shire');

setTimeout(function() {
  for (let i=0; i < hobbits.length; i++) {
    theShire.appendChild(hobbits[i]);
  }
  alert('The hobbits are now back in the shire.');
}, 8000);


}

thereAndBackAgain();
