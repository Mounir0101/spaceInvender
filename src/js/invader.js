window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    var listParent = document.getElementById("list");
    var liste = [];

    for (var i = 0; i < 400; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
      if (i % 20 === 0) { // Tous les multiple de 20
        div.className = "dataLeft";
        liste.push("dataLeft");
      }
      else if (i % 20 === 19) { // Tous les multiple de 20-19 pour que ça aille de l'autre coté
        div.className = "dataRight";
        liste.push("dataRight");
      }
      else if (i === 10 ){
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
    var descendre = false;

    setInterval(function() {

        if (coterDroit == true){

            console.log("----->");;
            var div = document.querySelector(".alien"); // Sélectionne la div class="alien"
            div.classList.remove("alien"); // Enleve la class="alien" à la div sélectionnée
            var index = liste.indexOf("alien"); // Récupere l'index de la liste ou se situe une div "alien"
            index++; // Ajoute +1 à l'indexe 
            console.log(liste[index]); // Donne les données de la case indexe
            liste[index-1] = "cases" + (index-1); // La case précédente se refait renommer div="cases"+index dans la liste
            liste[index] = "alien"; // La case actuelle est renomée "alien" dans la liste
            var nextAlien = document.querySelector(".cases" + index); // La case précédente se refait renommer div="cases"+index dans la grille
            nextAlien.classList.add("alien"); // La case actuelle est renomée "alien" dans la grille

            if (liste[index+1] == "dataRight"){
                console.log("Arrivé")
                descendre = true;
                coterDroit = false;
                coterGauche = false;
            }
            
        }
        else if (coterGauche == true){

            console.log("<-----");
            var div = document.querySelector(".alien"); 
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index=index-1;
            console.log(liste[index]);
            liste[index+1] = "cases" + (index+1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
            console.log(liste[index-1]);

            if (liste[index-1] == "dataLeft"){
                console.log("Arrivé")
                descendre = true;
                coterDroit = false;
                coterGauche = false;
            }

        }
        else if (descendre == true){

            console.log("↓");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index=index+21;
            console.log(liste[index]);
            liste[index-21] = "cases" + (index-21);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataRight");
            nextAlien.classList.add("alien");
            

            if (liste[index-1] == "dataLeft"){
                console.log("va partir sur la droite")
                descendre = false;
                coterDroit = true;
                coterGauche = false;
            }
            else {
                console.log("va partir sur la gauche")
                descendre = false;
                coterDroit = false;
                coterGauche = true;
            }

        }
        else {

        }
        


    
    }, 1000);
    

}




/*
    setInterval(function() {
        var div = document.querySelector(".alien");
        div.classList.remove("alien");
        var index = liste.indexOf("alien");
        index++;
        console.log(liste[index]);
        if (liste[index] == "dataRight"){
            console.log("sur dataRight");
            index=index+20;
            liste[index-20] = "dataRight";
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataRight");
            nextAlien.classList.add("alien");
            console.log(liste);
            index=index-5;
        }
        liste[index-1] = "cases" + (index-1);
        liste[index] = "alien";
        var nextAlien = document.querySelector(".cases" + index);
        nextAlien.classList.add("alien");

    
    }, 1000);
    */

    /*
            if (coterDroit == true){
            console.log("----->");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index++;
            console.log(liste[index]);
            liste[index-1] = "cases" + (index-1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
        }
        else if (coterGauche == true){
            console.log("<-----");
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index=index-1;
            console.log(liste[index]);
            liste[index-1] = "cases" + (index-1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".cases" + index);
            nextAlien.classList.add("alien");
        } else {
            console.log("ok");
        }
        if (liste[index+1] == "dataRight"){
            console.log("Coter Droit");
            console.log(coterDroit);


            console.log("----->");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index++;
            console.log(liste[index]);
            liste[index-1] = "cases" + (index-1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataRight");
            nextAlien.classList.add("alien");

            console.log("↓");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index=index+20;
            console.log(liste[index]);
            liste[index-20] = "cases" + (index-20);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataRight");
            nextAlien.classList.add("alien");

            coterDroit = false;
            coterGauche = true;
        }
        else if (liste[index-1] == "dataLeft"){
            console.log("Coter Gauche");
            console.log(coterGauche);


            console.log("<-----");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index--;
            console.log(liste[index]);
            liste[index+1] = "cases" + (index+1);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataLeft");
            nextAlien.classList.add("alien");

            console.log("↓");;
            var div = document.querySelector(".alien");
            div.classList.remove("alien");
            var index = liste.indexOf("alien");
            index=index+20;
            console.log(liste[index]);
            liste[index-20] = "cases" + (index-20);
            liste[index] = "alien";
            var nextAlien = document.querySelector(".dataLeft");
            nextAlien.classList.add("alien");

            coterDroit = true;
            coterGauche = false;
        }
        */