class Tree {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.img = loadImage('t');
	}

	render(x, y) {
		context.drawImage(this.img, 0, 0, 91,121, x*50,y*50,91,121);

	}
}