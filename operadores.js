/* 

Operadores

Los operadores nos permiten realizar una operacion en uno o varios operandos (variables o datos)

-Operadores de asignación
-Operadores de cadena
-Operadores lógicos
-Operadores de comparación
-Operadores aritméticos

Operadores de asignacion (=)
Utilizados parfa asignar un valor a una variable. Asigna un valor al operando de la izquierda 
basado en el valor de operacion de la derecha

Operadores de comparación (<, >, >=, <=, ==, ===, !=, !==)
Los operadores de comparación nos ayudan a comparar dos expresiones o valores y devuelven un valor booleano
en respuesta a los valores.

Operadores lógicos (&&, ||, !)

Los operadores lógicos nos devuelven un resultado a partir de que se cumpla o no una condición, el resultado 
sera un valor booleno y sus operadores son logicos o asimilables entre ellos (se pueden combinar u ordenar)

&& (AND)
Determina si dos expresiones son verdaderas, si ambas son verdaderas = true, pero si una o ambas no son verdaderas = false

|| (OR)
Sirve para determinar si al menos una expresion es verdadera, si al menos una es verdadera, entonces es verdadera, solo 
si ambas son falasas = false


!(NOT)
Sirve para aclarar si un valor NO es igual a otro
*/


//Operador de asignación

let edad = 31;
let bebida = "cafe"

//Operador de comparación
let numero1 =13;
let numero2 = 25;
let numero3 = "25";

//Operador menor que
console.log("EL valor 13 es menor que el valor 25 " + (numero1 < numero2));

//operador mayor que
console.log("El valor de 13 es menor que el valor 25? "+ (numero1 > numero2));

//Operador mayor o igual que
console.log("El valor de 25 es mayor o igual que el valor 25? "+ (numero2 >= numero3));

//Operador de igualdad, solo evalua valores
console.log("El valor de 25 es igual que el valor 25? "+ (numero2 == numero3));

//Operador de igualdad estricto, evalua valores y tipos de datos
console.log("El valor de 25 es estrictamente igual que el valor 25? "+ (numero2 === numero3));

//Operador de desigualdad
console.log("El valor de 13 no es igual que el valor 25? " + (numero1 != numero2));

//Operador de desigualdad estricto
console.log("El valor de 25 no es igual que el valor 25? "+ (numero2 !== numero3));

//Operador &&
let num1 = 12;
let num2 = 24

afirmacion1 = (num1 > num2);
afirmacino2 = (num1 != num2);

console.log(afirmacion1 && afirmacion2);

//Operador ||
afirmacion3 = (num1 < num2);
afirmacion4 = (num1 == num2);

console.log(afirmacion3 || afirmacion4);//al menos una es verdadera

//NOT !
console.log(! afirmacion3);
console.log(! afirmacion4);

//Ejercicio combinación de operaciones
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op);

//Combinando operaciones2

numb1 = 12;
numb2 = 24;
numb3 = 25;
numb4 = 92;
numb5 = 91;

op2 = (numb5 > numb2 && numb4 < numb3) || (!(numb1 === numb2) || numb3 != numb3);
//5 es mayor a 2, por lo tanto true, 4 no es menor que 3, entonce es falso; la primera parte es falsa
//1 no es esctricamente igual a 2, por lo tanto falso, se le aplica la negacion y termina como positivo; 3 no es diferente de 3, por lo tanto negativo; la primera parte es verdadera, por haber uno verdadero
//al comparar con or ambos resultados (falso y verdadero) tenemos un resultado verdadero


//Operadores aritmeticos (+, -, *, /, %, **, ++, --)

//Suma +

valor1 = 55;
valor2 = 17;

console.log("Suma: " , valor1 + valor2);

//Resta -
console.log("Resta: " , valor1 - valor2);

//Multiplicación*
console.log("Multiplucacion: " , valor1 * valor2);

//División / 
console.log("División: " , valor1 / valor2);

//Residuo (modulo) %
console.log("Modulo: " , valor1 % valor2);

//Exponente **
console.log("Exponenciación: " , valor1 ** valor2);// valor 1 elevado a valor 2

//Incremento (++)
console.log("Incremento: " , ++valor1);

//Decremento (--)
console.log("Decremento: " , --valor1);