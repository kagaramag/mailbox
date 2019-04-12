import { message } from './message.mjs';

const sidebar = document.getElementById("sidebar");
const doc = document.documentElement;
// set sidebar height
sidebar.style.height = `${doc.clientHeight}px`;
// resize sidebar height on screen change
window.addEventListener('resize', resize);
function resize() {
   sidebar.style.height = `${document.documentElement.clientHeight}px`;
}



// build sidebar nav
sidebar.innerHTML = `
<li><div class="center-align"><a href="./inbox.html"><img src="images/logo.svg" style="width:98%;max-width:200px" alt="EPICMAIL"></a></div></li>
   <li><div class="divider indigo darken-2"></div></li>
   <li><a class="text-grey" href="inbox.html"> <span class="fas fa-inbox"></span> <span class="menulink">Inbox</a></span></li>
   <li><a class="text-grey" href="sent.html"> <span class="fas fa-location-arrow"></span> <span class="menulink"> Sent</span></a></li>
   <li><a class="text-grey" href="draft.html"> <span class="fas fa-sticky-note"></span> <span class="menulink"> Drafts</a></span></li>
   <li><div class="divider indigo darken-2"></div></li>
   <li><a class="text-grey" href="groups.html"> <span class="fas fa-user-friends"></span> <span class="menulink"> Groups</span></a></li>
   <li><a class="text-grey truncate" href="groups.html"> <span class="fas fa-angle-right"></span> <span class="menulink"> Rockers </span></a></li>
   <li><a class="text-grey truncate" href="groups.html"> <span class="fas fa-angle-right"></span> <span class="menulink"> Meat Lovers </span></a></li>
   <li><a class="text-grey truncate" href="groups.html"> <span class="fas fa-angle-right"></span> <span class="menulink"> Hoddies </span></a></li>
   <li><a class="text-grey truncate" href="groups.html"> <span class="fas fa-angle-right"></span> <span class="menulink"> DJ Units </span></a></li>
   <li><div class="divider indigo darken-2"></div></li>
   <li><a class="text-grey" href="me.html"> <span class="fas fa-user"></span> <span class="menulink"> Profile</span></a></li>
   <li id="logout" class="logout"><a class="text-grey" href="#"> <span class="fas fa-sign-out-alt"></span> <span class="menulink"> Logout</span></a></li>
`

// mobile footer links
const footer = document.getElementById("footer");
footer.innerHTML = `
   <div><a href="inbox.html"><span class="fas fa-inbox"></span></a></div>
   <div><a href="sent.html"><span class="fas fa-location-arrow"></span></a></div>
   <div><a href="draft.html"><span class="fas fa-sticky-note"></span></a></div>
   <div><a href="groups.html"><span class="fas fa-user-friends"></span></a></div>
`
// top header quick links
const fixheader = document.getElementById("fixheader");
fixheader.innerHTML = `
   <div class="row">
   <div class="s3 m3 l3">
   <a class="btn l-h-padding grey darken-1 radius-5" href="./compose.html"><span class="fas fa-plus"></span> <span class="hide-on-small">Compose</span></a>
   <span class="text-black l-text hide-on-small">${fixheader.getAttribute('data-page')}</span>
   </div>
   <div class="s1 m1 l1 right-align">
   <a class="btn grey darken-1 l-h-padding radius-5" href="./me.html"><span class="fas fa-user"></span> <span class="bold hide-on-small">@Gilles</b></a>
   </div>
   </div>
`

// logout
const logout = document.getElementById("logout");
logout.addEventListener("click", logoutFx);
function logoutFx(){
   localStorage.removeItem("token");
   message("Logged out successfully", "info");
   setTimeout(() => {
      window.location.href = './login.html';
   }, 2000);
}

