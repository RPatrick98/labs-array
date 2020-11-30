var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];
var optellen = document.getElementById('optellen');
var aftrekken = document.getElementById('aftrekken');
var vermenigvuldigen = document.getElementById('vermenigvuldigen');
var delen = document.getElementById('delen');

function plus(num1, num2){
	for (i=0; i <= 9; i++) {
		plus2 = num1[i] + num2[i];
		optellen.innerHTML += arrayEen[i] + " + " + arrayTwee[i] + " = " + plus2 + "<br>";
	}
}
plus(arrayEen, arrayTwee);

function min(num1, num2){
	for (i=0; i <= 9; i++) {
		min2 = num2[i] - num1[i];
		aftrekken.innerHTML += arrayTwee[i] + " - " + arrayEen[i] + " = " + min2 + "<br>";
	}
}

min(arrayEen, arrayTwee);

function multiple(num1, num2) {
	for (i=0; i <= 9; i++) {
		multiple2 = num1[i] * num2[i];
		vermenigvuldigen.innerHTML += arrayEen[i] + " * " + arrayTwee[i] + " = " + multiple2 + "<br>";
	}
}

multiple(arrayEen, arrayTwee);

function divide(num1, num2) {
	for (i=0; i <= 9; i++) {
		divide2 = num2[i] / num1[i];
		delen.innerHTML += arrayTwee[i] + " / " + arrayEen[i] + " = " + divide2 + "<br>";
	}
}

divide(arrayEen, arrayTwee);



