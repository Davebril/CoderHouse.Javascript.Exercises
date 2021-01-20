//Adaptar el desafío para que una función reciba dos arrays, y devuelva un único array como resultado, 
//con los elementos de los dos arrays combinados.

let lista0 = [0,1,2]
let lista1 = [3,4,5]

function juntar(arr1,arr2) {

	return arr1.concat(arr2)
}

alert('La lista concatenada es: ' + juntar(lista0,lista1))


