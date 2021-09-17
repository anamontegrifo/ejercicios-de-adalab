'use strict';

let currentYear = 2022;
console.log(currentYear % 4);

if (currentYear % 4 === 0) {
    console.log(`El año ${currentYear} es año bisiesto.`);
}
else if (currentYear % 4 === 1) {
    console.log(`${currentYear} no es año bisiesto. El próximo año bisiesto será ${currentYear + 3}.`);
}
else if (currentYear % 4 === 2) {
    console.log(`${currentYear} no es año bisiesto. El próximo año bisiesto será ${currentYear + 2}.`);
}
else if (currentYear % 4 === 3) {
    console.log(`${currentYear} no es año bisiesto. El próximo año bisiesto será ${currentYear + 1}.`);
}





