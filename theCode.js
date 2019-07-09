var map = "eeeeeeeeaeaaaeeaaaeeeeaeaaaeeaeeeaeeaeeaaeeeeeeee"
var x = 1;
var y = 1;
document.getElementById("load").innerHTML = "JavaScript working!";
document.getElementById("coordx").innerHTML = x;
document.getElementById("coordy").innerHTML = y;

function moveUp() {
	if (map.substr(y-- * 6 + x,1) == "a") {
		y--;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordy").innerHTML = y;
	} else {
		document.getElementById("up").style.backgroundColor = "red";
		document.getElementById("up").innerHTML ="OH NO A WALL";
	} 
}
function moveDown() {
	if (map.substr(y++ * 6 + x,1) == "a") {
		y++;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordx").innerHTML = y;
	} else {
		document.getElementById("down").style.backgroundColor = "red";
		document.getElementById("up").innerHTML ="OH NO A WELL";
	} 
}
function moveRight() {
	if (map.substr(y * 6 + x++,1) == "a") {
		x++;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordx").innerHTML = x;
	} else {
		document.getElementById("right").style.backgroundColor = "red";
		document.getElementById("up").innerHTML ="OH NO A WEGALL";
	} 
}
function moveLeft() {
	if (map.substr(y * 6 + x--,1) == "a") {
		x--;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordx").innerHTML = x;
	} else {
		document.getElementById("left").style.backgroundColor = "red";
		document.getElementById("up").innerHTML ="OH NO A WZHEUFGH";
	} 
}