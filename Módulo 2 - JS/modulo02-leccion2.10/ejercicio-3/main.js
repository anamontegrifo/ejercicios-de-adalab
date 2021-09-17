'use strict';
const searchBtn = document.querySelector('.js-search');
const inputName = document.querySelector('.js-input');
const userName = document.querySelector('.js-userName');
const image = document.querySelector('.js-userImage');
const repo = document.querySelector('.js-repo');

function completeUrl() {
	let userName = inputName.value;
	let url = `https://api.github.com/users/${userName}`;
	return url;
}

function getAGithubUser() {
	let url = completeUrl();

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			userName.innerHTML = data.login;
			image.src = data.avatar_url;
			repo.innerHTML = data.public_repos;
		});
}

searchBtn.addEventListener('click', getAGithubUser);
