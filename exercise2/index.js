'use strict';

/**
* Exercice 1
*/

var age = prompt('Quel âge avez-vous ?');
if (age < 18) {
  alert('Vous ne pouvez pas entrer, vous n\'êtes pas majeur car vous avez '+ age + 'ans');
} else if (age >= 42) {
  alert('Bonjour patron');
} else {
  alert('Vous pouvez entrer, vous êtes majeur car vous avez ' + age + 'ans');
}

/**
* Exercice 2
*/

var rand = Math.floor(Math.random() * 30 + 1);
console.log(rand);
if (rand >= 0 && rand <= 10) {
  console.log('Cool');
} else if (rand > 10 && rand <= 20) {
  console.log('Tepid');
} else {
  console.log('Warm');
}

/**
* Exercice 3
*/

var date = new Date();
switch (date.getDay()) {
  case 0:
  console.log('Nous sommes dimanche');
  break;
  case 1:
  console.log('Nous sommes lundi');
  break;
  case 2:
  console.log('Nous sommes mardi');
  break;
  case 3:
  console.log('Nous sommes mercredi');
  break;
  case 4:
  console.log('Nous sommes jeudi');
  break;
  case 5:
  console.log('Nous sommes vendredi');
  break;
  case 6:
  console.log('Nous sommes samedi');
  break;
}

/**
* Exercice 4
*/

var input = prompt('Vous arrivez devant trois portes : gauche, milieu ou droite ?');
if (input === 'gauche') {
  input = prompt('Vous voyez un panneau avec écrit "6 * 7 ?", que répondez-vous ?');
  if (input === "42") {
    alert('La réponse sur la vie, l\'univers et le reste !');
  } else {
    alert('Genre sérieusement ?');
  }
} else if (input === 'milieu') {
  alert('C\'est un placard à balais');
} else {
  alert('Les gens vont toujours à droite... eh bah derrière la porte y\'avait un lion et il vous mange');
}

/**
* Exercice 5
*/

/**
C'est impossible de faire un early return parce que on doit return,
il faut donc utiliser une function qui est interdit pour l'instant.
*/

/**
* Exercice 6
*/
var myVar;
console.log(!myVar ? 'cette variable n\'existe pas' : '42');

/**
* Exercice 7
*/
var family = prompt("Choisissez un nombre entre 0 et 50:");
family = Math.floor(family / 10) * 10;

switch (family) {
  case 0:
  alert("Ce chiffre fait partie de la famille des 0");
  break;
  case 10:
  alert("Ce chiffre fait partie de la famille des 10");
  break;
  case 20:
  alert("Ce chiffre fait partie de la famille des 20");
  break;
  case 30:
  alert("Ce chiffre fait partie de la famille des 30");
  break;
  case 40:
  alert("Ce chiffre fait partie de la famille des 40");
  break;
  default:
  alert("Chiffre hors des limites, relancez")
}