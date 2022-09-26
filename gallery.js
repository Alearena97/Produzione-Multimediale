var navbar;
var sticky;
var avanti;
var indietro;
var nodoImmmagine;


function gestoreLoad() {
	try {
	   window.onscroll = gestoreMenu;
	   navbar = document.getElementsByTagName("nav")[0];
	   sticky = navbar.offsetTop;
	   nodoImmagine = document.getElementById("layout");
	   indietro = document.getElementById("indietro");
	   avanti = document.getElementById("avanti");
	   indietro.onclick = gestoreGallery;
	   avanti.onclick = gestoreGallery;
	   } catch ( e ) {alert("gestoreLoad " + e);
   }
}

function gestoreMenu() {
    try {                                                               //funzione per fare in modo che la navbar sia fissa sopra la pagina anche quando si scorre in basso e che ritorni poi alla sua posizione originaria
  	    if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
	      }  else {
	            navbar.classList.remove("sticky");
	         }
	   } catch ( e ) { alert("gestoreMenu " + e);
   }  
}

function gestoreGallery() {                                            //funzione che controlla il pulsante premuto e cambia l'immagine di conseguenza	  
	try {
		if (this.id == "indietro") {
		   if (nodoImmagine.firstChild.id.charAt(1) != "1") var prossima = Number(nodoImmagine.firstChild.id.charAt(1))-1; 
		      else prossima = "9";
		} else {
         if (nodoImmagine.firstChild.id.charAt(1) < "9") var prossima = Number(nodoImmagine.firstChild.id.charAt(1))+1;
            else prossima = "1"; 
         }
         nodoImmagine.firstChild.setAttribute("src","img/c"+prossima+".jpg"); 
		   nodoImmagine.firstChild.setAttribute("id","c"+prossima);
	   } catch ( e ) { alert("gestoreGallery " + e);
   }
}

window.onload = gestoreLoad;