var starObj = function() {
	this.x;
	this.y;

	this.ySpd;

	this.picNo;

	this.timer;

	this.beta;
}

starObj.prototype.init = function() {
	this.x = Math.random() * girlWidth + padLeft;
	this.y = Math.random() * girlHeight + padTop;

	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;
  this.xSpd = Math.random() * 3 - 1.5;
  this.ySpd = Math.random() * 3 - 1.5;
}

starObj.prototype.update = function() {
  this.x += this.xSpd * deltaTime * 0.003;
  this.y += this.ySpd * deltaTime * 0.003;
	if (this.x > (padLeft + girlWidth) || this.x < (padLeft - 10))
		this.init();
	else if (this.y > (padTop + girlHeight) || this.y < (padTop - 10))
		this.init();

	this.timer += deltaTime;
	if (this.timer > 50) {
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
}

starObj.prototype.draw = function() {
	ctx.save();
	ctx.globalAlpha = alive;
	console.log(alive);
	console.log(ctx.globalAlpha);
	ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
	ctx.restore();
}



function drawStars() {
	for (var i = 0; i < num; i++) {
		stars[i].update();
		stars[i].draw();
	}
}

function aliveUpdate() {
	if (switchy) {
		alive += 0.03*deltaTime*0.03;
		if (alive > 1) {
			alive = 1;
		}
	} else {
		alive -= 0.03*deltaTime*0.03;
		if (alive < 0) {
			alive = 0;
		}
	}
}