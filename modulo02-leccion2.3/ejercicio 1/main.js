'use strict';
// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';



const image = document.querySelector('.user__avatar');
image.src = userAvatar || DEFAULT_AVATAR;

//También se puede usar con el atributo setAttribute
//image.setAttribute("src",userAvatar || DEFAULT_AVATAR);


//si lo hacemos con if:
// if (userAvatar === '') {
//     image.src = DEFAULT_AVATAR;
// } else {
//     image.src = userAvatar;
// }

