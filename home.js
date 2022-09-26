var navbar;
var sticky;
var nodoIntro;
var music = new Audio("audio/music.mp3");


function gestoreLoad() {
	try {
	   window.onscroll = gestoreMenu;
	   navbar = document.getElementsByTagName("nav")[0];
	   sticky = navbar.offsetTop;
      nodoIntro = document.getElementById("intro");
      nodoIntro.onclick = gestoreChiusura;
      gestoreScroll();
      gestoreIntro();
      window.scrollTo(0,0)

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

function ripristinaBarra() {                                           //funzione per ripristinare la barra di scorrimento dopo l'intro
   try {
   	document.getElementsByTagName("body")[0].style.overflow = "initial";
   } catch ( e ) { alert("ripristinaBarra" + e) }
}


function gestoreIntro() {                                              //funzione che verifica tramite il cookie se mostrare la intro e ripristina la barra di scorrimento, altrimenti ripristina solo la barra di scorrimento
	try {
		if (document.cookie.substr(10,7) != "false")	{
		nodoIntro.style.height = "100%";
	} else { ripristinaBarra() }
	} catch ( e ) { alert("gestoreIntro" + e) }
}

function gestoreChiusura() {                                           //funzione per nascondere l'intro con una transizione e settare un cookie che comunichi al browser che l'intro è già stato visualizzato
	try {
		   music.volume = 0.1;
		   music.play();
		   nodoIntro.style.transition = "2s";
		   nodoIntro.style.height = "0px";
		   setTimeout(ripristinaBarra,2518);
		   document.cookie = "benvenuto=false";
	} catch ( e ) { alert("gestoreIntro " + e) }  
}

function gestoreScroll() {                                             //funzione per nascondere la barra di scorrimento
	try {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
   } catch ( e ) { alert("gestoreScroll " + e) }
}

window.onload = gestoreLoad;