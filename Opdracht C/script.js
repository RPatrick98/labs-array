var arrayEen = [2,4,6,8];

var tafel2 = document.getElementById("tafel2"); 
var tafel4 = document.getElementById("tafel4"); 
var tafel6 = document.getElementById("tafel6"); 
var tafel8 = document.getElementById("tafel8"); 

function tafeltwee() {
	for (i=0; i < 11; i++) {
		var berekening = i * arrayEen[0];
		tafel2.innerHTML += i + " * " + arrayEen[0] + " = " + berekening + "<br>";
	}
}

tafeltwee();

function tafelvier() {
	for (i=0; i < 11; i++) {
		var berekening = i * arrayEen[1];
		tafel4.innerHTML += i + " * " + arrayEen[1] + " = " + berekening + "<br>";
	}
}

tafelvier();

function tafelzes() {
	for (i=0; i < 11; i++) {
		var berekening = i * arrayEen[2];
		tafel6.innerHTML += i + " * " + arrayEen[2] + " = " + berekening + "<br>";
	}
}

tafelzes();

function tafelacht() {
	for (i=0; i < 11; i++) {
		var berekening = i * arrayEen[3];
		tafel8.innerHTML += i + " * " + arrayEen[3] + " = " + berekening + "<br>";
	}
}

tafelacht();