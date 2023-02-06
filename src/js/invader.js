window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    var listParent = document.getElementById("list");
    var liste = [];

    for (var i = 0; i < 400; i++) {
      var div = document.createElement("div");
      parent.appendChild(div);
      if (i % 20 === 0) { 
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

    setInterval(function() {
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


    
    }, 1000);
    

}





