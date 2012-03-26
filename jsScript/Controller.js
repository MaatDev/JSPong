document.onkeyup = KeyCheck;       
function KeyCheck(){

   var KeyID = event.keyCode;

   switch(KeyID)

   {   
      case 37:

      console.log("Arrow Left");
      break;

      case 38:
      pressUp();
      console.log("Arrow Up");
      break;

      case 39:

      console.log("Arrow Right");
      break;

      case 40:
      pressDown();
      console.log("Arrow Down");
      break;
   }

}