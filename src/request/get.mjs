import { message } from './../message.mjs';
import { loading } from './../loading.mjs';
export function requestGet(url, page, token){
  loading('green');
  function request () {
    const res = this.responseText;
    if(page == 'inbox'){
      inbox(res);
    }

    if(page == 'users'){
      users(res);
    }
    
    if(page == 'profile'){
      profile(res);
    }
  }  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", request);
  xhr.open("GET", url, true);
  xhr.onerror = function(){console.log(xhr.status)} 
  xhr.setRequestHeader(`Authorization`, `Beader ${token}`);
  xhr.send();
}

function inbox(res) {
  loading('red');
  if(res.error){
    message(res.error, 'error');
  }else{
    res = JSON.parse(res);
    var mails = Object.values(res);
    const mailer = document.getElementById("mailer");
    console.log(mails);
    if(res.status === 201 || res.status === 200){
      mails[1].forEach(key => {
        mailer.insertAdjacentHTML('beforeend', `
        <div class="onemail">
          <div class="m_profile hide-on-medium hide-on-small"><img src="images/user.png" alt="Profile"></div>
          <div class="m_sender truncate hoverMailToRead" onclick="readmail('+mail.id+');"><span class="bold"> ${names(key.firstname, key.lastname, key.email)} </span> <span class="text-grey text-darken-2"> ${key.email} <span class="nobold hide-on-large s-text right text-grey"> ${formatDateTime(key.createdon)}</span></span><br><span class="m-text text-grey text-darken-2">${key.message}</span></div>
          <div class="m_time hide-on-medium right s-text hide-on-small">${formatDateTime(key.createdon)}</div>
          <div class="m_action right-align hide-on-medium hide-on-small">
          <a href="#"><span class="fas fa-trash-alt" title="Delete"></span></a>
          <a href="#"><span class="fas fa-undo-alt" title="Retract"></span></a>
          <a href="#"><span class="fas fa-comment-alt" title="Instant Reply"></span></a>
          </div>
          <div class="clear"></div></div>
        `);
      });
    }else if(res.status === 404){
      mailer.insertAdjacentHTML('afterend', `
      <div id="noContent" class="center center-align">
        <br>
        <div class="image center" style="width:80px">
              <img src="images/nofound.png" alt="noContent">
        </div>
        <br>
        <div class="l-text">
              It's lonely here.<br> You did reveive any message yet!
        </div>
    </div>      
      `);
    }else{
      message(res.error, "error")
    }
  }
}

function users(res){
  console.log(res);
}

function profile(res){
  localStorage.setItem('profile', res);
  setTimeout(() => {
      window.location.href = "inbox.html";            
  }, 2500);
}
// format date
function formatDateTime(date){
   var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]
   const d = date.split('-');
   return months[parseInt(d[1])-1]+" "+d[1];
}

//names
function names(f,l,e){
  let names = `${l} ${f}`;
  const p = JSON.parse(localStorage.getItem('profile'));
  console.log(p.data[0].email == e)
  if(p.data[0].email == e){
    names = 'Me'
  }
  return names;
}