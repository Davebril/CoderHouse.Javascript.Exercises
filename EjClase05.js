/*Deberá tener las siguientes propiedades públicas:
	.Marca
	.Tipo: Desktop o notebook
Deberá tener las siguientes propiedades privadas:
	.Serial 
Deberá tener el siguiente método público: 
	.getDatosPC, que deberá devolver un String con el nombre y tipo de la PC.*/

function computadora(marca,tipo) {
	this.marca = marca
	this.tipo = tipo
	this.getDatosPC = function() {
		alert('Computadora: ' + compu.marca + " " +
		compu.tipo)
	}
}

var compu = new computadora("lenovo","notebook")

function ver() {
	compu.getDatosPC()
}

