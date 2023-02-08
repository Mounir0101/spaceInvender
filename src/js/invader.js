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


    /////////////////////////////////////////// Vaisseau ennemi ////////////////////////////////////////////////
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

    //////////////////////////////////////// Tir /////////////////////////////////////////////////////////

    document.onkeydown = function (e) {
        if (e.key === ' ') {
          let laser = document.createElement('div');
          laser.classList.add('laser');
          laser.style.left = `${tireur.offsetLeft + (tireur.offsetWidth / 2) - 1}px`;
          laser.style.top = `${tireur.offsetTop - 10}px`;
          document.querySelector('#grille').appendChild(laser);
      
          let animationInterval = setInterval(function() {
            laser.style.top = `${laser.offsetTop - 10}px`;
            if (laser.offsetTop <= 0) {
              clearInterval(animationInterval);
              laser.remove();
            }
          }, 50);
        }
      
        if (e.key == 'ArrowUp') {
          // ...
        }
        if (e.key == 'ArrowDown') {
          // ...
        }
        if (e.key == 'ArrowLeft') {
          // ...
        }
        if (e.key == 'ArrowRight') {
          // ...
        }
      };
    
    //////////////////////////////////////////////////////////// Vaisseau ///////////////////////////////////////////////

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





