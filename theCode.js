var map = "eeeeeeeeaaaaaeeaaaeeeeaeaaaeeaeeeaeeaeeaaeeeeeeee"
var x = 2;
var y = 2;
document.getElementById("load").innerHTML = "JavaScript working!";
document.getElementById("coordx").innerHTML = x;
document.getElementById("coordy").innerHTML = y;

function moveUp() {
	if (map.substr((y-- * 7)-1 + x,1) == "a") {
		y--;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordy").innerHTML = y;
		document.getElementById("up").innerHTML ="MOVE YOUR BODY UPPPPPP GODAMN YOU!";
		document.getElementById("down").innerHTML ="MOVE YOUR BODY NOTUP (y'know like down)";
		document.getElementById("right").innerHTML ="MOVE YOUR BODY YAEH TO THE RIGHT";
		document.getElementById("left").innerHTML ="MOVE. JUST MOVE. Where? Left.";
	} else {
		document.getElementById("up").style.backgroundColor = "red";
		document.getElementById("up").innerHTML ="OH NO A WALL";
	} 
}
function moveDown() {
	if (map.substr((y++ * 7)-1 + x,1) == "a") {
		y++;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordy").innerHTML = y;
		document.getElementById("up").innerHTML ="MOVE YOUR BODY UPPPPPP GODAMN YOU!";
		document.getElementById("down").innerHTML ="MOVE YOUR BODY NOTUP (y'know like down)";
		document.getElementById("right").innerHTML ="MOVE YOUR BODY YAEH TO THE RIGHT";
		document.getElementById("left").innerHTML ="MOVE. JUST MOVE. Where? Left.";
	} else {
		document.getElementById("down").style.backgroundColor = "red";
		document.getElementById("down").innerHTML ="OH NO A WELL";
	} 
}
function moveRight() {
	if (map.substr((y * 7)-1 + x++,1) == "a") {
		x++;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordx").innerHTML = x;
		document.getElementById("up").innerHTML ="MOVE YOUR BODY UPPPPPP GODAMN YOU!";
		document.getElementById("down").innerHTML ="MOVE YOUR BODY NOTUP (y'know like down)";
		document.getElementById("right").innerHTML ="MOVE YOUR BODY YAEH TO THE RIGHT";
		document.getElementById("left").innerHTML ="MOVE. JUST MOVE. Where? Left.";
	} else {
		document.getElementById("right").style.backgroundColor = "red";
		document.getElementById("right").innerHTML ="OH NO A WEGALL";
	} 
}
function moveLeft() {
	if (map.substr((y-- * 7)-1 + x--,1) == "a") {
		x--;
		document.getElementById("down").style.backgroundColor = "green";
		document.getElementById("left").style.backgroundColor = "green";
		document.getElementById("right").style.backgroundColor = "green";
		document.getElementById("up").style.backgroundColor = "green";
		document.getElementById("coordx").innerHTML = x;
		document.getElementById("up").innerHTML ="MOVE YOUR BODY UPPPPPP GODAMN YOU!";
		document.getElementById("down").innerHTML ="MOVE YOUR BODY NOTUP (y'know like down)";
		document.getElementById("right").innerHTML ="MOVE YOUR BODY YAEH TO THE RIGHT";
		document.getElementById("left").innerHTML ="MOVE. JUST MOVE. Where? Left.";
	} else {
		document.getElementById("left").style.backgroundColor = "red";
		document.getElementById("left").innerHTML ="OH NO A WZHEUFGH";
	} 
}