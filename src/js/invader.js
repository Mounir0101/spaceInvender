const grille = document.querySelector('.grille') // Récupère l'élément HTML avec la classe .grille
let longueur = 20 // La largeur de la grille
let supprimeAlien = [] // Tableau vide qui contiendra les index des aliens retirés de la grille

// Boucle qui crée 400 cases pour la grille et les ajoute à la section HTML
for (let i = 0; i < 240; i++) {
const div = document.createElement('div') // Crée un nouvel élément HTML div
div.className = "case" + i; // Ajoute la classe "case + l'index de la case" à l'élément div
grille.appendChild(div) // Ajoute l'élément div à la section .grille
}

const div = Array.from(document.querySelectorAll('.grille div')) // Conversion de la liste des éléments HTML div en tableau pour une utilisation plus facile

const alienInvaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52] // Tableau contenant les index des cases où les aliens sont positionnés

// Fonction qui ajoute la classe 'alien' aux éléments HTML div correspondant aux index des aliens
function apparaitAlien() {
alienInvaders.forEach(invader => { // Boucle sur tous les index des aliens
if (!supprimeAlien.includes(invader)) { // Si l'index de l'alien n'est pas dans le tableau supprimeAlien
div[invader].classList.add('alien'); // Ajout de la classe 'alien' à l'élément HTML div correspondant à l'index de l'alien
}
});
}

apparaitAlien() // Appel de la fonction apparaitAlien

// Fonction qui retire la classe 'alien' de tous les éléments HTML div correspondant aux index des aliens
function supprimeClassAlien() {
for (let i = 0; i < alienInvaders.length; i++) {
div[alienInvaders[i]].classList.remove('alien') // Retire la classe 'alien' des cases ou y avait les aliens
}
}

var avance = 1; // La variable pour contrôler l'avancement  des aliens

// Fonction qui avance les aliens 
function avancerAlien(){
for (let i = 0; i < alienInvaders.length; i++) {
alienInvaders[i] += avance // Ajoute la valeur de 'avance' à tous les aliens
}
}

var avanceDroit = true // La variable pour contrôler la direction d'avancement horizontal des aliens

// Boucle qui s'exécute toutes les secondes et gère le mouvement des aliens
setInterval(function() {
    supprimeClassAlien() // Supprime la classe aliens des anciennes cases

    if (alienInvaders[0] % longueur === 0){ // Si le premier alien de la liste atteint le coter gauche
        var descendreGauche = true; // Descendre gauche true
    } else if (alienInvaders[alienInvaders.length - 1] % longueur === 19){ // Si le dernier alien de la liste atteint le coter droit
        var descendreDroit = true; // Descendre droit true
    }

    if (descendreDroit && avanceDroit) { // Si les aliens descendent a droite
        console.log("↓ DESC DROITE <-");;
        for (let i = 0; i < alienInvaders.length; i++) { // A tous les aliens 
            alienInvaders[i] += longueur +1 // Fait avancer tous les aliens de 20 + 1 
            avance = -1 // Aller a gauche
            avanceDroit = false // Condition pour empecher de descendre a l'infinie
        }
    }

    if(descendreGauche && avanceDroit == false) {
        console.log("↓ DESD GAUCHE ->");
        for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += longueur -1 // Fait avancer tous les aliens de 20 - 1
        avance = 1 // Aller a droite
        avanceDroit = true // Condition pour empecher de descendre a l'infinie
        }
    }
    avancerAlien();
    for (let i = 0; i < alienInvaders.length; i++) { // Collision
            if (positiontireur === alienInvaders[i]) {
                alert("PERDUE");
            }
        }


    console.log(alienInvaders[alienInvaders.length - 1]);
    apparaitAlien()

}, 250);

    //////////////////////////////////////// Tir /////////////////////////////////////////////////////////

   
        
      
     
    
    //////////////////////////////////////////////////////////// Vaisseau ///////////////////////////////////////////////

    





    
    var divs = document.querySelectorAll('.grille div');
    var positiontireur = 230;
    divs[positiontireur].classList.add('tireur');
    
    
   
    document.onkeydown = function (e) {

        divs[positiontireur].classList.remove('tireur') ;

        
        if (e.key == 'z') {
            if (positiontireur > 199)
            positiontireur -= 20;
          }
          if (e.key == 's') {
              if(positiontireur < 220)
            positiontireur += 20 
          }
          
          if (e.key == 'a') {
            if (positiontireur != 180 && positiontireur != 200 && positiontireur != 220 )
            positiontireur -= 1 
               
          }
          if (e.key == 'd'){  
    
            if (positiontireur != 199 && positiontireur != 219 && positiontireur != 239)
            positiontireur += 1
            
            
          }
    
        divs[positiontireur].classList.add('tireur') ;
        
        }

      
       
        

        function tir(e){


            if(e.keyCode === 32){
  
              console.log('shot')
              //const audio = new Audio("../../ressources/falling-bomb-41038.mp3");
               //audio.play();
                divs[positiontireur - 20].classList.add('laser');
                
            }
          
          
    
          }
  
          setInterval(deplacementLaser,100)
          document.addEventListener('keyup', tir);
  
  
  
  
          function deplacementLaser(){
            for (i=0 ;i < 239; i++) {
                console.log(divs[i])
                console.log( alienInvaders[i])
                if (divs[i] === alienInvaders[i]) {
                    alert("touché");
                }
               
                if (divs[i].classList.contains('laser')){
                    divs[i].classList.remove('laser');
                    let newposition = i-20;
                    //const classes = divs[newposition].getAttribute('class').split(' ')
                    //if (classes.includes('alien')) {
                    //divs[newposition].classList.remove('alien')
                    //}
                    if (i <= 19){
                    } else {
                        divs[newposition].classList.add('laser')
                    }

                
              }
  
            }
  
          }
  
  
       
  
  
  
  setInterval(deplacementLaser,100)
 


 
    































