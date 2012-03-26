function getNewpallet(width, height, posX, posY){
	
	this.screenWidth = width;
	this.screenHeight = height;
	this.posX = posX;
	this.posY = posY;
	
	this.velocityX = 20;
	this.velocityY = 20;
	
	this.width = this.screenWidth/50;
	this.height = this.screenHeight/10;
	
	this.draw = function(canvas){
		
		//Dibujar el palo
		canvas.fillStyle="#0000ff";
		canvas.fillRect(this.posX,this.posY,this.width,this.height);

	
		//No pasarse del límite
		//if( this.posX < (1 + this.radius) || this.posX > this.screenWidth - (1 + this.radius) ){
		//	this.velocityX = -this.velocityX;
		//}
		//if( this.posY < (1 + this.radius) || this.posY > this.screenHeight - (1 + this.radius) ){
			//this.velocityY = -this.velocityY;
		//}

		//Cambiar de posición según la velocidad de ajuste
		
		//this.posX+=this.velocityX;
		//this.posY+=this.velocityY;
		
	};
	
	this.drawGoUp = function(canvas){
		this.posY-=this.velocityY;
		this.draw(canvas);
	};

	this.drawGoDown = function(canvas){
		this.posY+=this.velocityY;
		this.draw(canvas);
	};
	
	
}