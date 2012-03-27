var canvasBall;
var canvaspalletPlayer;
var canvaspalletPC;

var drawAreaBall;
var drawAreapalletPlayer;

var ball;
var refreshTime = 30;

var windowWdith = 500;
var windowHeight = 500;

var palletPlayer;
var palletPC;

var intervalID;

function init(){
	console.log("Inicio");
	
	//Obtener los objetos canvas del html
	canvasBall = document.getElementById('canvasBall');
	canvaspalletPlayer = document.getElementById('canvaspalletPlayer');
	canvaspalletPC = document.getElementById('canvaspalletPC');
		
	drawAreaBall = canvasBall.getContext('2d');
	drawAreapalletPlayer = canvaspalletPlayer.getContext('2d');
	drawAreapalletPC = canvaspalletPC.getContext('2d');
	
	//Definir el tama�o del canvas
	defineDrawAreaSize(windowHeight,windowWdith);
	
	canvasBall.style.border = "red 1px solid";
	canvaspalletPlayer.style.border = "red 1px solid";
	canvaspalletPC.style.border = "red 1px solid";
	
	console.log(drawAreaBall.height+" : "+drawAreaBall.width);
	
	//Inicializar los objetos a dibujar
	ball = new BouncingBall(drawAreaBall.width ,drawAreaBall.height, windowWdith/2,windowHeight/2);
	palletPlayer = new Pallet(drawAreapalletPlayer.width , drawAreapalletPlayer.height,3 ,3);
	palletPC = new Pallet(drawAreapalletPC.width , drawAreapalletPC.height, windowWdith - 3 - windowWdith/20,425);
	
	ball.draw(drawAreaBall);
	palletPlayer.draw(drawAreapalletPlayer);
	palletPC.draw(drawAreapalletPC);
	
	start();
	
	console.log("fin");
}

function start(){
	//Definir el proceso repetitivo con el tiempo definido en millisegundos
	intervalID = 
	setInterval( 
			function(){
				ball.move();
				validateCollision( palletPlayer, ball);
				validateCollision( palletPC, ball);
				drawAll();
			} , 
			refreshTime );
}

function drawAll(){
	
	clearCanvas(drawAreaBall);
	clearCanvas(drawAreapalletPC);
	ball.draw(drawAreaBall);
	//palletPC.posX = ball.posX + palletPC.width/2;
	palletPC.posY = ball.posY;
	palletPC.draw(drawAreapalletPC);
	
	if( detectConllisionCircleCanvasBorderRightLeft( ball, drawAreaBall) ){
		clearInterval(intervalID);
	}
		
}

//Definir el tama�o del canvas program�ticamente
function defineDrawAreaSize( height, width){

	canvasBall.height = height;
	canvasBall.width = width;
	canvaspalletPlayer.height = height;
	canvaspalletPlayer.width = width;
	canvaspalletPC.height = height;
	canvaspalletPC.width = width;	

	drawAreaBall.height = height;
	drawAreaBall.width = width;
	
	drawAreapalletPlayer.height = height;
	drawAreapalletPlayer.width = width;
	
	drawAreapalletPC.height = height;
	drawAreapalletPC.width = width;
	
}

//Funci�n gen�rica para borrar todos los objetos del canvas
function clearCanvas( canvas ){
	canvas.clearRect(0,0,canvas.width+1,canvas.height+1);
}

//Acci�n a realizar cuando ocurre evento de flecha arriba
function pressUp(){
	clearCanvas(drawAreapalletPlayer);
	palletPlayer.drawGoUp(drawAreapalletPlayer);
}

//Acci�n a realizar cuando ocurre evento de flecha abajo
function pressDown(){
	clearCanvas(drawAreapalletPlayer);
	palletPlayer.drawGoDown(drawAreapalletPlayer);
}

//Validar la colisi�n
function validateCollision( varpallet, varBall){
	var result = detectConllisionRectangleCircle( varpallet, varBall);
	
	if(result){
		
		var toto = Math.abs(varpallet.posY - varBall.posY);
		var part = varpallet.height/5;		

		//Cambiar el �ngulo de rebote para cambiar la velocidad para cada direcci�n seg�n donde choque a la paleta
		
		if( toto >= 0 || toto <= part ){
			varBall.changeAngle(12.5);
		}
		else if(toto > part || toto <= part*2){
			varBall.changeAngle(25);
		}
		else{
			varBall.changeAngle(45);
		}
		
		varBall.changeDirectionX();
		
	}
	
}
