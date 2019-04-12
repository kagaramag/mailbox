import config  from './config.mjs';
import token from './auth.mjs';
import { requestPost } from './request/post.mjs';
import { requestGet } from './request/get.mjs';
import { message } from './message.mjs';

// compose
const btn = document.getElementById('sendNow');
// register.onsubmit = submit.bind(register);
btn.addEventListener('click', send);
function send(e) {
    message('Waiting...','info');
    const memo = {
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        memo: document.getElementById("memo").value
    };
    if(!memo.memo || memo.memo.length > 10){
    const inputs = `subject=${memo.subject}&message=${memo.memo}&email=${memo.email}`;
    console.log(inputs);
    requestPost(`${config.url}messages`, 'POST', inputs, 'compose', token);
    }else{
        message('Error occured, check your inputs...','error');
    }
    e.preventDefault();
}

// load users
requestGet(`${config.url}users`, 'users');

