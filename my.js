var field = document.querySelector('.drop-zone');
var element = document.querySelector('.draggable-element');
field.addEventListener('click', ballMoving);

function ballMoving(event){
	
	var fieldCoord = field.getBoundingClientRect(); // This function returns position of element on page
	console.log(fieldCoord);
	//ball center
	var elementCenterX = element.clientWidth / 2;
	var elementCenterY = element.clientHeight / 2;
	var fieldInnerCoord = {
		top: fieldCoord.top + field.clientTop,//clientTop adds size of border
		left: fieldCoord.left + field.clientLeft,
	}

	var ballCoord = {
		top: event.clientY - fieldCoord.top - elementCenterY,
		left: event.clientX - fieldCoord.left - elementCenterX,
	}

	if(ballCoord.top < 0) ballCoord.top = 0;
	if(ballCoord.left < 0) ballCoord.left = 0;
	if(ballCoord.top > fieldCoord.height - element.clientHeight) ballCoord.top = fieldCoord.height - element.clientHeight - 2;
	if(ballCoord.left > fieldCoord.width - element.clientWidth) ballCoord.left = fieldCoord.width - element.clientWidth - 2;


	element.style.top = ballCoord.top + 'px'; 
	element.style.left = ballCoord.left + 'px'; 

}
