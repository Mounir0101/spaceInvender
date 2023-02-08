window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    var listParent = document.getElementById("list");
    var liste = [];

    for (var i = 0; i < 400; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
       if (i === 10 ){
        div.className = "alien";
        div.classList.remove("cases6");
        liste.push("alien");
      }
      else {
        div.className = "cases"+i;
        liste.push("cases"+i);
      }

    }

    console.log(liste);





    var coterDroit = true;
    var coterGauche = false;
    var descendreDroit = false;
    var descendreGauche = false;

    setInterval(function() {
        var div = document.querySelector(".alien"); // Sélectionne la div class="alien"
        div.classList.remove("alien"); // Enleve la class="alien" à la div sélectionnée
        var index = liste.indexOf("alien")
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