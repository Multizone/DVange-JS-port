class ObjList {

	constructor() {
		this.objects = [
			new Tree(0,0),
			new Tree(2,3)
		];
    }

	getObj(x, y){
    	for (let i = 0; i<this.objects.length; i++){

    		if (this.objects[i].x==x && this.objects[i].y==y)
    			return this.objects[i];
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
