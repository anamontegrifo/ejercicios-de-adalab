'use strict';

let oneHundred = [];
let newLength;

function get100Numbers() {

    for (let i = 1; i <= 100; i++) {
        oneHundred.push(i)
        console.log(oneHundred);
    }
    return oneHundred;
}

let reverse;

function getReverse() {
    get100Numbers();
    reverse = oneHundred.reverse();
    console.log(reverse);
    return reverse;
}

getReverse();


// let acc = 0;
// const myArrayLength = 100;
// function geta100Numbers(){
//     for (let i=0; i<myArrayLength; i++){
//         acc++
//         myArray.push(acc);
//     }
//     return myArray;
// }
// function getReversed100Numbers (){
//     const newArray = geta100Numbers();
//     return newArray.reverse();
// }
// console.log(getReversed100Numbers());









