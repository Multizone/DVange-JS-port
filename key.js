window.onload = function () {
	window.onkeydown = function (e) {
		if (e.keyCode==87) player.goUp();
		if (e.keyCode==83) player.goDown();
		if (e.keyCode==65) player.goLeft();
		if (e.keyCode==68) player.goRight();
	};
}