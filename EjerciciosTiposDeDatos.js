var variable1 = false;
var variable2 = true;
var variable3 = 0;
var variable4 = 1;
var variable5 = "0";
var variable6 = "000";
var variable7 = "1";
var variable8 = NaN;
var variable9 = Infinity;
var variable10 = -Infinity;
var variable11 = "";
var variable12 = "20";
var variable13 = "Twenty";
var variable14 = null;
var variable15 = undefined;

console.log("");
console.log("Aqui inicia el ejercicio de Tipos de Datos");
console.log("Variable 1 es de tipo: " + typeof(variable1));
console.log("Variable 2 es de tipo: " + typeof(variable2));
console.log("Variable 3 es de tipo: " + typeof(variable3));
console.log("Variable 4 es de tipo: " + typeof(variable4));
console.log("Variable 5 es de tipo: " + typeof(variable5));
console.log("Variable 6 es de tipo: " + typeof(variable6));
console.log("Variable 7 es de tipo: " + typeof(variable7));
console.log("Variable 8 es de tipo: " + typeof(variable8));
console.log("Variable 9 es de tipo: " + typeof(variable9));
console.log("Variable 10 es de tipo: " + typeof(variable10));
console.log("Variable 11 es de tipo: " + typeof(variable11));
console.log("Variable 12 es de tipo: " + typeof(variable12));
console.log("Variable 13 es de tipo: " + typeof(variable13));
console.log("Variable 14 es de tipo: " + typeof(variable14));
console.log("Variable 15 es de tipo: " + typeof(variable15));

console.log("");
console.log("Aqui inicia el ejercicio Jugueteria");
pesoDePayasos = 112;
pesoDeMuñecas = 75;
numeroDeMuñecas = 14;
numeroDePayasos = 27;

pesoPaquete = ((pesoDePayasos * numeroDePayasos) + (pesoDeMuñecas * numeroDeMuñecas));

console.log("El peso total del paquete es: " + pesoPaquete + " gramos");


//Ejercicio Muñecas y payasos v2

console.log("");
console.log("Aqui inicia el ejercicio Jugueteria V2");

function funcionPeso () {

    var pesoDePayasos = 112;
    var pesoDeMuñecas = 75;
    var numeroMuñecas = prompt("¿Cuantas muñecas desea comprar?");
    var numeroPayasos = prompt("¿Cuantos payasos desea comprar?");
    pesoPaquete = ((pesoDePayasos * numeroPayasos) + (pesoDeMuñecas * numeroMuñecas));

    alert("El peso total del paquete es: " + pesoPaquete + " gramos");
    console.log("El peso total del paquete es: " + pesoPaquete + " gramos");

}

funcionPeso();