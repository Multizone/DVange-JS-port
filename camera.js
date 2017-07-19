class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;

		this.mX = 0;
		this.mY = 0;

		this.renderingObjs = [];
	}

	checkMove() {
		if (this.mX > 900 && this.mX < 1000) this.x+=0.1;
		if (this.mX < 100 && this.mX > 0) this.x-=0.1;
		if (this.mY > 500 && this.mY < 600) this.y+=0.1;
		if (this.mY < 100 && this.mY > 0) this.y-=0.1;
	}

	render() {
		this.renderingObjs[0].render(this.x, this.y);
		this.renderingObjs[1].render(this.x, this.y);
	}
}