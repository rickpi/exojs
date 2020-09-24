'use strict';
/**
 * Exercice 1
 */

/**
 * Return a string
 * @param {string} str
 * @return {string} returnedStr
 */
var myPutStr = function myPutStr(str) {
    if (typeof str != 'string') {
        return 'et pourquoi pas 42 ?';
    }
    return str;
}
console.log(myPutStr('une jolie chaîne de caractères'));
console.log(myPutStr(42));

/**
 * Exercice 2
 */

/**
 * Compute the surface area
 * @param {number} width
 * @param {number} length
 * @return {number} surface
 */
var computeSurfaceM2 = function computeSurfaceM2(width, length) {
    return width * length;
}
console.log(computeSurfaceM2(10, 5));

/**
 * Exercice 3
 */

/**
 * Create a button element 
 * @param {string} buttonText
 * @return {Object} createdButton
 */
var createMyButton = function createMyButton(buttonText) {
    if (!buttonText) {
        return console.error('Argument invalide');
    }
    var button = document.createElement('button');
    button.textContent = buttonText;
    return button; 
}

/**
 * Detect if the person has the legal age
 * @param {void}
 * @return {void}
 */
var detectMyAgeByNight = function detectMyAgeByNight() {
    var age = prompt('Quel âge avez vous ?');

    if (age < 18) {
        alert('Vous êtes mineur, barrez-vous');
    }
    if (age >= 42) {
        alert('Salut patron');
    }
    alert('Vous êtes majeur, bienvenue');
}

var button = createMyButton('clic moi');
document.body.appendChild(button);
button.addEventListener('click', detectMyAgeByNight);

/**
 * Exercice 4
 */

/**
 * Generate a matrix in HTML <table>
 * @param {number[][]} matrix
 * @return {Object} table
 */
var matrixGenerator = function matrixGenerator(matrix) {
    var table = document.createElement('table');

    for (var i = 0; i < matrix.length; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j = 0; j < matrix[i].length; j++) {
            var td = document.createElement('td');
            td.textContent = matrix[i][j];
            tr.appendChild(td);
        }
    }
    return table;
}

var matrix = [[1, 0, 0, 1], [1, 1, 0, 1], [0, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 0]];
var table = matrixGenerator(matrix);
document.body.appendChild(table);

/**
 * Exercice 5
 */

/**
 * Display a numerical clock
 * @param {void}
 * @return {void}
 */
var numericalClock = function numericalClock() {
    var date = new Date();
    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    var minutes = date.getMinutes();
    var hours = date.getHours();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    var clock = document.querySelector('.clock');
    if (clock == null) {
        clock = document.createElement('div');
        clock.classList.add('clock');
        document.body.appendChild(clock);
    }
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

window.setInterval(numericalClock, 1000);

/**
 * Exercice 6
 */
/*

/**
 * Calculate the fibonacci recursively
 * @param {number} n
 * @return {number} result
 */
var fibonacci = function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Put each result of fibonacci in an array of length equal to given index
 * @param {number} n
 * @return {number[]} array
 */
var fibonacciInArray = function fibonacciInArray(n) {
    var array = []

    for (var i = 0; i < n; i++) {
        array.push(fibonacci(i));
    }
    return array;
}

/**
 * Sort an array descending
 * @param {number[]} array
 * @return {void}
 */
var sortingArrayDesc = function sortingArrayDesc(array) {
    array.sort(function (a, b) {
        return b - a;
    });
}

/**
 * Compute all values of an array
 * @param {number[]} array
 * @return {number} result
 */
var computeArray = function computeArray(array) {
    var result = 0;

    array.forEach(function (val) {
        result += val;
    });
    return result;
}

var array = fibonacciInArray(5);
console.log(array);
sortingArrayDesc(array);
console.log(array);
console.log(computeArray(array));