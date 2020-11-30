var dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
document.getElementById("Alle").innerHTML = dagen;

var werkdagen = document.getElementById("werkdagen"); 

for(i=0; i < 5; i++) {
	werkdagen.innerHTML += dagen[i] + ' ';
}

document.getElementById("weekenddagen").innerHTML = dagen[5] + ' ' + dagen[6];

var omgekeerde = document.getElementById("omgekeerde");
for(i=6; i >= 0; i--) {
	omgekeerde.innerHTML += dagen[i] + ' ';
}

var omwerkdagen = document.getElementById("omwerkdagen");
for(i=4; i >= 0; i--) {
	omwerkdagen.innerHTML += dagen[i] + ' ';
}

var omweekenddagen = document.getElementById("omweekenddagen");

document.getElementById("omweekenddagen").innerHTML = dagen[6] + ' ' + dagen[5];