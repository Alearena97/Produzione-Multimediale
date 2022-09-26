var navbar;
var sticky;


function gestoreLoad() {
	try {
	   window.onscroll = gestoreMenu;
	   navbar = document.getElementsByTagName("nav")[0];
	   sticky = navbar.offsetTop;
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




window.onload = gestoreLoad;