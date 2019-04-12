
const token = JSON.parse(localStorage.getItem('token'));
if(!token || token === '' || token === null){
   window.location.href = "login.html";
}

export default token ;
