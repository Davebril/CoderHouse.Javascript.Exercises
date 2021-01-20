//Crear un algoritmo que, dado una lista de dias, lo recorra e indique los números que son pares.

let dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

for (let i = 0; i < dias.length; i++) {
	

	if ([i] % 2 == 0) {

		console.log(dias[i],'es par')	
	
	} else {

		console.log(dias[i], 'es impar')
	}

	if (dias[i] == 'Domingo') {

		
		alert('Acabas de entrar en la vuelta 7, gracias por corregir mi ejercicio!')
	}
	
	}

	

//En el mismo algoritmo, antes de la condición anterior, incorporar un condicional,
//donde, si el dia es el número 7, imprima un alert con un mensaje personalizado.




	

