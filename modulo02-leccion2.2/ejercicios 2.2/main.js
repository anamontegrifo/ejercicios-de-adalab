"use strict";

//Ejercicio 1
const numberA = 7;
const numberB = 19;

console.log(numberA + numberB);


//Ejercicio 2
const superWave = document.querySelector('.super-wave');
superWave.classList.add('wave');


//Ejercicio 3
const priceKiwi = 5;
const pricePear = 2;
const priceGrape = 4;

const purchasedKiwi = 2;
const purchasedPear = 3;
const pruchasedGrape = 0.5;

const totalKiwi = purchasedKiwi * priceKiwi;
const totalPear = purchasedPear * pricePear;
const totalGrape = pruchasedGrape * priceGrape;

const totalPurchase = totalKiwi + totalPear + totalGrape;
console.log('La fruta ha costado ' + totalPurchase + ' euros');

//Ejercicio 4

const sake = 2;
const account = 128;
const people = 9;

const personAccount = (account - sake) / people;
const anaAccount = personAccount + sake;
console.log('Cada uno debe pagar ' + personAccount + ' euros');
console.log('Ana debe pagar ' + anaAccount + ' euros');

//Ejercicio 5

let years = 40;
const daysPerYear = 365;
const hoursPerDay = 24;

let livedHours = years * daysPerYear * hoursPerDay;
console.log(livedHours);

years = 99;
livedHours = years * daysPerYear * hoursPerDay;
console.log(livedHours);

//ejercicio 6

let partnerName = 'Mara';
console.log('Hola ' + partnerName + ', encantada de conocerte');

//Ejercicio 7

console.log(`Hola ${partnerName}, encantada de conocerte`);

//Ejercicio 8
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogsList = document.querySelector('.dogsList');
const content = `<li>${firstDogName}</li><img src="${firstDogImage}"><li>${secondDogName}</li><img src="${secondDogImage}"><li>${thirdDogName}</li><img src="${thirdDogImage}">`;

dogsList.innerHTML = content;

//Ejercicio 9

const partnerContainer = document.querySelector('.js-partner');
let pairName = 'Leticia Fernández Sánchez';
pairName = 'Sara García';

partnerContainer.innerHTML = `El nombre de mi compañera es ${pairName} y está compuesto por ${pairName.length} caracteres.`;

//Ejercicio 10

let myAge = document.querySelector('.user__age');
const daysXYear = 365;
const hoursXDay = 24;

let spentHours = parseInt(myAge.innerHTML) * daysXYear * hoursXDay;
console.log(spentHours);






