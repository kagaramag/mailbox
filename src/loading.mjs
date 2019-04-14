export function loading(state){
      if(state === 'inline'){
      document.getElementById("loading").insertAdjacentHTML('afterend', `
            <div id="loading" class="center center-align">
            <br>
            <div class="image center" style="width:80px">
                  <img src="images/nofound.png" alt="noContent">
            </div>
            <br>
            <div class="l-text">
                  Loading content...
            </div>
      </div>      
      `);
      }else{
            document.getElementById("loading").style.display = 'none'; 
      }
}