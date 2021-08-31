'use strict';

const user = {}
let job = 'developer';
job = 'profesora';

user.firstName = 'María';
user.lastName = 'García';
user['age'] = 30;
user['job'] = job;

user.firstName = 'Sara';
user.lastName = 'Pérez';
user.age = user.age + 1;


console.log(`El usuario se llama ${user.firstName} ${user.lastName}, tiene ${user.age} años y es ${user.job}`);

