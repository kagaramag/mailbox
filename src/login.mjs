import config  from './config.mjs';
import { requestPost } from './request/post.mjs';
import { message } from './message.mjs';

// // register

const btn = document.getElementById('loginNow');
btn.addEventListener('click', submit);
function submit(e) {
    message("wait...", "info");
    const user = {
      email: document.getElementById("email").value,
      password : document.getElementById("password").value
    };
    const inputs = `email=${user.email}&password=${user.password}`;
    requestPost(`${config.url}auth/login`, 'POST', inputs, 'login', null);
    e.preventDefault();
}

