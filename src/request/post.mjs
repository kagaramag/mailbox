import config  from './../config.mjs';
import { message } from './../message.mjs';
import { requestGet } from './../request/get.mjs';
export function requestPost(url, VERB, inputs, action, token){
   var xhr = new XMLHttpRequest();
   xhr.open(VERB, url, true);
   console.log(token)
   if(token){ 
     xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    }
   
   //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.onreadystatechange = function(res) { // Call a function when the state changes.
       if (this.readyState === XMLHttpRequest.DONE) {
         var response = JSON.parse(xhr.responseText);
         console.log(response);
         if(!response.error){
           if (xhr.readyState == 4)
           { 
             requestHandler(response, action);
           }
         }else{
          message(response.error,'error');
         }
       }
   }
   xhr.send(inputs);
}

function requestHandler(response, action){
  // register
  if(action === 'register'){
    message("Thank you for signing up with us. Just wait,  we are logging you in ...",'success');
    localStorage.setItem('token', JSON.stringify(response.token));
    setTimeout(() => {
        window.location.href = "inbox.html";            
    }, 2500);
  }
  // Login
  if(action === 'login'){
    message("Logged in, wait a moment...",'success');
    const token = JSON.stringify(response.token);
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
    requestGet(`${config.url}profile`, 'profile', JSON.parse(token));

  }
  // send message
  if(action === 'compose'){
    message('Message was sent successfully!','success');
    document.getElementById("composeMessage").reset();
  }

}