'use strict';

const input = document.querySelector('.nombre');

//Objetos literales. Declaración e inicialización:
const gato1 = {
    nombre: 'Missy',
    color: 'negro',
    numeroPatas: 4,
    comidaFavorita: 'Lasaña'
};

//Objetos. Declarar e inicializar vacío

const gato2 = {}

//así:
gato2['nombre'] = 'Missy';
gato2['color'] = 'negro';

//o así:
gato2.nombre = 'Missy';
gato2.color = 'negro';
gato2.numeroPatas = 4;
gato2.comidaFavorita = 'Lasaña';

//otra manera de inicializar / usar propiedades

const propiedadAPreguntar = 'nombre';

gato2[propiedadAPreguntar] = input.value;
gato2['nombre'] = input.value;

//Modificar
gato2.comidaFavorita = 'Sardinas';

elemento.innerHTML = 'Su comida favorita es ${gato2.comidaFavorita}';






