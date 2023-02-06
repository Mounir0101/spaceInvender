

var image = document.getElementById("myImage");


var pos = 900;







document.onkeydown = function(event) {
  if (event.key === "ArrowLeft") {
   
    pos -= 20; 
 
    

  } else if (event.key === "ArrowRight") {
    
    pos += 20; 

  }
  
  image.style.left = pos + "px"; 
};