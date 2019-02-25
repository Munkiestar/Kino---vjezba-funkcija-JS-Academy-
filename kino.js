
/*
  Kino - vjezba funkcija - 23.02.2019.
- program koji omogucuje korisniku da naruci karte za kino.
- koristim prompt za upit tj unos imena, prezimena, godine i lokacije korisnika.
- prema lokaciji (Ck, Vz i Zg) korisniku su i prema 
  godinama (do 13, 14 - 17 i 18 ++) ponudena po 3 filma.

- zanr filma - under construction..
- cijena karte - under construction..
*/


// glavna funckija koja trazi korisnika za unos:
// imena, prezimena i lokacije.
// prema upisu lokacije aktivira se ponovo funkcija za doticni grad.
function Kino(){
	var ime = prompt("Molim unsesite svoje ime:");
	var prezime = prompt('Molim unesite svoje prezime:');
	var lokacija = prompt('Molim unesite Vasu lokaciju (Cakovec, Varazdin ili Zagreb):');

	if(lokacija.toLowerCase() === 'cakovec'){
		LokacijaCk();
	}else if(lokacija.toLowerCase() === 'varazdin'){
		LokacijaVz();
	}else{
 		LokacijaZg();
  	}
}

// pozivanje glavne funkcije Kino();
Kino();

// funkcija za lokaciju Cakovec
// ponuda filmova prilagodena po godinama
function LokacijaCk(){
	var godine = prompt('Molim unesite svoje godine.');

	if(parseInt(godine) <= 13){
	alert('U ponudi imamo 3 filmova.');
	alert('Kralj Lavova, Mulan i Frozen.');
	} else if(parseInt(godine) > 14 && parseInt(godine) <= 17){
		alert('U ponudi imamo 3 filmova.');
		alert('Policijska Akademija, Home Alone, Social Network');
	} else{
		alert('U ponudi imamo 3 filmova.');
		alert('Terminator, Alien, Conjuring');
	}
}

// funkcija za lokaciju Varazdin
// ponuda filmova prilagodena po godinama
function LokacijaVz(){
	var godine = prompt('Molim unesite svoje godine.');

	if(parseInt(godine) <= 13){
	alert('U ponudi imamo 3 filmova.');
	alert('Auti, Snjeguljica i Brave.');
	} else if(parseInt(godine) > 14 && parseInt(godine) <= 17){
		alert('U ponudi imamo 3 filmova.');
		alert('Karate Kid, Home Alone, Social Network');
	} else{
		alert('U ponudi imamo 3 filmova.');
		alert('Terminator, Alien, Conjuring');
	}
}

// funkcija za lokaciju Zagreb
// ponuda filmova prilagodena po godinama
function LokacijaZg(){
	var godine = prompt('Molim unesite svoje godine.')

	if(parseInt(godine) <= 13){
		alert('U ponudi imamo 3 filmova.');
		alert('Smogovci, Druzba Pere Kvrzice i Jelenko');	
	}else if(parseInt(godine) > 14 && parseInt(godine) <= 17){
		alert('U ponudi imamo 3 filmova');
		alert('Hacker, Social Network, 3 Idiots')
	}else{
		alert('U ponudi imamo 3 filmova');
		alert('Training Day, Gone, Inception.')
	}
}