export function message(message,state){
   const el = document.getElementById("message");
   el.innerHTML = message;
   el.className = state;
   el.style.display = 'block';
}