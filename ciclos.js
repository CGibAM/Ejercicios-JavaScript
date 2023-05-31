/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.

- While (mientras)
 - Do While (hacer mientras)
 - For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.

*/

// let rolDeUsuario = "registrado"; //esto ya esta definido


// while (!"registrado") { //la evaluacion es sobre el rol

//     function registrarUsuario(){
//         console.log("Usuario Registrado");
//     }

// }


// dejaloComprar();

//Codigo sopa de pollo

var ingredientes = ["Zanahorias", "Cebolla", "Papas", "Espinacas", "Agua", "Sal", "Pollo"];

var ingredientesAgregados = 0;

var caldito = [];

while (ingredientesAgregados < ingredientes.length) {

    caldito.push(ingredientes[ingredientesAgregados]);

    console.log(`Se añadio el ingrediente: ${caldito[ingredientesAgregados]} al caldito de pollo`);

    if (caldito.length === ingredientes.length) {
        console.log("La sopita esta lista, a disfrutar!");
    };

    ingredientesAgregados++;
}

//Do While (Hacer mientras)

/*

Do - While (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa



do {
    //bloque de codigo que vamos a ejecutar
} while (condicion);


*/

var tiempoCoccion = 0;

do {
    console.log("¿Horneando galletitas");
    tiempoCoccion += 5;

    //Todo el bloque de codigo se va evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se puden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen. 

    //Esto es como si revisaramos el horno cada 5 minutos

} while (tiempoCoccion < 30);

console.log("Las galletas estan listas");

//For (para)

/*

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/

console.log("Ejemplo Pizza con For");

var pasosReceta = ["Preparar la masas", "Agregar los ingredientes", "Hornear la pizza"];

var tiemposPorPaso = [15, 10, 20];

for (var pasos = 0; pasos < pasosReceta.length; pasos++) {

    console.log(`Realizando paso: ${pasosReceta[pasos]}
                Esperando ${tiemposPorPaso[pasos]} minutos`);

}


//Contador de cohete

for(let contador = 10; contador >= 0; contador--) {

    console.log(`${contador} segundos para el lanzamiento`);

    if (contador === 0){
        console.log("Inicia el lanzamiento");
    }
}

//Cupones descuento

var cupones = 10;

for (cupones -= 1 ; cupones >= 0; cupones--){
    console.log(`Descuento aplicado. Tienes ${cupones} restantes`);
}