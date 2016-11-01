var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth*2/3-10;
canvas.height = window.innerHeight-10;
var width = canvas.width;
var height = canvas.height;
//Contains all of your moving objects
var allObjects=[];

//Set your variables/constants here

//Function that does something to all of your objects. This is how your simulation progresses.
function move(){

}

//This method is called when the simulation starts. Use it to define all of your objects and set your constants to values from the simulation.
function initialize() {

}

//Draws all of your objects. Current implementation assumes that your objects are circles with a specified radius attribute that are located at (object.position.x, object.position.y).
function draw() {
    ctx.fillStyle = "rgba(255,255,255,.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < allObjects.length; i++) {
        object = allObjects[i];
        ctx.beginPath();
        var colorString = 'rgb(255,0,0)';
        ctx.strokeStyle = colorString;
        ctx.arc(object.position.x, object.position.y, object.radius, 0, 2 * PI);
        ctx.fill();
        ctx.stroke();
    }
}

$("#controls-submit").click(function() {
	//This code is run when the user wants to set custom parameters
	initializeCharge();
});

function main() {
	move();
	draw();
	requestAnimationFrame(main);
};

initialize();
requestAnimationFrame(main);
