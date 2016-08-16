var valor1 = parseInt(prompt("ingresar valor 1"));
var valor2 = parseInt(prompt("ingresar valor 2"));
var operacion = prompt("ingresar Operacion");
var resultado= 0;


function sumar (valor1,valor2){
		return valor1+valor2;
}
function restar (valor1,valor2){
		return valor1-valor2;
}
function multiplicar (valor1,valor2){
		return valor1*valor2;
}
function dividir (valor1,valor2){
		return valor1/valor2;
}



function calculadora (valor1,valor2,operacion) {
	

	if (operacion == "suma"){
		resultado = sumar(valor1,valor2);
	}
	else if (operacion == "resta"){
		resultado = restar(valor1,valor2);
	}
	else if (operacion == "multiplica"){
		resultado = multiplicar(valor1,valor2);
	}
	else if (operacion == "divide"){
		resultado = dividir(valor1,valor2);
	}
	console.log(resultado);
	return resultado;

}
calculadora (valor1,valor2,operacion);

