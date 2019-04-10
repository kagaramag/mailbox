

const url = "http://localhost:3000/api/v2/auth/signup";
  var register = document.getElementById('register');
  register.onsubmit = function(e) {
    e.preventDefault();
    message("wait...", "info")
    const user = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      password : document.getElementById("password").value
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

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
            message(response.error, "error")
          }
        }else{
          console.log(this.status);
        }
    }
    xhr.send(`firstname=${user.firstname}&lastname=${user.lastname}&email=${user.email}&password=${user.password}`);
    // xhr.send("foo=bar&lorem=ipsum");
  }