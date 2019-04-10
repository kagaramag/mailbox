import config  from './config.mjs';
import token from './auth.mjs';
import { requestPost } from './request/post.mjs';
import { message } from './message.mjs';

// compose
const btn = document.getElementById('sendNow');
// register.onsubmit = submit.bind(register);
btn.addEventListener('click', send);
function send(e) {
    message('Waiting...','info');
    const memo = {
        subject: document.getElementById("subject").value,
        memo: document.getElementById("memo").value,
        receiverid: 2
    };
    if(!memo.memo || memo.memo.length > 10){
    const inputs = `subject=${memo.subject}&message=${memo.memo}&receiverid=${memo.receiverid}`;
    console.log(inputs);
    requestPost(`${config.url}messages`, 'POST', inputs, 'compose', token);
    }else{
        console.log("andika sha")
    }
    e.preventDefault();
}

