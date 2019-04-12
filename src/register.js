import config  from './config.mjs';
import { requestPost } from './request/post.mjs';


// // register

const btn = document.getElementById('registerNow');
btn.addEventListener('click', submit);
function submit(e) {
    message("wait...", "info");
    const user = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      password : document.getElementById("password").value
    };
    const inputs = `firstname=${user.firstname}&lastname=${user.lastname}&email=${user.email}&password=${user.password}`;
    requestPost(`${config.url}auth/signup`, 'POST', inputs, 'register', null);
    e.preventDefault();
}

