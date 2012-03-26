function detectConllisionRectangleCircle( rectangle, circle ){
	
	//Obtener la distancia entre el c�rculo y el punto en vista paralela
	var circleDistanceX = Math.abs( circle.posX -  rectangle.posX - rectangle.width/2  );
	var circleDistanceY = Math.abs( circle.posY -  rectangle.posY - rectangle.height/2  );

	//Validar la distancia entre el c�rculo en vista paralela
	if( circleDistanceX > ( rectangle.width/2 + circle.radius ) ){
		//console.log("C�ndici�n 1");
		return false;
	}
	if( circleDistanceY > ( rectangle.height/2 + circle.radius ) ){
		//console.log("C�ndici�n 2");
		return false;
	}
	
	//Colisi�n en la parte lateral
	if( circleDistanceY <= ( rectangle.height/2 ) ){
		//console.log("C�ndici�n 3");
		return true;
	}
	//Colisi�n con el lado superior o inferior
	if( circleDistanceX <= ( rectangle.width/2 ) ){
		//console.log("C�ndici�n 4");
		return true;
	}
		
	//Distancia entre el c�rculo y el rect�ngulo, calculando con pit�goras.
	//Colisi�n con el borde del c�rculo y la punta del rect�ngulo
	var cornerDistance = Math.pow( ( circleDistanceX - rectangle.width/2 ) , 2 ) +
						 Math.pow( ( circleDistanceY - rectangle.height/2 ) , 2) ;
	
	
	var result = ( cornerDistance <= ( Math.pow( circle.radius, 2 )) );
	//console.log("C�ndici�n 5: "+result);
	return result;
}

function detectConllisionCircleCanvasBorderTopDown( circle, canvas ){
	
	if( circle.posY < (1 + circle.radius) || circle.posY > canvas.height - (1 + circle.radius) ){
		return true;
	}
	
	return false;
	
}

function detectConllisionCircleCanvasBorderRightLeft( circle, canvas ){
	
	if( circle.posX < (1 + circle.radius) || circle.posX > canvas.width - (1 + circle.radius) ){
		return true;
	}
	
	return false;
	
}