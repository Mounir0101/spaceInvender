window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    for (var i = 0; i < 240; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
      if (i % 20 === 0) { // Tous les multiple de 20
        div.className = "dataLeft";
      }
      if (i % 20-19 === 0) { // Tous les multiple de 20-19 pour que ça aille de lautre coté
        div.className = "dataRight";
      }
    }



    var divs = document.querySelectorAll('#grille div');
    var positiontireur = 230;
    divs[positiontireur].classList.add('tireur') ;
    

 

    let tireur = document.querySelector('tireur')

    document.onkeydown = function (e) {

      divs[positiontireur].classList.remove('tireur') ;

      if (e.key == 'ArrowUp') {
        if (positiontireur > 173)
        positiontireur -= 20;
      }
      if (e.key == 'ArrowDown') {
          if(positiontireur < 220)
        positiontireur += 20 
      }
      
      if (e.key == 'ArrowLeft') {
        if (positiontireur >220)
        positiontireur -= 1 
        
        
          
      }
      
      
      if (e.key == 'ArrowRight'){  

        if (positiontireur <239)
        positiontireur += 1
        
        
      }
      console.log(divs);
      console.log(positiontireur);
      
        divs[positiontireur].classList.add('tireur') ;
      };
}





