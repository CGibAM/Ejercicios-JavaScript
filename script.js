// alert("Estoy vivo!");

/*

Variables:

Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta varible ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable que tenemos.

Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente

*/

recipiente="agua";
recipiente="cafe";
recipiente="colores y lapices";
recipiente="leche";

//console.log para imprimir en la consola

console.log(recipiente);

/*Tipos de datos(primitivos y no primitivos)
    son primitivos por que no pueden ser modificados, vienen con el lenguaje y se consideran el dato mas simple 
    o basico que existe
    
    -String: Valores en forma de texto. Debe estar dentro de comillas simples (''), dobles ("") o backticks(``)

    -Number: Valores numericos enteros o con punto decimal, tanto positivos como negativos (para usar en operaciones, estos no utilizan comillas).

    -Boolean: Datos que siren para represenatar valores de tipo booleano(true or false).

    -undefined: Representa un tipo de dato que no tiene valor (aún no tiene valor asignado), cuando declaramos variables sin inicializar.

    -Null: Define que un valor es nullo.

    -NaN: Not a number, sirve para representar un valor que no es un numero. Lo obtenemos al hacer una operación con una variable que no es un numero, 
    o con una operacion que no es posible.

    -Symbol:

    -Object(no primitivo):

*/

//ejemplo String
apodoFelipe = "El 'amante numero 1' de los chilaquiles verdes";

//Ejemplo valor numerico
edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe, costoDeUnGansito, cuentaDeFelipe);

console.log(Number.MAX_SAFE_INTEGER);

//Ejemplo valor booleano
esAdmin = true;
contraseñaCorrecta = false;
cuentaNetflix = false;

//Ejemplos de datos indefinidos
// respuestaCrush;
// precioBoletoEstacionamiento;

//Datos nullos
respuestaCrush = null;
console.log(respuestaCrush);

//Datos NaN
operacionMatematica = 3/0;


//TypeOf: Expresion que nos ayuda a concoeer el tipo de dato evaluado "(typeof('tipo de dato'))". Los resultados son Strings
console.log(typeof(esAdmin)); //boolean
console.log(typeof(edadDeFelipe)); //number
console.log(typeof(operacionMatematica));

