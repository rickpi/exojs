'use strict';

/*
* Exercice 1
*/
// My Digital School Forever

/*
* Exercice 2
*/
/*
My Digital School Forever
every day
*/

/*
* Exercice 3
*/
var string = "42";
var number = 42;
var float = 42.0;
var boolean = true;
var array = [42, 42, 42];
var obj = {
    quaranteDeux: "42" 
}
var undef = undefined;
var nullVar = null;
var date = new Date();

/*
* Exercice 4
*/
var my42count = "quarante-deux";
console.log("length: " + my42count.length);

/*
* Exercice 5
*/
var isItDefined = array || 42;

/*
* Exercice 6
*/
var myArray42 = ["q", "u", "a", "r", "a", "n", "t", "e", "-", "d", "e", "u", "x"];

/*
* Exercice 7
*/
var myArray42Len = myArray42.length;

/*
* Exercice 8
*/
var myArray42InString = myArray42.join('');
myArray42InString += "La grande réponse sur la vie, l'univers et le reste !";

/*
* Exercice 9
*/
var min = 1;
var max = 42;
var rand = Math.floor(Math.random() * (max - min + 1)) + min;
rand = (rand == 42) || rand;

/*
* Exercice 10
*/
var my42Type = typeof float;
console.log(my42Type);

/*
* Exercice 11
*/
var compute42 = 21 * 2;
compute42 = compute42.toString();

/*
* Exercice 12
*/
var all42 = 42424242;
all42 = all42.toString().replaceAll("42", "quarante-deux");

/*
* Exercice 13
*/
var a = 24;
var b = 42;
var tmp = a;
a = b;
b = tmp;