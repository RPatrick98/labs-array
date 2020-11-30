var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];
var ran = document.getElementById('spellen');

function myFunction() {
	ran.innerHTML = spellen[Math.floor(Math.random() * spellen.length)];
}

myFunction();