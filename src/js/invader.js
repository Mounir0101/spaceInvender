window.onload = grille();
function grille() {
    var parent = document.getElementById("grille");
    var listParent = document.getElementById("list");
    var liste = [];

    for (var i = 0; i < 240; i++) {
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

        }
        else if (liste[index-1] == "dataLeft"){
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

         
        }


    
    }, 1000);

    //////////////////////////////////////// Tir /////////////////////////////////////////////////////////

   
        
      
     
    
    //////////////////////////////////////////////////////////// Vaisseau ///////////////////////////////////////////////

    





    
    var divs = document.querySelectorAll('#grille div');
    var positiontireur = 230;
    divs[positiontireur].classList.add('tireur');
    
    
    
   
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

      divs[positiontireur].classList.add('tireur') ;
    }

      
       
        

        function tir(e){


          if(e.keyCode === 32){

            console.log('shot')
            const audio = new Audio("../../ressources/falling-bomb-41038.mp3");
             audio.play();
              divs[positiontireur - 20].classList.add('laser');
              
          }
        
        
  
        }

        setInterval(deplacementLaser,100)
        document.addEventListener('keyup', tir);




        function deplacementLaser(){
          for (i=0 ;i < divs.length; i++) {
            
            if (divs[i].classList.contains('laser')){
              divs[i].classList.remove('laser');
              let newposition = i-20;
              const classes = divs[newposition].getAttribute('class').split(' ')
              if (classes.includes('alien')) {
                divs[newposition].classList.remove('alien')
              }
              divs[newposition].classList.add('laser')
            }

          }

        }


     


};

setInterval(deplacementLaser,100)
 


