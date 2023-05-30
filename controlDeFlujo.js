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

if (edadDeFelipe > edadPermitida) {
    console.log("Felipe puede ir a la fiesta");
} else {
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

if (edad < edadParaFiesta) {
    console.log("Lo siento, no puedes entrar a la fiesta");
} else {
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

edadDeDaivd = 19;
edadPermitida = 18;
dineroDavid = 20;
coverAntro = 150;

if (edadDeDaivd >= edadPermitida && dineroDavid >= coverAntro) {
    console.log("Muy bien, puedes entrar al antro");
} else if (edadDeDaivd >= edadPermitida && dineroDavid < coverAntro) {
    console.log("No tienes suficiente dinero para ir al antro");
} else {
    console.log("No tienes edad para ir al antro");
}

let hora = prompt("ingrese la hora actual");
if (hora < 12) {
    console.log("Buenos días");
} else if (hora <= 19) {
    console.log("Buenas tardes, como pasa el tiempo");
} else {
    console.log("buenas noches, a mimir");
}

/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}

*/

// let pisoDestino = prompt("Ingrese al piso al que quieras ir (1 al 5)");

switch (pisoDestino) {
    case "1":
        //Debe ser el mismo tipo de dato
        console.log("Vamos al piso 1 (musica de elevador de fondo)");
        break;

    case "2":
        console.log("Vamos al piso 2 (musica de elevador de fondo)");
        break;

    case "3":
        console.log("Vamos al piso 3 (musica de elevador de fondo)");
        break;

    case "4":
        console.log("Vamos al piso 4 (musica de elevador de fondo)");
        break;

    case "5":
        console.log("Vamos al piso 5 (musica de elevador de fondo)");
        break;

    default:
        console.log("Seleccione un piso valido");
        break;
}

//Ejercicio Eevee

var elementoEvolucion = prompt("Ingrese el elemento con el que evolucionaras a tu pokemon");

switch (elementoEvolucion) {
    case "piedraFuego":
        console.log("Tu Eevee evoluciono a Flaereon");
        break;

    case "piedraTrueno":
        console.log("Tu Eevee evoluciono a Jolteon");
        break;

    case "piedraAgua":
        console.log("Tu Eevee evoluciono a Vaporeon");
        break;

    case "esDeMañana":
        console.log("Tu Eevee evoluciono a Espeon");
        break;

    case "esDeNoche":
        console.log("Tu Eevee evoluciono a Umbreon");
        break;

    case "rocaMusgo":
        console.log("Tu Eevee evoluciono a Leafeon");
        break;

    case "rocaHielo":
        console.log("Tu Eevee evoluciono a Glaceon");
        break;

    case "conoceMovimientoHada":
        console.log("Tu Eevee evoluciono a Sylveon");
        break;
    
    default:
        console.log("Se mantiene tu Eevee, todo bonito.");
        break;
}

//Ejercicio de signo Zodiacal

var mesNacimiento = prompt("Ingresa tu mes de nacimiento");
var diaNacimiento = prompt("Ingresa tu día de nacimiento");

var dia = parseInt(diaNacimiento, 10);


switch (true) {
    case mesNacimiento === "Marzo" && (dia >= 21):
    case mesNacimiento === "Abril" && (dia <= 19):
        console.log("Aries. Grandes determinaciones deberás tomar en el día de hoy. Aun poniendo todo de tu parte quedarás con una gran sensación de vacío.");
        break;

    case mesNacimiento === "Abril" && (dia >= 20):
    case mesNacimiento === "Mayo" && (dia <= 20):
        console.log("Tauro. Vivirás un problema tras otro durante la jornada de hoy. No permitas que la sucesión de eventos negativos afecte tu humor");
        break;

    case mesNacimiento === "Mayo" && (dia >= 21):
    case mesNacimiento === "Junio" && (dia <= 20):
        console.log("Geminis. Te verás en la necesidad de poner algunos puntos sobre la mesa con amigos cercanos. Que no pase a mayores.");
        break;

    case mesNacimiento === "Junio" && (dia >= 21):
    case mesNacimiento === "Julio" && (dia <= 22):
        console.log("Cáncer. Por más que intentes negarlo, tu corazón te dará el camino correcto a seguir en la situación que estás viviendo. Escúchalo.");
        break;

    case mesNacimiento === "Julio" && (dia >= 23):
    case mesNacimiento === "Agosto" && (dia <= 22):
        console.log("Leo. Ciertos recuerdos volverán a golpear tu puerta en la jornada de hoy. Busca estar en compañía de seres queridos.");
        break;

    case mesNacimiento === "Agosto" && (dia >= 23):
    case mesNacimiento === "Septiembre" && (dia <= 22):
        console.log("Virgo. Jornada propicia para iniciar todo tipo de cambios en lo que a lo profesional se refiere. Procura sacarle todo el provecho posible.");
        break;

    case mesNacimiento === "Septiembre" && (dia >= 23):
    case mesNacimiento === "Octubre" && (dia <= 22):
        console.log("Libra. Ciertas cuestiones no resueltas de días anteriores volverán para atormentarte durante la jornada de hoy. Busca darles punto final.");
        break;

    case mesNacimiento === "Octubre" && (dia >= 23):
    case mesNacimiento === "Noviembre" && (dia <= 21):
        console.log("Escorpio. Tendrás una jornada de múltiples quehaceres domésticos, que consumirán gran parte de tu tiempo libre. No postergues obligaciones.");
        break;

    case mesNacimiento === "Noviembre" && (dia >= 22):
    case mesNacimiento === "Diciembre" && dia <= 21:
        console.log("Sagitario. Grandes sorpresas te esperan para el día de hoy. Atravesarás una verdadera montaña rusa de emociones en la jornada.");
        break;

    case mesNacimiento === "Diciembre" && (dia >= 22):
    case mesNacimiento === "Enero" && (dia <= 19):
        console.log("Capricornio. Lograrás tomar la determinación de dejar hábitos que sabes son nocivos para tu salud. No decaigas con el primer escollo");
        break;

    case mesNacimiento === "Enero" && (dia >= 20):
    case mesNacimiento === "Febrero" && (dia <= 18):
        console.log("Piscis. Un pequeño accidente casero hará que tu día se vea complicado hasta en las tareas cotidianas más sencillas. No te alteres.");
        break;

    case mesNacimiento === "Febrero" && (dia >= 19):
    case mesNacimiento === "Marzo" && (dia <= 20):
        console.log("Acuario. No podrás esperar tener razón en cada opinión que des. Deja tu orgullo de lado y acepta los errores que te serán marcados.");
        break;

    default:
        console.log("Ingresó un dato invalido o en un formato no valido (Ejemplo. Enero 12)");
        break;
}
