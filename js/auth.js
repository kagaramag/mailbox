$(function(){
   var auth = JSON.parse(localStorage.getItem('token'));
   if(!auth || auth === ''){
      window.location.href = "login.html";
   }else{
      $(".userEmail").html("john@doe.com");
      // console.log(auth)
   }
})