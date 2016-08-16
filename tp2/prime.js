var num=parseInt(prompt('Introduzca un numero', ''));

if (num == 1 || num == 2) {
	alert('El numero ' +num+ ' es primo'); 
} else {
	for (var i=2;i<num;i++) {
		
		if(num % i == 0) {
			alert('El numero ' +num+ ' no es primo'); 
			break;
		} else {
			alert('El numero ' +num+ ' es primo'); 
			break;
		}
}
 
 
}