//Ejercicio Velocidad

let velocidad;

function calcularVelocidad(distancia, tiempo) {
    var velocidad = distancia / tiempo;
    console.log("La velocidad del objeto es de: "+ velocidad + "m/s");
}

velocidad = calcularVelocidad(12, 60);



//Ejercicio foruma General
function forumaGeneral(a, b, c) {

    x1 = (-b + (Math.sqrt((Math.pow(b, 2)-(4*a*c))))) / (2 * a);
    x2 = (-b - (Math.sqrt((Math.pow(b, 2)-(4*a*c))))) / (2 * a);
    console.log(x1);
    console.log(x2);

}

forumaGeneral(2,3,4);


