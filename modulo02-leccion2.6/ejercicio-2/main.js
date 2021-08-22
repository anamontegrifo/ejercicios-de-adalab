'use strict';

const adalaber = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
};

adalaber.run = phrase => 'Estoy corriendo';

console.log(adalaber.run());

adalaber.runAMarathon = distance => 50;

console.log(`${adalaber.run()} un maratón de ${adalaber.runAMarathon()} kilómetros.`);



