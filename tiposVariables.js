/*
Tipos de variables (3 tipos):

-let: usado para limitar el alcance de nuestras variables y se limita a un bloque de codigo o expresión

-var: Utilizada antes para declarar variables, variable flexible con un scope global (el valor de la variable 
    esta disponible en todo el programa), variable local

-const: Se usan para declarar una variable con un valor constante o inmutable (no cambia)

*/


/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon


*/


//1. Crear funcion con la palabra reservada function y le ponemos nombre y parentesis, abrimos y cerramos llaves
//2.- Colocar parametros dentro de los paréntesis
//3.- Poner instrucciones dentro de las llaves

console.log("");
console.log("Aqui inicia la clase de funciones:");

var limon = "limon";
var agua = "agua";
var hielos = "hielos";
var azucar = "azucar";
var vaso = "vaso";
var cuchara = "cuchara";

prepararAguitaDeLimon(limon, azucar, agua, hielos, vaso, cuchara); //hoisting


function prepararAguitaDeLimon(limon, azucar, agua, hielos, vaso, cuchara) { 
    
    console.log("Cortar " + limon);
    console.log("Exprimir el " + limon);
    console.log("Agregar jugo de limon al "+ vaso);
    console.log("Agregar " + agua);
    console.log("Endulzar con " + azucar);
    console.log("Mezclar con " + cuchara);
    console.log("Colocar " + hielos);
    console.log("Disfrutar");
}

//3 formas de agregar parametros a funciones

//Primera forma: Usando parametros en parentesis
function suma(num1, num2){
    
    num1 = 5;//cambio undefined por 5
    num2 = 7;//cambio undefined por 7

    operacion = num1 + num2;//suma de dos valores

    console.log(operacion); //imprimir operacion

}

suma(); //invocar funcion

//Segunda Forma: Usando valores dentro del parentesis

function resta (num1=8, num2=5){
    operacion = num1 - num2;
    console.log(operacion);
}

resta();

//Tercera forma: Inicializando valores dentro de la invocación
function multiplicacion(num1, num2){
    operacion = num1 * num2;
    console.log(operacion);
}

multiplicacion(3,9);
multiplicacion(3, ); //Se imprime NaN por que no que falta un parametro

//Arrow functions :3
let operaciones = (num1, num2)=> num1 + num2;
console.log(operaciones(4,5));

//Funciones anonimas
let funcionAnonima = function (num1, num2){
    operacion = num1/num2;
    console.log(operacion);
}

funcionAnonima(10,2);

function saludo(nombre){
    nombre = "Cristian";
    return "Hola " + nombre + ". \nBienvenido";
}

console.log(saludo());

//Prompt

// var nombreNavegador = prompt("Introduce tu nombre");
// console.log("Gracias por entrar en la pagina: "+ nombreNavegador);
