var context = document.getElementById('canvas').getContext('2d');	

function drowObj(obj) {
	obj.render();
}

var nextGameStep =(function () {
	return requestAnimationFrame ||
		webkitRequestAnimationFrame ||
		mozRequestAnimationFrame ||
		oRequestAnimationFrame ||
		msRequestAnimationFrame ||
		function (callback) {
			setTimeout(callback, 1000/60);
		}
}) ();

var gameEngineStep = function () {
	gameEngine();
	nextGameStep(gameEngineStep);
}

var gameEngineStart = function (callback) {
	gameEngine = callback;
	gameEngineStep();
}

function loadImage(id) {
	return document.getElementById(id);
}