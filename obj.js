class ObjList {

	constructor() {
		this.objects = [
			new Tree(2,3),
			new Tree(2,6)
		];
    }

	render(cameraX, cameraY) {
		for (var i = 0; i < this.objects.length; i++) {	
			this.objects[i].render(cameraX, cameraY);
		}
	}
}

class Tree {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.img = loadImage('t');
	}

	render(cameraX, cameraY) {
		context.drawImage(this.img, 0, 0, 91, 121, (this.x-cameraX)*50-20, (this.y-cameraY)*50-71, 91, 121);
	}
}
