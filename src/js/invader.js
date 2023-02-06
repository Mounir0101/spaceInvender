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



    var divs = document.querySelectorAll('div');
    var positiontireur = 230;
    divs [positiontireur].classList.add('tireur') ;
    

 

    let tireur = document.querySelector('tireur')

    document.onkeydown = function (e) {
        if (e.key == 'ArrowUp') {
            for(let j = 0; j < 20; j++) {
    
                    let cases = document.querySelector('.tireur')
            
                            cases.classList.remove('tireur')
                            cases.previousElementSibling.classList.add('tireur')                
            }
        }
        if (e.key == 'ArrowDown') {
            for(let j = 0; j < 20; j++) {
                
                    let cases = document.querySelector('.tireur')
            
                            cases.classList.remove('tireur')
                            cases.nextElementSibling.classList.add('tireur')                
            }
        }
        
        if (e.key == 'ArrowLeft') {
          var cases = document.querySelector('.tireur')
           
                cases.classList.remove('tireur')
                cases.previousElementSibling.classList.add('tireur')
            
        }
        var cases = document.querySelector('.tireur')
        if (e.key == 'ArrowRight'){
            cases.classList.remove('tireur')
            cases.nextElementSibling.classList.add('tireur')
        }
    };
}





