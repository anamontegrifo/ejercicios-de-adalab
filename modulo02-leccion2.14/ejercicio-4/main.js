'use strict';

const box = document.querySelector('.js-box');

const showMessage = () => {
	box.classList.remove('hidden');
};

setTimeout(showMessage, 15000);
