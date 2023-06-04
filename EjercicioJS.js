//Ejercicio calculador de porcentaje

//Se declaran las variables encargadas de calcular la suma
var sumaTotal = 0;
var sumaPar = 0;
var sumaImpar = 0;

//Se declaran las variables para el calculo de porcentajes de numeros pares e impares y el total de numeros
var totalNumeros = 0;
var totalNumerosPares = 0;
var totalNumerosImpares = 0;


//Se pide el numero cuya secuencia hasta cero va a ser calculada
var numero = parseInt(prompt("Ingrese un numero:"));

if (typeof numero === "number") {

    //Se crea un ciclo for para ir disminuyendo el valor del numero y calcular la suma y numeros pares e impares
    for (; numero >= 0; numero--) {

        sumaTotal += numero;
        totalNumeros++;

        if (numero % 2 === 0) {
            sumaPar += numero;
            totalNumerosPares++;

        } else {
            sumaImpar += numero;
            totalNumerosImpares++;
        }

    }
} else {
    alert("Seleccione una opción valida");
}

//Se muestra el total de numeros pares, impares y el total general con un alert
alert(`El porcentaje de numeros impares fue: ${((totalNumerosImpares / totalNumeros) * 100).toFixed(2)}% y la suma de estos numeros fue: ${sumaImpar}.
El porcentaje de numeros pares fue: ${((totalNumerosPares / totalNumeros) * 100).toFixed(2)}% y la suma de estos numeros fue: ${sumaPar}.
Finalmente el total de ${totalNumeros} numeros fue: ${sumaTotal}`);