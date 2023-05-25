/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales


Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudara a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones. 

Ejemplo

Tengo limpia mi playera de la suerte?  //pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion

*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/

//Felipe tiene 17 anios, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.

//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

let edadDeFelipe = 17;
let edadPermitida = 18;

if(edadDeFelipe > edadPermitida){
    console.log("Felipe puede ir a la fiesta");
} else{
    console.log("Felipe no puede ir a la fiesta");
}

/*

Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.

Estructura basica del Else


if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 

else 

{
    //Este bloque se ejecuta si la condicion es falsa
}


*/

let edad = false;
let edadParaFiesta = 18;

if (edad < edadParaFiesta){
    console.log("Lo siento, no puedes entrar a la fiesta");
} else{
    console.log("Felicidades, tienes la edad para ingresar a la fiesta!");
}

/*

Else If (ademas si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.


Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
} else(condicion final) {
    //bloque de codigo que se ejecuta si el resto de las condiciones son falsas
}

*/

// edadDeDaivd = 19;
// edadPermitida = 18;
// dineroDavid = 20;
// coverAntro =150;

// if (edadDeDaivd >= edadPermitida && dineroDavid >= coverAntro){
//     console.log("Muy bien, puedes entrar al antro");
// } else if(edadDeDaivd >= edadPermitida && dineroDavid < coverAntro){
//     console.log("No tienes suficiente dinero para ir al antro");
// } else {
//     console.log("No tienes edad para ir al antro");
// }

let hora = prompt("ingrese la hora actual");
if (hora< 12){
    console.log("Buenos días");
} else if (hora <= 19){
    console.log("Buenas tardes, como pasa el tiempo");
} else{
    console.log("buenas noches, a mimir");
}