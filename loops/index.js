'use strict';

/**
* Exercice 1
*/

console.log('Table de 1');
var table = '';
for (var i = 1; i <= 10; i++) {
    table += (i * 1) + ' ';
}
console.log(table);
table = '';
console.log('Table de 2');
for (var i = 1; i <= 10; i++) {
    table += (i * 2) + ' ';
}
console.log(table);
table = '';
console.log('Table de 3');
for (var i = 1; i <= 10; i++) {
    table += (i * 3) + ' ';
}
console.log(table);
table = '';
console.log('Table de 5');
for (var i = 1; i <= 10; i++) {
    table += (i * 5) + ' ';
}
console.log(table);
table = "";
console.log('Table de 8');
for (var i = 1; i <= 10; i++) {
    table += (i * 8) + ' ';
}
console.log(table);

/**
* Exercice 2
*/

var unorderedList = '<ul>'
for (var i = 1; i <= 10; i++) {
    var element = '<li>' + i + ' x ' + 5 + ' = ' + (i * 5) + '</li>';
    unorderedList += element;
}
unorderedList += '<ul>'
console.log(unorderedList);

/**
* Exercice 3
*/

var i = 1;
while (i <= 10) {
    console.log(i * 5);
    i++
}
/* comme la condition de la boucle est toujours true, la boucle ne s'arrête jamais
*  j'ai changé la condition de sorte que tant que i est inférieur ou egale à 10
*  je continue ma boucle, dès que i est égal à 11, la condition vaut false et on quitte la boucle
*  comme j'incrémente i dans la boucle, il va y avoir 10 tours de boucle et ça quitte la boucle
*/

/**
* Exercice 4
*/

var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var table5 = table.map(function (el) {
    return el * 5;
})
console.log(table5);

/**
* Exercice 5
*/
var guy = {
    name: '42',
    age: '42'
}
for (var key in guy) {
    console.log(key + ': ' + (guy[key] * 42));
}

/**
* Exercice 6
*/
var nbr = [45, 86, 1, 4, -9];
for (var i = 0; i < nbr.length; i++) {
    for (var j = 0; j < nbr.length; j++) {
        if (nbr[i] < nbr[j]) {
            var tmp = nbr[i];
            nbr[i] = nbr[j];
            nbr[j] = tmp;
            j = 0;
        }
    }
}
console.log(nbr);

/**
* Exercice 7
*/

var clothesName = ['t-shirt', 'sweat', 'pullover'];
var sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
var clothes = {};
clothesName.forEach(function (el) {
    var prices = sizes.map(function (size) {
        return Math.random() * 100 + 1;
    })
    var tva = prices.map(function (price) {
        return price * 0.2; // tva à 20%
    })
    clothes[el] = {
        sizes: sizes,
        prices: prices,
        tva: tva   
    };
});
console.log(clothes);


/**
* Exercice 8
*/

var date = new Date();
var selectStr = '<select>';

for (var year = 1980; year <= date.getFullYear(); year++) {
    selectStr += '<option>' + year + '</option>';
}
selectStr += "</select>";
console.log(selectStr);