var map = "eeeeeeeeaeaaaeeaaaeeeeaeaaaeeaeeeaeeaeeaaeeeeeeee"
var x = 1;
var y = 1;
function moveUp() {
	document.getElementById("up").innerHTML ="OH NO A WALL"
	document.getElementById("up").style.backgroundColor = "red";
if map.substr(y-- * 6 + x,1) == "a" {
	y--;
	document.getElementById("down").style.backgroundColor = "green";
	document.getElementById("left").style.backgroundColor = "green";
	document.getElementById("right").style.backgroundColor = "green";
	document.getElementById("up").style.backgroundColor = "green";
} else {
	document.getElementById("up").style.backgroundColor = "red";
	document.getElementById("up").innerHTML ="OH NO A WALL";
} 
}
function moveDown() {
if map.substr(y++ * 6 + x,1) == "a" {
	y++;
	document.getElementById("down").style.backgroundColor = "green";
	document.getElementById("left").style.backgroundColor = "green";
	document.getElementById("right").style.backgroundColor = "green";
	document.getElementById("up").style.backgroundColor = "green";
} else {
	document.getElementById("down").style.backgroundColor = "red";
} 
}
function moveRight() {
if map.substr(y * 6 + x++,1) == "a" {
	x++;
	document.getElementById("down").style.backgroundColor = "green";
	document.getElementById("left").style.backgroundColor = "green";
	document.getElementById("right").style.backgroundColor = "green";
	document.getElementById("up").style.backgroundColor = "green";
} else {
	document.getElementById("right").style.backgroundColor = "red";
} 
}
function moveLeft() {
if map.substr(y * 6 + x--,1) == "a" {
	X--;
	document.getElementById("down").style.backgroundColor = "green";
	document.getElementById("left").style.backgroundColor = "green";
	document.getElementById("right").style.backgroundColor = "green";
	document.getElementById("up").style.backgroundColor = "green";
} else {
	document.getElementById("left").style.backgroundColor = "red";
} 
}