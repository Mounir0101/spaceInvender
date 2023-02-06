window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    for (var i = 0; i < 400; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
      if (i % 20 === 0) { 
        div.className = "dataLeft";
      }
      if (i % 20-19 === 0) { 
        div.className = "dataRight";
      }
    }

    
}

///////////////////////////////////// Tir du vaisseau ///////////////////////////////////////////////

function tirer() {
    var parent = document.getElementById("grille");
    var div = document.createElement("div");
    div.className = "laser";
    div.style.top = "500px"; // Position initiale du tir
    div.style.left = "1200px"; // Position initiale du tir
    parent.appendChild(div);
    var vitesse = setInterval(function() {
      var top = parseInt(div.style.top);
      top -= 10; // Déplacement du tir vers le haut
      div.style.top = top + "px";      
      if (top <= 85) {
        clearInterval(vitesse); // Arrêt de l'animation lorsque le tir sort de la grille
        parent.removeChild(div); // Suppression du tir du DOM
      } 
    }, 30); 

    document.onkeydown = function(e) {
        switch (e.keyCode) {
        case 37:
        var left = parseInt(div.style.left);
        left -= 20; // Déplacement du tir vers la gauche
        div.style.left = left + "px";
        break;
        case 39:
        var left = parseInt(div.style.left);
        left += 20; // Déplacement du tir vers la droite
        div.style.left = left + "px";
        break;
        }
        };
  }
  
  
  
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    tirer();
  }
});
  
//////////////////////////////////////////////////////////////////////////////////////////////
