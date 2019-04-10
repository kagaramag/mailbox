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
    console.log(mails)

    mails[1].forEach(key => {
      const mailer = document.getElementById("mailer");
      mailer.insertAdjacentHTML('beforeend', `
      <div class="onemail">
         <div class="m_profile hide-on-medium hide-on-small"><img src="http://via.placeholder.com/32x32.png?text=A" alt="Profile"></div>
         <div class="m_sender truncate hoverMailToRead" onclick="readmail('+mail.id+');"><span class="bold">${key.subject}<span class="nobold hide-on-large s-text right text-grey"> ${formatDateTime(key.createdon)}</span></span><br><span class="m-text text-grey text-darken-2">${key.message}</span></div>
         <div class="m_time hide-on-medium right s-text hide-on-small">${formatDateTime(key.createdon)}</div>
         <div class="m_action right-align hide-on-medium hide-on-small">
         <a href="#"><span class="fas fa-trash-alt" title="Delete"></span></a>
         <a href="#"><span class="fas fa-undo-alt" title="Retract"></span></a>
         <a href="#"><span class="fas fa-comment-alt" title="Instant Reply"></span></a>
         </div>
         <div class="clear"></div></div>
      `);
    });
  }
}

// format date
function formatDateTime(date){
   var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]
   const d = date.split('-');
   return months[parseInt(d[1])-1]+" "+d[1];
}