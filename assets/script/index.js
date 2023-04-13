'use strict';

localStorage.setItem('name', 'Taman Chi Chan');
localStorage.setItem('profession', 'Software Developer');
localStorage.setItem('city', 'Winnipeg');

const username = document.querySelector('.username');
const profession = document.querySelector('.profession');
const city = document.querySelector('.city');

username.innerText = localStorage.getItem('name');
profession.innerText = localStorage.getItem('profession');
city.innerText = localStorage.getItem('city');