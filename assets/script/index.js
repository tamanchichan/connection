'use strict';

localStorage.setItem('user-name', 'Taman Chi Chan');
localStorage.setItem('profession', 'Software Developer');
localStorage.setItem('city', 'Winnipeg');

const userName = document.querySelector('.user-name');
const profession = document.querySelector('.profession');
const city = document.querySelector('.city');

userName.innerText = localStorage.getItem('user-name');
profession.innerText = localStorage.getItem('profession');
city.innerText = localStorage.getItem('city');

const url = 'https://randomuser.me/api/?nat=ca&results=7';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  mode: 'cors',
};

async function getUsers() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status} error`);
    }
    const data = await response.json();
    
    for (let i = 0; i < data.results.length; i++) {
      let image =
      `${data.results[i].picture.large}`;
      let fullName =
      `${data.results[i].name.first} ${data.results[i].name.last}`;
      let city =
      `${data.results[i].location.city}`;
      
      generateUser(image, fullName, city);
    };
  } catch (error) {
    console.log(error.message);
  };
};

const columnThree = document.querySelector('.column-3');

function generateUser(image, fullName, city) {
  const div = document.createElement('div');
  div.classList.add('users');
  div.innerHTML =
    `<div class='users-ico' style='background-image:url(${image}')></div>` +
    `<div class='users-info'>` +
      `<div class='users-name'>${fullName}</div>` +
      `<div class='users-city'>${city}</div>` +
    `</div>` +
    `<button type='button'>+</button>`;
  
  columnThree.appendChild(div);
};

getUsers();