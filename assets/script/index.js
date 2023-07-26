'use strict';

localStorage.setItem('username', 'tamanchichan');
localStorage.setItem('password', 'chichan0218');

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const wrongPassword = document.querySelector('.wrong-password');
const login = document.querySelector('.login');

login.addEventListener('click', () => {
  if (
    username.value === localStorage.getItem('username') &&
    password.value === localStorage.getItem('password')
  ) {
    location.href = 'homepage.html';
  } else {
    wrongPassword.innerText = 'wrong username/password';
    setTimeout(() => {
      wrongPassword.innerText = '';
    }, 5000);
  };
});