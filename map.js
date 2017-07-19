class WorldMap {

	constructor() {
		this.map = [
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
	constructor() {}

	render(x, y){
		context.fillStyle = "green";
		context.fillRect(x*50, y*50, 49, 49);
	}
}

class Sand {
	constructor() {}

	render(x, y){
		context.fillStyle = "yellow";
		context.fillRect(x*50, y*50, 49, 49);
	}
}

class Water {
	constructor() {}

	render(x, y){
		context.fillStyle = "blue";
		context.fillRect(x*50, y*50, 49, 49);
	}
}