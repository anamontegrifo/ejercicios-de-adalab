'use strict';

const adalaber = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
};

adalaber.run = phrase => 'Estoy corriendo';
console.log(adalaber.run());

adalaber.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(adalaber.runAMarathon(50));





