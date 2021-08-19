'use strict';

let ingredient = 'pollo';
ingredient = 'bacalao';

switch (ingredient) {
    case 'pollo': console.log(`Has elegido ${ingredient}. Puedes cocinar pollo en pepitoria`);
        break;
    case 'ternera': console.log(`Has elegido ${ingredient}. Puedes cocinar ternera a la jardinera`);
        break;
    case 'bacalao': console.log(`Has elegido ${ingredient}. Puedes cocinar bacalao al pil pil`);
        break;
    case 'costillas': console.log(`Has elegido ${ingredient}. Puedes cocinar patatas con costillas`);
        break;
    default: console.log('Nada en la nevera');
}




