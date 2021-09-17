'use strict';
//preview
const nameElement = document.querySelector('.js_name');
const namePreviewElement = document.querySelector('.js_previewName');
const formElement = document.querySelector('.js_form');

// function handleName() {
//     console.log(nameElement.value);
//     namePreviewElement.innerHTML = nameElement.value;
// }

// nameElement.addEventListener('keyup', handleName);

// function handleForm(ev) {
//     console.log(ev.currentTarget);
//     console.log(ev.currentTarget.id);
// }

// formElement.addEventListener('change', handleForm);



//objeto para dar estructura a la tarjeta
const data = {
    palette: '',//el nombre tiene que coincidir con el id o el name de cada input
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
}

const form = document.querySelector('.js_form');

function handleFormData(ev) {
    const inputId = ev.target.name; //o ev.target.id
    const inputValue = ev.target.value;
    console.log(inputId, inputValue);

    //primera forma de introducir los datos en el objeto
    // if (inputId === "name") {
    //     data.name = inputValue;
    // }
    // else if (inputId === "job") {
    //     data.job = inputValue;

    // }

    //segunda forma
    data[inputId] = inputValue;

    console.log(data);

}

form.addEventListener('change', handleFormData);
