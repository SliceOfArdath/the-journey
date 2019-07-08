var x = 1;
var y = 1;
document.getElementById("load").innerHTML = "JavaScript working!";
document.getElementById("coordx").innerHTML = x;
document.getElementById("coordy").innerHTML = y;

function moveUp() {
	document.getElementById("up").innerHTML ="OH NO A WALL"
	document.getElementById("up").style.backgroundColor = "red";
	y--;
	document.getElementById("coordy").innerHTML = y;
	}
function moveDown() {
	y++;
	document.getElementById("coordy").innerHTML = y;
	}
function moveRight() {
	x++;
	document.getElementById("coordx").innerHTML = x;
	}
function moveLeft() {
	x--;
	document.getElementById("coordx").innerHTML = x;
	}
