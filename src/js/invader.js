window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    for (var i = 0; i < 400; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
      if (i % 20 === 0) { // Tous les multiple de 20
        div.className = "dataLeft";
      }
      if (i % 20-19 === 0) { // Tous les multiple de 20-19 pour que ça aille de lautre coté
        div.className = "dataRight";
      }
    }

    
}





