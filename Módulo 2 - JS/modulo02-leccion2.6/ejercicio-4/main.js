'use strict';

const button = document.querySelector('.btn');

function clickedButton(event) {
    console.log(event);

}

button.addEventListener('click', clickedButton);

//Type es la propiedad que corresponde a la forma en que accedemos al evento. En este caso es un PointerEvent de type: 'click'.