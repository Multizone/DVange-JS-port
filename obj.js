class ObjMap {

	constructor() {
		this.map = [
			[0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		];
		this.objects = new ObjectFactory();
    }

	render(cameraX, cameraY){
		for (let x=0; x<20; x++){
			for (let y=0; y<12; y++){
				this.objects.getInstanseById(this.map[y][x]).render(x - cameraX, y - cameraY);
			}
		}
	}
}

class ObjectFactory {

	constructor() {
		this.objects = new Map();
		this.objects.set(0, new Null());
		this.objects.set(1, new Tree());
		
    }

	getInstanseById(id){
		return this.objects.get(id);
	}
}

class Null {
	constructor() {}

	render(x, y) {
	}
}


class Tree {
	constructor() {
		this.img = loadImage('t');
	}

	render(x, y) {
		context.drawImage(this.img, 0, 0, 91,121, x*50,y*50-50,91,121);

	}
}
