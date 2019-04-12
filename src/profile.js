// check profile info
const profile = JSON.parse(localStorage.getItem('profile'));
if(profile || profile !== '' || profile !== null){
    console.log(profile.data[0]);
    document.getElementById("userNames").innerHTML = `${profile.data[0].firstname} ${profile.data[0].lastname}`;
    document.getElementById("userEmail").innerHTML = profile.data[0].email;
}
//