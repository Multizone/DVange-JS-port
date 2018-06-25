class WorldMap {

	constructor() {
		this.map = [
			[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,2,2,0,0,2,2,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,2,0,0,0,0,2,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,2,0,0,0,2,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,2,0,2,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		];
		this.blocks = [];
		

		for (let y = 0; y<this.map.length; y++){
			let line = [];
			for (let x = 0; x<this.map[y].length; x++){
				line.push(this.getInstanseById(this.map[y][x], x, y));
			}
			this.blocks.push(line);
		}

	}
	
	getInstanseById(id, x, y){
		if (id == 0) return new Water(x, y);
		if (id == 1) return new Grass(x, y);
		if (id == 2) return new Sand(x, y);
	}

    getObj(x, y){
    	return this.blocks[Math.ceil(y)][Math.ceil(x)];
    }
}

class Grass {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.img = loadImage('g');
		this.passable = true;
	}

	render(cameraX, cameraY) {
		context.drawImage(this.img, 0, 0, 50,50, (this.x-cameraX)*50,(this.y-cameraY)*50,50,50);

	}
}

class Sand {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.img = loadImage('s');
		this.passable = true
	}

	render(cameraX, cameraY) {
		context.drawImage(this.img, 0, 0, 50,50, (this.x-cameraX)*50,(this.y-cameraY)*50,50,50);
	}
}

class Water {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.img = loadImage('w');
		this.passable = false;
	}

	render(cameraX, cameraY) {
		context.drawImage(this.img, 0, 0, 100,100, (this.x-cameraX)*50,(this.y-cameraY)*50,50,50);
	}
}

