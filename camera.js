class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;

		this.mX = 0;
		this.mY = 0;

		this.addedX = document.body.clientWidth/2-500;
		this.addedY = 100;

		this.renderingObjs = [];
	}

	checkMove() {
		if (this.mX > this.addedX + 900 && this.mX < this.addedX + 1000) this.x+=0.1;
		if (this.mX < this.addedX + 100 && this.mX > this.addedX + 0) this.x-=0.1;
		if (this.mY > this.addedY + 500 && this.mY < this.addedY + 600) this.y+=0.1;
		if (this.mY < this.addedY + 100 && this.mY > this.addedY + 0) this.y-=0.1;
	}

	render() {
		let canvas = document.getElementById('canvas');

		this.addedX = document.body.clientWidth/2-500;
		canvas.style.position = 'absolute';
		canvas.style.left = this.addedX +'px';
		canvas.style.top = this.addedY +'px';

		for (let y = 0; y<12; y++){
			for (let x = 0; x<20; x++){
				let t = this.renderingObjs[0].getObj(x, y);
				if (t!=undefined) t.render(this.x, this.y);
			}
		}
		for (let y = 0; y<12; y++){
			for (let x = 0; x<20; x++){
				for (var i = 1; i < this.renderingObjs.length; i++) 
				{	
					let t = this.renderingObjs[i].getObj(x, y);
					if (t!=undefined) t.render(this.x, this.y);
				}
			}
		}
		
	}
}