//Se recibe un numero de un prompt
var numero = prompt("Ingrese un numero");

//Funcion que recibe un numero para determinar si es primo
esPrimo(parseInt(numero));

//La funcion recibe un numero
function esPrimo(numero) {

    //Se va a contar el numero de divisores, por que los numeros primos solo tienen 2 divisores(Ellos mismos y 1) y se recolecta en la sig variable
    var divisores = 0;

    //Este for crea un indice que iguala el valor al de el numero (se divide entre dos para ahorrar memoria) y lo va disminuyendo de 1 en 1 hasta llegar a 1
    for (let i = numero/2; i > 0; i--) {

        //Dividimos el numero entre el indice (que disminuye su valor en cada iteración, hasta que el indice es 1)
        if (numero % i === 0) {
            divisores++;
            //Si el resultado de mi division NO deja residuo significa de que el numero es divisible entre el indice (i) y por lo tanto es un divisor de ese numero, por lo anterior aumentamos el contador, para indicar que el indice es divisor del numero
        }
    }//El for va a iterar una y otra vez hasta que mi indice sea menor a 1 y se quedara con la cuenta de los divisiores recolectados durante el ciclo for

    //Al final si el numero únicamente tiene mas de 2 divisores (el mismo y 1), es un numero no primo (Se incluye una condicion para el 4 por que al dividir el numero entre 4 en la condicion del for toma al 4 como primo por que solo lo divide entre 2 y 1, haciendole falta dividirlo entre 4)
    if (divisores !== 2 || numero === 4) {
        alert(`El numero ${numero} NO ES PRIMO`);
    } else {
        //De lo contrario el numero es primo
        alert(`El numero ${numero} ES PRIMO`);
    }

}
