import { message } from './../message.mjs';
export function requestPost(url, VERB, inputs){
   var xhr = new XMLHttpRequest();
   xhr.open(VERB, url, true);
   //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.onreadystatechange = function(res) { // Call a function when the state changes.
       if (this.readyState === XMLHttpRequest.DONE) {
         var response = JSON.parse(xhr.responseText);
         if(!response.error){
           if (xhr.readyState == 4)
           { 
             message("Thank you for signing up with us. Just wait,  we are logging you in ...",'success');
             localStorage.setItem('token', JSON.stringify(response.token));
             setTimeout(() => {
                 window.location.href = "inbox.html";            
             }, 2500);
           }
         }else{
          message(response.error,'error');
         }
       }
   }
   xhr.send(inputs);
}