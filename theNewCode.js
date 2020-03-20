var distLeft = 10000;
var command = document.getElementById("commands");
var diary = document.getElementById("diary");
var seed = randint(0,10**16);
var consoleLocked = false;
var lastCommand = "";

var structP = [0.01,0.03,0.02,0.02,0.007,0.05];
var events = [new Event(0, 0, "start", 0, true)];

//retrieve prime saved elements
if (localStorage.seed) {seed = localStorage.seed;} else {localStorage.seed = seed;}
if (localStorage.admin) {admin = Boolean(localStorage.admin);}

//reload seed (assuming seed will be used one day)
noise.seed(seed)
if (localStorage.seed) {
	seed = Number(localStorage.seed);
	noise.seed(seed)
} else {
	localStorage.seed = seed;
	noise.seed(seed)
}
function reload() {
	seed = Math.random();
	localStorage.seed = seed
	console.log(seed);
	noise.seed(seed)
}
console.log(seed);

//remake this
function Event(x, y, event, time, ignoreYCoord=false) {
	this.coord = {x : x, y : y, ignoreY : ignoreYCoord};
	this.event = event;
	this.time = time;
}

//first need: a terrain handler
knuth=(a,b,c)=>b<2||c<1?a**c:knuth(a,b-1,knuth(a,b,c-1))
function randint(a, b) {return Math.round(a+Math.random()*(b-a))}
function randreal(a, b, acc=-1) {
	if (acc>=0) {return Math.round((a+Math.random()*(b-a))*(10**acc))/(10**acc)}
	return a+Math.random()*(b-a)}
function ncdf(x, mean, std) {
	var x = (x - mean) / std
	var t = 1 / (1 + .2315419 * Math.abs(x))
	var d =.3989423 * Math.exp( -x * x / 2)
	var prob = d * t * (.3193815 + t * ( -.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
	if( x > 0 ) prob = 1 - prob
	return prob
	//mean is probably "décalage"
	//std makes it smoother
}
var sounds = {
	FR : { 
		vowels : { 
			a : "a", 
			eUp : "é",
		}, 
		semiVowels : {

		}, 
		consouns : {

		}

	}
}
function nameGen() {
	var stopPoint = 0;
	while (stopPoint == 0) {
		a
	}
}








function BiomeGen() {
	this.trees = {freq : randint(0,10), type : "oak", size : randreal(0,5,2)};
	this.temp = tempgen(0);
	this.wind = randreal(0,20,2);
	//terrain = {regularity : 1, height : 50, smoothness : 1, ankle : {direction : 0, power : 1}}
	for (let str = 0; str < structP.length; str++) {
		if (Math.random<=structP[str]) {
			this.interestItem = structures[str];
			str = structP.length;
		}
	}
}
function Psychologic(happiness, sociability, confidence) {
	this.happiness = happiness;
	this.sociability = sociability;
	this.confidence = confidence;
}
function BodyNeeds(water, proteine, calcium, cereals, energy) {
	this.water = water;
	this.proteine = proteine;
	this.cereals = cereals;
	this.calcium = calcium;
	this.glucides = energy;
}
var input = document.getElementById("commands");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("hollowButton").click();
	}
	if (event.keyCode === 9) {
		event.preventDefault();
		autocomplete()
	}
});
function writeDiary() {
	if (NB.trees.freq>0.5) {
		say("You are in a forest of "+NB.trees.type+", these "+diff(NB.trees.size, 5, sizeDesignation, 5)+" trees are "+diff(NB.trees.freq, 10, densityDesignation, 10)+". You setteled under a tree, with hope for some rain.");
	}
	console.log("Old fq: "+biome.trees.freq+" New fq: "+NB.trees.freq)
	if (NB.temp>biome.temp) {
		say("It seems to you today is "+diff(biome.temp, NB.temp, powerDesigniation)+" hotter.")
	} else {
		say("It seems to you today is "+diff(NB.temp, biome.temp, powerDesigniation)+" colder.")
	}
	console.log("Old temp: "+biome.temp+" New temp: "+NB.temp)
	biome=NB;
	diary.scroll(0, 1000);
}
function exit() {
	diary.innerHTML += "</br>";
	generateRoad()
}
function diff(a, b, list, p=list.length) {
	if (b>a) {
		result = Math.round(-(Math.E**(-0.03*p*(b-a)+2))+p);
	} else {
		result = Math.round(-(Math.E**(-0.03*p*(a-b)+2))+p);
	}
	console.log(result)
		if (result<list.length) {
			return list[result]
		} else {
			return "just too"
		}
}




function execComm() {
	var c = -1;
	var CommandsList = ["help","exit","test","fire","chat","gather"]
	if (command.value=="") {
		command.value=lastCommand;
	} else {
		lastCommand=command.value;
	}
	console.log(command.value)
	document.getElementById("diary").innerHTML += "<div align='right' color='lightgrey'><code>"+command.value+"</code></div>";
	for (let i = 0; i < CommandsList.length; i++) {
		if (command.value.toLowerCase()==CommandsList[i] /*|| command.value.toLowerCase()==CommandsList[i].substr(1,1)*/) {
			c=i;
		}
	}
	switch (c) {
		case 0:
			say("Commands: </br>'help' Show a list of commands. </br>'exit' Sleep trough the night. </br>'fire' Put on a campfire/act with campfire. </br>'chat' Talk with someone. </br>'gather' Gather food and water.");
			break;
		case 1:
			say("You go to bed, and sleep until the sun rises.");
			exit()
			break;
		case 2:
			say("I don't know what you needed to test but I hope it works!");
			break;
		default:
			say("Command not found. Type 'help' for help.");
			break;
	}
	if (command.value.toLowerCase()=="sayopensesame") {
		say("Administrator rights granted.");
		admin = true;
		localStorage.admin = true;
	}
	if (command.value.toLowerCase()=="closesesame") {
		say("Administrator rights removed.");
		admin = false;
		localStorage.admin = false;
	}
	command.value = "";
}
function say(text, effect="") {
	if (effect=="") {
		diary.innerHTML += "<div align='left'><code>"+text+"</code></div>";
	} else {
	}
	
}
function generateRoad() {
	/*for (let checkev = 0; checkev < events.length; checkev++) {
		point = events[checkev].coord;
		if (point.x==player.coord.x) {
			if (point.ignoreY==true || point.y==player.coord.x) {
				//start event
				//need to generate the map first time I think
			} 
		}
	}*/
	//SEED THING
	NB = new BiomeGen()
	smoothAllBiome(NB)
	distLeft-=30;





	writeDiary()
	//need to know how to change biomes

	//maybe generate the end biome and then make the transitions.
	//OR (more realistic) reeeeeeaaaaly slowly change the parameters each mile or so. Sounds clever. gonna do this.
	/*HOW TO CHANGE PARAMETERS: 
			1-generate a new biome (randomized)
			2-Make an average of new-old whith more weight for the old 
			(weight is predetremined, for example, wind things may change very fast so you should have a low weight. but a high weight on temperature bc "it's thermodinamics")
			3-That's all I guess. Maybe a failsafe depending on zones, like wind may be weak but a weak wind will be waaaay stronger in mountains.*/
	//WE NEED RULES !!!! THAT IS IMPERATIVE !!! (referencing to failsafe, yeah we need that)
}