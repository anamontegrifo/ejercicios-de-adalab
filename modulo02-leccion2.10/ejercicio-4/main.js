'use strict';
const searchBtn = document.querySelector('.js-search');
const inputName = document.querySelector('.js-input');
const list = document.querySelector('.js-list');
let content = '';

// function completeUrl() {
//     let userName = inputName.value;
//     let url = `https://api.github.com/orgs/${userName}/repos`;
//     return url;
// }

// function getAGithubUser() {
//     let url = completeUrl();

//     fetch(url)
//         .then(response => response.json())
//         .then(orgData => {
//             for (const data of orgData) {
//                 const orgContent = `<li>${data.name}</li>`;
//                 content += orgContent;
//             }
//             list.innerHTML = content;
//         })
// }


function completeUrl() {
    let userName = inputName.value;
    let url = `https://api.github.com/orgs/${userName}`;
    return url;
}

function getAGithubUser() {
    let url = completeUrl();

    fetch(url)
        .then(response => response.json())
        .then(orgData => {
            const reposUrl = orgData.repos_url;
            return fetch(reposUrl);
        })
        .then(repoResponse => repoResponse.json())
        .then(orgRepos => {
            for (const repo of orgRepos) {
                const reposContent = `<li>${repo.name}</li>`;
                content += reposContent;
            }
            list.innerHTML = content;
        })
}

searchBtn.addEventListener('click', getAGithubUser);