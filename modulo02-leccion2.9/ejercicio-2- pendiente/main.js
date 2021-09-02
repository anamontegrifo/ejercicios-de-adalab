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












