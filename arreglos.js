/*

Arreglos (arrays, matrices, colecciones de datos)


En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades 
y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente 
mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos 
están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. 
Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, 
lo que los distingue de los objetos regulares en JavaScript.




*/

//Formas de declarar arrays

//1.-Usando corchetes []

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Con diferentes tipos de datos
var datos = ["Cris", 29, "Guadalajara", "Pipo", true, undefined, null] 

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3 = "Física";

var asignaturas =["Matematicas" , "Literatura", "Física"];

//Acceso a elemento de mi arreglo

console.log("El elemento en la posicion 2 de mi asignatura es: ", asignaturas[2]);

console.log(asignaturas.length);

//Ejemplo arrays

var carrito = ["pantalon", "camisa", "corbata"];

var	publicacion = ["Felipe", 137, "29-Mayo-2023"];

publicacion[1]=138;

//Añadir nuevo elemento

publicacion[3] = 150;

//Metodo para agregar elementos al final

publicacion.push(150);

asignaturas.push("Biología");

//Metodo para eliminar ultimo elemento de un arreglo

asignaturas.pop();

//Agregar elementos al principio del arreglo

asignaturas.unshift("Lógica", "Química");

//Eliminar el primer elemento del arreglo

asignaturas.shift();

//Metodo para saber si mi arreglo incluye un elemento especifico

var carritoWalmart = ["Gansitos", "Coca-cola", "Galletas Marias", "Mazapán"];

var regalo= carritoWalmart.includes("Coca-cola");

if (regalo){
    console.log("Te regalo un sartén");
}

var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Marina"];

var mejoresAmigos;

var publico;

//Metodo para concatenar arreglos

var listaGolosinas = ["Gansitos", "Coca-cola", "Galletas Marias", "Mazapán"];

var frutasYVerduras = ["Manzanas", "Mangos", "Toronja", "Brócoli", "Calabazas"];

var listaBalanceada = listaGolosinas.concat(frutasYVerduras);

console.log(listaBalanceada);

//Metodo Conocer el indice del primer elemento de un arreglo

console.log(listaBalanceada.indexOf("Tacos"));

//Metodo para unir elementos de un array en una cadena de texto

console.log(listaBalanceada.join(". "));

// Tarea reverse, sort, toString, splice

//Reverse
console.log(listaBalanceada.reverse());

//Sort (ordenar) by Unicode
console.log(listaBalanceada.sort());

//Sort num
console.log(listaBalanceada.sort(function(a,b) {return a-b}));

//Sort alfabeticamente
console.log(listaBalanceada.sort(function(a,b) {return a.localeCompare(b)}));

//toString (Para Objects)

arrayNum = [2,3,4,5];

console.log(arrayNum.toString());

//Splice
arrayNum.splice(2, 0, 33)

console.log(arrayNum);