//JS sicnrono

console.log("Inicia Sincrono");

function dosSync(){
    console.log("Se ejecuta la funcion dos");
}
function unoSync(){
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

function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    },5000);
};

function unoAsync(){
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

function hazClick(){
    console.log("Le hiciste click al boton");
};

const boton= document.getElementById("boton");
boton.addEventListener("click",hazClick());
