var distLeft = 10000;
//celsius here
var biome = {
	trees = {freq = 0.1, type = "oak", size = 0.95},
	temp = 25,
};
var biomeWeight = {
	trees : {freq : 0.1, type : "oak", size : 0.95},
	temp = 20 //idk, seems low tho
};
var player = {
	name = "",
	sleep = 100,
	alimentation = BodyNeeds(1, 1, 1, 1),
	pyche = Psychologic(75, 50, 65)
};
function Psychologic(happiness, sociability, confidence) {
	this.happiness = happiness;
	this.sociability = sociability;
	this.confidence = confidence;
}
function BodyNeeds(water, proteine, calcium, cereals) {
	this.water = water;
	this.proteine = proteine;
	this.cereals = cereals;
	this.calcium = calcium;
}
var input = document.getElementById("entry");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("hollowButton").click();
}
});
function execComm() {
	var c = -1;
	var command = document.getElementById("diary").value.toLowerCase();
	console.log(command)
	var CommandsList = ["help","exit","fire","chat","gather"]
	for (let i = 0; i < CommandsList.length; i++) {
		if(command==CommandsList[i] || command==CommandsList[i].substr(1,1)) {
			c=i;
		}
	}
	switch (c) {
		case 0:
			say("Commands: 'help' Show a list of commands. 'exit' Sleep trough the night. 'fire' Put on a campfire. 'chat' Talk with someone. 'gather' Gather food and water.");
			break;
		case 1:
			say("You go to bed, and sleep until the sun rises.");
			break;
	
		default:
			say("Command not found. Type 'help' for help.");
			break;
	}
}
function say(text) {
	document.getElementById("diary").innerHTML += "</br>"+text;
}
function GenerateRoad() {
	//need to know how to change biomes

	//probably generate the end biome and then make the transitions.
	//OR (more realistic) reeeeeeaaaaly slowly change the parameters each mile or so. Sounds clever. gonna do this.
	/*HOW TO CHANGE PARAMETERS: 
			1-generate a new biome (randomized)
			2-Make an average of new-old whith more weight for the old 
			(weight is predetremined, for example, whind things may change very fast so you should have a low weight. but a high weight on temperature bc "it's thermodinamics")
			3-That's all i guess. Maybe a failsafe depending on zones, like wind may be weak but a weak wind will be waaaay stronger in mountains.*/
	//WE NEED RULES !!!! THAT IS IMPERATIVE !!! (referencing to failsafe, yeah we need that)
}