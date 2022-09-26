var navbar;
var sticky;
var l01;
var l02;
var l03;
var l04;
var nodoGhost;
var nodoDidascalia;
var numeroImmagine;

function gestoreLoad() {
	try {
	   window.onscroll = gestoreMenu;
	   navbar = document.getElementsByTagName("nav")[0];
	   sticky = navbar.offsetTop;
	      l01 = document.getElementById("l01");
	      l02 = document.getElementById("l02");
	      l03 = document.getElementById("l03");
	      l04 = document.getElementById("l04");
	      l01.onclick = Zoomimg;
	      l02.onclick = Zoomimg;
	      l03.onclick = Zoomimg;
	      l04.onclick = Zoomimg;
	   nodoGhost = document.getElementById("ghost");
	   nodoDidascalia = document.getElementById("didascalia");
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


function Zoomimg() {
   try {                                                               //funzione per ingrandire le immagini al click e far comparire una didascalia 
	   while (nodoDidascalia.childNodes.length > 0) {
	      nodoDidascalia.removeChild(nodoDidascalia.lastChild);
	   } 
         while (nodoGhost.childNodes.length > 2) {
            nodoGhost.removeChild(nodoGhost.lastChild);
         }
         var zoom = document.createElement("img");
         nodoGhost.appendChild(zoom);
         zoom.setAttribute("src","img/"+this.id+".jpg");
         if (this.id.charAt(1) == "0") {
        	numeroImmagine = this.id.charAt(2);
         } else {
        	numeroImmagine = this.id.substr(1,2);
         }
         var testo = document.createTextNode(didascalie[numeroImmagine]);
         nodoDidascalia.appendChild(testo);
         nodoGhost.removeAttribute("hidden");
         nodoGhost.onclick = gestoreChiudi;
   } catch ( e ) {alert("zooming " + e);
   }
}

function gestoreChiudi() {
   try {                                                                //funzione per chiudere con un click le immagini ingrandite con la funzione zooming
	   nodoGhost.setAttribute("hidden","true");
	      while (nodoDidascalia.childNodes.length > 0) {
		      nodoDidascalia.removeChild(nodoDidascalia.lastChild);
	      }
      } catch ( e ) {alert("gestoreChiudi " + e);
   }
}

window.onload = gestoreLoad;