'use strict';

const adalaber = {
    name: 'Susana',
    age: 34,
    job: 'periodista'

};
adalaber.name = 'María';
adalaber.showBio = function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;

}
console.log(adalaber.showBio());

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
}
adalaber2.showBio = function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;
}

console.log(adalaber2.showBio());



