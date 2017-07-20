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
		this.blocks = new BlockFactory();
    }

	render(cameraX, cameraY){
		for (let x=0; x<20; x++){
			for (let y=0; y<12; y++){
				this.blocks.getInstanseById(this.map[y][x]).render(x - cameraX, y - cameraY);
			}
		}
	}
}

class BlockFactory {

	constructor() {
		this.blocks = new Map();
		this.blocks.set(0, new Water());
		this.blocks.set(1, new Grass()); 	
		this.blocks.set(2, new Sand()); 
		
    }

	getInstanseById(id){
		return this.blocks.get(id);
	}
}

class Grass {
	constructor() {
		this.img = loadImage('g');
	}

	render(x, y) {
		context.drawImage(this.img, 0, 0, 50,50, x*50,y*50,50,50);

	}
}

class Sand {
	constructor() {
		this.img = loadImage('s');
	}

	render(x, y) {
		context.drawImage(this.img, 0, 0, 50,50, x*50,y*50,50,50);
	}
}

class Water {
	constructor() {
		this.img = loadImage('w');
	}

	render(x, y) {
		context.drawImage(this.img, 0, 0, 100,100, x*50,y*50,50,50);
	}
}

