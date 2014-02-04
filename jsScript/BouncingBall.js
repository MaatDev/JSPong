function BouncingBall(width, height, posX, posY){
	
	this.screenWidth = width;
	this.screenHeight = height;
	this.posX = posX;
	this.posY = posY;
	
	this.angle = 45;
	this.speed = 5;
	
	this.velocityX=1;
	this.velocityY=1;
	
	this.changeAngle = function(angle){
		this.angle = angle;
		velocityX = this.speed * Math.cos(this.angle);
		velocityY = this.speed * Math.sin(this.angle);
	};
	
	this.changeAngle(this.angle);
	
	this.velocityX = this.speed * Math.cos(this.angle);
	this.velocityY = this.speed * Math.sin(this.angle);
			
	if(this.screenWidth > this.screenHeight){
		this.radius = this.screenHeight/20;
	}else{
		this.radius = this.screenWidth/20;
	}
	
	this.changeDirectionX = function(){
		this.velocityX = -this.velocityX;
	};
	
	this.changeDirectionY = function(){
		this.velocityY = -this.velocityY;
	};
	
	this.draw = function(canvas){
		
		//console.log("start draw");
		
		//Dibujar el círculo
		
		canvas.beginPath();
		canvas.fillStyle="#0157ff";
		canvas.arc(this.posX, this.posY, this.radius,0, Math.PI*2, true);
		canvas.closePath();
		canvas.fill();
	
		//Rebote de la pelota
		if( this.posX < (1 + this.radius) || this.posX > this.screenWidth - (1 + this.radius) ){
			this.changeDirectionX();
		}
		if( this.posY < (1 + this.radius) || this.posY > this.screenHeight - (1 + this.radius) ){
			this.changeDirectionY();
		}
		
		//console.log("end draw");
		
	};
	
	this.move = function(){
		//Cambiar de posición según la velocidad de ajuste
		
		this.posX+=this.velocityX;
		this.posY+=this.velocityY;
	}
	
}