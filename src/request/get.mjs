import { message } from './../message.mjs';
export function requestGet(url, page){
  function request () {
    const res = this.responseText;
    if(page == 'inbox'){
      inbox(res);
    }
   
  }  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", request);
  xhr.open("GET", url, true);
  xhr.setRequestHeader(`Authorization`, `Beader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0MTQ1Mjg0fQ.A_B1oESLY-U5VnXextyfCv-pGQvDKo0-1FA6yAticbk`);
  xhr.send();
}

function inbox(res) {
  if(res.error){
    message(res.error, 'error');
  }else{
    var mails = Object.values(JSON.parse(res));
    // const mailer = document.getElementById("mailer");
    mails.forEach(key => {
      console.log(key)
    });
  }
}