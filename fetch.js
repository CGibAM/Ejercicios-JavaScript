//JS sicnrono

console.log("Inicia Sincrono");

function dosSync() {
    console.log("Se ejecuta la funcion dos");
}
function unoSync() {
    console.log("Se ejecuta la funcion uno");
    dosSync();
    console.log("Se ejecuta la funcion tres");
}

dosSync();
console.log("Inicia Sincrono");

/*
Tareas sincronas

*/

//JavaScript asincrono

console.log("Asincrono");

function dosAsync() {
    setTimeout(function () {
        console.log("Dos");
    }, 5000);
};

function unoAsync() {
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Fin Asicnrono");

/*
Que es un callback(llamada de vuelta)

Es una funcion que se pasa como argumento a otra. Esta función se ejecutara despues de que la otra lo haga.
Este mecanismo ayuda a controlar que cierto codigo no se ejecute antes de que otro termine.

Para que lo necesitamos? 
Sabemos que JS trabaja de forma descendente, entonces habra casos que queramos ejecutar codgio despues de que ocurra
otra cosa, y tambien no sea de forma secuencial



*/

//Creamos una funcion llamada doble numero, que toma un numero y un callback como argumento(callback es una funcion)
function dobleNUmero(num, callback) {
    const resultado = num * 2;//Operacion de multiplicacion
    callback(resultado);//INvocacion al callback con resultado como parametro

}

// function mostrarResultado(resultado) {
//     console.log("El resultado es: " + resultado);
// }

// function hazClick() {
//     console.log("Le hiciste click al boton");
// };

// const boton = document.getElementById("boton");
// boton.addEventListener("click", hazClick());

/*
Promises

Son otro mecanismo para manejar la asincronia, utilizar promesas hace que el codigo sea mas legible y practico que al usar callbacks, 
y como su nombre lo indica es algo que no sabemos en un principio si se va a cumplir o no, pero pueden pasar varias cosas. La ventaja 
es que evitamos anidar funciones y usamos solo una funcion(metodo) para menjar los callbacks.

Nota:Las promesas son objetos

promise .then

promise. catch

Las promesas tiene estados:
    -Pendiente: No se ha resuelto
    -Fullfilled: Cuando la operación asincrona se completa con exito(resolve)
    -Rejected (rechazo): Cuando la operacion falla (reject)

Al ser objetos, tienen metodos:

    -then(function resolve): Ejecuta un callback llamado resolve cuando la promesa se cumple
    
    -catch(function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza

    -then(resolve, reject): Puedo ejecutar las dos funciones en el mismo metodo then


*/

//Creo una funcion llamada obtener productos para poder utilizar promesas y hacer la conexion a mi url para obtener datos

function obtenerProductos() {
    //retorno cuando se ejecute la funcion, quiero retornar un objeto de tipo promesa
    //Dos funciones, una cuando se resuelve y otra cuando se rechaza
    return new Promise(function (resolve, reject) {
        fetch('https://fakestoreapi.com/products')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error al obtener productos");
                }
            })
            .then(function (data) {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            });

    });

};

//Uso de la promesa

obtenerProductos()
    .then(function (resultado) {
        console.log(resultado);
    })

    .catch(function (error) {
        console.log(error);
    })

//Otro ejemplo de promesa para validar nombre, si el nombre evaluado coincide con el guardado, la promesa se reuelve,
//si no se rechaza y me muestra el valor del error
var nombre = "Cristian";

//EL objeto promesa tiene 2 posibles soluciones
var promesaNombre = new Promise((resolve, reject) => {
    if (nombre !== "Cristian") {
        reject("Error, nombre incorrecto")
    } else {
        resolve(`El nombre ${nombre} es correcto`);
    }

});

console.log(promesaNombre);

//Ejemplo pokeApi
/*Necesito 
    -URL
    -Promesa (con dos posibles caminos, rechazo y resolucion)
        -Si se resuelve me traigo los datos de la api
        -Si no, muestra error
*/

const obtenerPokemon = new Promise((resolve, reject) => {
    //Primero se realiza la conexion del servidor
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu') //me conecto

        .then(respuesta => { //cuando se conecte, si la conexion es ok
            if (respuesta.ok) {
                return respuesta.json();
                //Guardo dato en json
            } else { //Si no me conecto...
                throw new Error("Error 404")//Muestro error
            }
        })

        //Segundo bloque , despues de la conexion al servidor
        .then(datos => { //entonces esos datos ...
            resolve(datos); // se usan como parametro de resolucion
        })

        //Tercer bloque cuando no se encuentra la informacion
        .catch(error => {
            reject("No encontramos tu pokemon " + error);
        });
});

//Ya le di el mensaje al mesero (Creacion de promesa), ahora voy a mostrar la informacion si la promesa se resuelve(encuentra la info), o se rechaza(no encuentra la info)

obtenerPokemon
    .then(pokemon => { //El valor pokemon= datos obtenidos del servidor en json
        console.log("Pokemon obtenido es", pokemon.name);
    })
    .catch(error => {
        console.log(error);
    });

/*

Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexiion es ok, "pega" la informacion de lo que estamos consultado).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(pokeResponse => {
        return pokeResponse.json(); //Regresa la respuesta en json
    })

    .then(pokeInfo => {
        console.log("El nombre del Pokemon es", pokeInfo.name, " su numero de la pokedex es", pokeInfo.id);
    })
    .catch(pokeError => {
        console.log("Pokemon no encontrado" + pokeError);
    });




const pokemonContainer = document.querySelector("#pokemonContainer");
const button = document.querySelector("#botonPokemon");
const input = document.querySelector("#inputPokemon");

button.addEventListener("click", (e) => {
    e.preventDefault();
    traerPokemon(input.value)
});

function traerPokemon(nombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        .then(response => response.json())
        .then((datos) => crearPokemon(datos))
        .catch(error => error);
};

function crearPokemon(nombrePokemon) {

    const pokeImg = document.createElement("img");
    pokeImg.src = nombrePokemon.sprites.front_default;//front_default es el nombre de la propiedad donde esta la imagen de mi pokemon
    const h2 = document.createElement("h2");
    h2.innerHTML = nombrePokemon.name;

    const pokeDiv = document.createElement("div");

    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);

    pokemonContainer.appendChild(pokeDiv);

};


