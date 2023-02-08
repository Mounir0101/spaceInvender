window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    var listParent = document.getElementById("list");
    var liste = [];

    for (var i = 0; i < 400; i++) {
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






/*
    var coterDroit = true;
    var coterGauche = false;
    var descendreDroit = false;
    var descendreGauche = false;

    setInterval(function() {
        var index = liste.indexOf("alien")
        console.log(index);

        if (coterDroit == true){

            console.log("----->");;
            var div = document.querySelector(".alien"); // Sélectionne la div class="alien"
            div.classList.remove("alien"); // Enleve la class="alien" à la div sélectionnée
            index++; // Ajoute +1 à l'indexe 
            console.log(liste[index]); // Donne les données de la case indexe
            liste[index-1] = "cases" + (index-1); // La case précédente se refait renommer div="cases"+index dans la liste
            liste[index] = "alien"; // La case actuelle est renomée "alien" dans la liste
            var nextAlien = document.querySelector(".cases" + index); // La case précédente se refait renommer div="cases"+index dans la grille
            nextAlien.classList.add("alien"); // La case actuelle est renomée "alien" dans la grille

            if (liste[index+1] == "dataRight"){
                console.log("Arrivé")
                descendreGauche = true;
                descendreDroit = false;
                coterDroit = false;
                coterGauche = false;
            }
            
        }
        else if (coterGauche == true){

            console.log("<-----");
            var div = document.querySelector(".alien"); 
            div.classList.remove("alien");
            index=index-1;
            liste[index+1] = "cases" + (index+1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
            console.log(liste[index-1]);

            if (liste[index-1] == "dataLeft"){
                console.log("Arrivé")
                descendreGauche = false;
                descendreDroit = true;
                coterDroit = false;
                coterGauche = false;
            }

        }
        else if (descendreDroit == true){
            console.log(index);

            console.log("↓ DESD DROIT ->");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            index=index+21;
            console.log(liste[index]);
            liste[index-21] = "cases" + (index-21);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataLeft");
            nextAlien.classList.add("alien");
            

                console.log("va partir sur la droite")
                descendre = false;
                coterDroit = true;
                coterGauche = false;
            


        }
        else if (descendreGauche == true){

            console.log(index);
            console.log("↓ DESC GAUCHE <-");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            index=index+21;
            console.log(liste[index]);
            liste[index-21] = "cases" + (index-21);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataRight");
            nextAlien.classList.add("alien");
            
                console.log("va partir sur la gauche")
                descendre = false;
                coterDroit = false;
                coterGauche = true;
            

        }
        else {

        }
        


    
    }, 1000);
    

}

      else if (i % 20 === 19) { // Tous les multiple de 20-19 pour que ça aille de l'autre coté
        div.className = "dataRight";
        liste.push("dataRight");
      }
        */






/*
    var coterDroit = true;
    var coterGauche = false;
    var descendreDroit = false;
    var descendreGauche = false;

    setInterval(function() {
        var index = liste.indexOf("alien")
        console.log(index);

        if (coterDroit == true){

            console.log("----->");;
            var div = document.querySelector(".alien"); // Sélectionne la div class="alien"
            div.classList.remove("alien"); // Enleve la class="alien" à la div sélectionnée
            index++; // Ajoute +1 à l'indexe 
            console.log(liste[index]); // Donne les données de la case indexe
            liste[index-1] = "cases" + (index-1); // La case précédente se refait renommer div="cases"+index dans la liste
            liste[index] = "alien"; // La case actuelle est renomée "alien" dans la liste
            var nextAlien = document.querySelector(".cases" + index); // La case précédente se refait renommer div="cases"+index dans la grille
            nextAlien.classList.add("alien"); // La case actuelle est renomée "alien" dans la grille

            if (liste[index+1] == "dataRight"){
                console.log("Arrivé")
                descendreGauche = true;
                descendreDroit = false;
                coterDroit = false;
                coterGauche = false;
            }
            
        }
        else if (coterGauche == true){

            console.log("<-----");
            var div = document.querySelector(".alien"); 
            div.classList.remove("alien");
            index=index-1;
            liste[index+1] = "cases" + (index+1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
            console.log(liste[index-1]);

            if (liste[index-1] == "dataLeft"){
                console.log("Arrivé")
                descendreGauche = false;
                descendreDroit = true;
                coterDroit = false;
                coterGauche = false;
            }

        }
        else if (descendreDroit == true){
            console.log(index);

            console.log("↓ DESD DROIT ->");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            index=index+21;
            console.log(liste[index]);
            liste[index-21] = "cases" + (index-21);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataLeft");
            nextAlien.classList.add("alien");
            

                console.log("va partir sur la droite")
                descendre = false;
                coterDroit = true;
                coterGauche = false;
            


        }
        else if (descendreGauche == true){

            console.log(index);
            console.log("↓ DESC GAUCHE <-");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            index=index+21;
            console.log(liste[index]);
            liste[index-21] = "cases" + (index-21);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataRight");
            nextAlien.classList.add("alien");
            
                console.log("va partir sur la gauche")
                descendre = false;
                coterDroit = false;
                coterGauche = true;
            

        }
        else {

        }
        


    
    }, 1000);
    

}

      else if (i % 20 === 19) { // Tous les multiple de 20-19 pour que ça aille de l'autre coté
        div.className = "dataRight";
        liste.push("dataRight");
      }
        */


      /*
window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    var listParent = document.getElementById("list");
    var liste = [];



    for (var i = 0; i < 400; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
       if (i === 10 || i === 9 ){
        div.className = "alien";
        div.classList.remove("cases6");
        liste.push("alien");
      }
      else {
        div.className = "cases"+i;
        liste.push("cases"+i);
      }

    }
    var listeInvaders =[];
    var b = 9;

    for (var x = 0; x < 2; x++){
        var test = liste.indexOf("alien",b);
        listeInvaders.push(test);
        b++;

    }

    var c = 0;
    var indexAvance = [];
    function avance(){
        listeInvaders.forEach(element => {
            listeInvaders[c] = listeInvaders[c] + 1;
            c++;
        });
        indexAvance = listeInvaders;
    }
    function remplace(){
        listeInvaders.forEach(element => {
            console.log(indexAvance[1]);
            var cases = document.querySelector(".cases" + indexAvance[1]-1); // Sélectionne la prochaine case et met dans la liste nextAlien
            var nextAlien = document.querySelector(".cases" + indexAvance[1]); // Sélectionne la prochaine case et met dans la liste nextAlien
            nextAlien.classList.remove("cases"+indexAvance[1]); // Renomme la class de la case par "alien"
            nextAlien.classList.add("alien"); // Renomme la class de la case par "alien"
            cases.classList.add("cases"); // Renomme la class de la case par "alien"
            console.log(nextAlien);
        });
    }


    //console.log(liste);
    console.log(listeInvaders);





    var coterDroit = true;
    var coterGauche = false;
    var descendreDroit = false;
    var descendreGauche = false;

    setInterval(function() {
        var div = document.querySelector(".alien"); // Sélectionne la div class="alien"
        div.classList.remove("alien"); // Enleve la class="alien" à la div sélectionnée
        var index = listeInvaders;
        console.log(index);



        if (coterDroit == true){

            console.log("----->");;
            index++; // Ajoute +1 à l'indexe 
            console.log(liste[index]); // Donne les données de la case indexe
            liste[index-1] = "cases" + (index-1); // La case précédente se refait renommer div="cases"+index dans la liste
            liste[index] = "alien"; // La case actuelle est renomée "alien" dans la liste
            var nextAlien = document.querySelector(".cases" + index); // La case précédente se refait renommer div="cases"+index dans la grille
            nextAlien.classList.add("alien"); // La case actuelle est renomée "alien" dans la grille
            if (index % 20 === 19) { // Tous les multiple de 20 pour que ça aille de l'autre coté
                console.log("Coter Droit")
                descendreGauche = true;
                descendreDroit = false;
                coterDroit = false;
                coterGauche = false;
              }

            
        }
        else if (coterGauche == true){

            console.log("<-----");
            index=index-1;
            liste[index+1] = "cases" + (index+1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
            console.log(liste[index-1]);
            if (index % 20 === 0) { // Tous les multiple de 20 pour que ça aille de l'autre coté
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
            index=index+20;
            console.log(liste[index]);
            liste[index-20] = "cases" + (index-20);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
            

                console.log("va partir sur la droite")
                descendre = false;
                coterDroit = true;
                coterGauche = false;
            


        }
        else if (descendreGauche == true){

            console.log("↓ DESC GAUCHE <-");;
            index=index+20;
            
            console.log(liste[index]);
            console.log(index);
            liste[index-20] = "cases" + (index-20);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
            
                console.log("va partir sur la gauche")
                descendre = false;
                coterDroit = false;
                coterGauche = true;
            

        }
        else {

        }
        


    
    }, 5000);
    

}






/*
    var coterDroit = true;
    var coterGauche = false;
    var descendreDroit = false;
    var descendreGauche = false;

    setInterval(function() {
        var index = liste.indexOf("alien")
        console.log(index);

        if (coterDroit == true){

            console.log("----->");;
            var div = document.querySelector(".alien"); // Sélectionne la div class="alien"
            div.classList.remove("alien"); // Enleve la class="alien" à la div sélectionnée
            index++; // Ajoute +1 à l'indexe 
            console.log(liste[index]); // Donne les données de la case indexe
            liste[index-1] = "cases" + (index-1); // La case précédente se refait renommer div="cases"+index dans la liste
            liste[index] = "alien"; // La case actuelle est renomée "alien" dans la liste
            var nextAlien = document.querySelector(".cases" + index); // La case précédente se refait renommer div="cases"+index dans la grille
            nextAlien.classList.add("alien"); // La case actuelle est renomée "alien" dans la grille

            if (liste[index+1] == "dataRight"){
                console.log("Arrivé")
                descendreGauche = true;
                descendreDroit = false;
                coterDroit = false;
                coterGauche = false;
            }
            
        }
        else if (coterGauche == true){

            console.log("<-----");
            var div = document.querySelector(".alien"); 
            div.classList.remove("alien");
            index=index-1;
            liste[index+1] = "cases" + (index+1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
            console.log(liste[index-1]);

            if (liste[index-1] == "dataLeft"){
                console.log("Arrivé")
                descendreGauche = false;
                descendreDroit = true;
                coterDroit = false;
                coterGauche = false;
            }

        }
        else if (descendreDroit == true){
            console.log(index);

            console.log("↓ DESD DROIT ->");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            index=index+21;
            console.log(liste[index]);
            liste[index-21] = "cases" + (index-21);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataLeft");
            nextAlien.classList.add("alien");
            

                console.log("va partir sur la droite")
                descendre = false;
                coterDroit = true;
                coterGauche = false;
            


        }
        else if (descendreGauche == true){

            console.log(index);
            console.log("↓ DESC GAUCHE <-");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            index=index+21;
            console.log(liste[index]);
            liste[index-21] = "cases" + (index-21);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataRight");
            nextAlien.classList.add("alien");
            
                console.log("va partir sur la gauche")
                descendre = false;
                coterDroit = false;
                coterGauche = true;
            

        }
        else {

        }
        


    
    }, 1000);
    

}

      else if (i % 20 === 19) { // Tous les multiple de 20-19 pour que ça aille de l'autre coté
        div.className = "dataRight";
        liste.push("dataRight");
      }

       || i===21 || i===22 || i===23 || i===24 || i===25 || i===26 || i===27 || i===28 || i===29 || i===30 || i===31 || i===32 || i===41 || i===42 || i===43 || i===44 || i===45 || i===46 || i===47 || i===48 ||  i===49 || i===50 || i===51 || i===52
        */
      