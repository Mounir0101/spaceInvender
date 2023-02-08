window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    for (var i = 0; i < 240; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
      if (i===1 /*|| /*i===2 || i===3 || i===4 || i===5 || i===6 || i===7 || i===8 || i===9 || i===10 || i===11 || i===12*/){
        div.className = "alien";
        liste.push("alien");
      }
      else {
        div.className = "case" + i;
        liste.push("case" + i);
      }
    }
    
    var listeInvaders = [];
    var b = 1;
    
    for (var x = 0; x < 1; x++){
        var index = liste.indexOf("alien", b);
        listeInvaders.push(index);
        b++;
    }
    
    function avanceDroit() {
        for (var i = 0; i < listeInvaders.length; i++) {
            listeInvaders[i] = listeInvaders[i] + 1;
        }
    }
    
    function avanceGauche() {
        for (var i = 0; i < listeInvaders.length; i++) {
            listeInvaders[i] = listeInvaders[i] - 1;
        }
    }
    
    function avDescendre() {
        for (var i = 0; i < listeInvaders.length; i++) {
            listeInvaders[i] = listeInvaders[i] + 20;
        }
    }
    
    function remplaceListeDroit() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            liste[index - 1] = "case" + (index - 1);
            liste[index] = "alien";
        }
    }
    function remplaceListeGauche() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            liste[index + 1] = "case" + (index + 1);
            liste[index] = "alien";
        }
    }

    function remplaceListeDescendGauche() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            liste[index - 20] = "case" + (index - 20);
            liste[index] = "alien";
        }
        console.log("remplaceListeDescendGauche")
    }
    function remplaceListeDescendDroit() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            liste[index + 20] = "case" + (index + 20);
            liste[index] = "alien";
        }
        console.log("remplaceListeDescendGauche")
    }
    
    function remplaceGrilleDroit() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            var nextAlien = document.querySelector(".case" + index);
            nextAlien.classList.add("alien");
        }
    }
    function remplaceGrilleGauche() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            var nextAlien = document.querySelector(".case" + index);
            nextAlien.classList.add("alien");
        }
    }

    function remplaceGrilleDescendGauche() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            var nextAlien = document.querySelector(".case" + index);
            nextAlien.classList.add("alien");
        }
        console.log("remplaceGrilleDescendGauche")

    }
    function remplaceGrilleDescendDroit() {
        for (var i = 0; i < listeInvaders.length; i++) {
            var index = listeInvaders[i];
            var nextAlien = document.querySelector(".case" + index);
            nextAlien.classList.add("alien");
        }
        console.log("remplaceGrilleDescendGauche")

    }
    
    function supprimeAlien() {
        var div = document.querySelector(".alien");
        div.classList.remove("alien");
    }
    

    console.log(liste);   
    console.log(listeInvaders);








    var coterDroit = true;
    var coterGauche = false;
    var descendreDroit = false;
    var descendreGauche = false;

    var index = listeInvaders[0];

    setInterval(function() {
        supprimeAlien();
        console.log(index);
        console.log(listeInvaders);



        if (coterDroit == true){

            console.log("----->");;
            avanceDroit();
            console.log(liste[index]); // Donne les données de la case indexe
            remplaceListeDroit();
            remplaceGrilleDroit();

            if (listeInvaders[0] % 20 === 19) { // Tous les multiple de 20 pour que ça aille de l'autre coté
                console.log("Coter Droit")
                descendreGauche = true;
                descendreDroit = false;
                coterDroit = false;
                coterGauche = false;
              }

            
        }
        else if (coterGauche == true){

            console.log("<-----");
            avanceGauche();
            remplaceListeGauche();
            remplaceGrilleGauche();
            console.log(liste[index-1]);
            if (listeInvaders[0] % 20 === 0) { // Tous les multiple de 20 pour que ça aille de l'autre coté
                console.log("Coter Droit")
                descendreGauche = false;
                descendreDroit = true;
                coterDroit = false;
                coterGauche = false;
              }

        }
        else if (descendreDroit == true){
            console.log(index);

            console.log("↓ DESD DROIT ->");;

            avDescendre();

            console.log(liste[index]);
            console.log(index);
            
            remplaceListeDescendDroit();

            remplaceGrilleDescendDroit();
            

                console.log("va partir sur la droite")
                descendre = false;
                coterDroit = true;
                coterGauche = false;
            


        }
        else if (descendreGauche == true){

            console.log("↓ DESC GAUCHE <-");;

            avDescendre();

            console.log(liste[index]);
            console.log(index);
            
            remplaceListeDescendGauche();

            remplaceGrilleDescendGauche();
            
                console.log("va partir sur la gauche")
                descendre = false;
                coterDroit = false;
                coterGauche = true;
            

        }
        else {

        }
        


    
    }, 1000);
    

}

//////////////////////// vaisseau ////////////////////////////

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

////////////////////////////////////////////////////////////////


}

      else if (i % 20 === 19) { // Tous les multiple de 20-19 pour que ça aille de l'autre coté
        div.className = "dataRight";
        liste.push("dataRight");
      }
        */
      