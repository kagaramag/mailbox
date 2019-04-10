
 const token = JSON.parse(localStorage.getItem('token'));
if(!token || token === ''){
   console.log(token.split('.')[1]);
   window.location.href = "login.html";
}

export default token ;