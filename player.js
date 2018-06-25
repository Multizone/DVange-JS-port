class Player {
	constructor() {
		this.x = 1;
		this.y = 1;
		this.img = loadImage('a');
		this.animationStep = 0;
	}

	getObj(x, y){
		if (Math.ceil(this.x)==x && Math.ceil(this.y)==y)
			return this;
	}

	addX(player, X){
		player.x += X;
	}

	addY(player, Y){
		player.y += Y;
	}

	goLeft(){
		if (map.getObj(this.x - 1, this.y).passable)
			this.startMove('b', this.addX, -1);

	}

	goRight(){
		if (map.getObj(this.x + 1, this.y).passable)
			this.startMove('a', this.addX, 1);
	}

	goUp(){
		if (map.getObj(this.x, this.y - 1).passable)
			this.startMove('c', this.addY, -1);
	}

	goDown(){
		if (map.getObj(this.x, this.y + 1).passable)
			this.startMove('d', this.addY, 1);
	}

	startMove(imgUrl, move, d){
		if (!this.isMoving) {
			this.isMoving = true;
			this.img = loadImage(imgUrl);
			this.nextStep(move, d);
		}
	}

	nextStep(move, d){
		if (this.animationStep < 3) {
			this.animationStep++;
			move(this, d * 1/3);
			setTimeout(()=>{
				this.nextStep(move, d);
			}, 150)
		} else {
			this.animationStep = 0;
			this.isMoving = false;
		}
	}

	render(cameraX, cameraY) {
		context.drawImage(this.img, 50*this.animationStep, 0, 50, 70, (this.x - cameraX)*50, (this.y - cameraY)*50-30, 50, 70);
	}
}