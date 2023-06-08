/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

*/

//Esto es un objeto
var casa = {
    numHabitaciones: 3,
    numPisos: 2,
    numBanhio : 3,
    color: "Rojo"
};

alert(`Mi casa es de color ${casa["color"]}`); 

console.log(casa.color); 

//Clases para generar una plantilla , esta plantilla va a tener keys de nuestros atributos, con cada instancia se tendra un objeto personalizado

class plantilla{
    //Definir propiedades o atributros para despues asignarle valores

    numHabitacion = 0;
    numBanhio = 0;
    numPisos = 0;
    color = "";

    //El constructor sirve para cuando va a ser creado el objeto (instanciado), definir como lo va a instanciar

    constructor(numHabitacion, numBanhio, numPisos, color){
        this.numHabitacion = numHabitacion;
        this.numBanhio = numBanhio;
        this.numPisos = numPisos;
        this.color = color;
    }



    //Esto es una clase (planbo de un objeto)

    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentana(){
        console.log("showsh, ventanas abiertas");
    };

    numerodeHabitaciones(){
        console.log("El numero de habitaciones es ", this.numHabitacion);
    }
    
}

//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)


/*Instanciar objetos

Para instanciar objets, usamos la siguiente sintaxis:


variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/

var casita1 = new plantilla(3, 3, 2,"Azul");

casita1.encenderLuces;

class gatito {
    //atributos

    nombre;
    edad;
    tamaño;
    caracter ;
    numeroVidas;
    color;
    raza ;
    vacunas;

    constructor (nombre,edad,tamaño,caracter,numeroVidas, color, raza, vacunas ){
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;

    };

    mostrarInfo(){
        console.log(`El nombre del gato es: ${this.nombre}
        La edad del gato es: ${this.edad}
        El tamaño del gato es: ${this.tamaño}
        Su caracter: ${this.caracter}
        Su numero de vidas: ${this.numeroVidas}
        El color del gato es: ${this.color}
        La raza del gato es: ${this.raza}
        Esta vacunado?: ${this.vacunas}`)
    };

    maullar(){
        console.log("Miauuu");
    };

    arañar(){
        console.log("El gato araño el sillon!");
    };

    ronronear(){
        console.log("Rrrrrr");
    };

    cuidarGato(){
        if (this.numeroVidas<3){
            console.log("Cuida a tu gato");
        }else{
            console.log("EL gato esta saludable");
        }
    };


}

var anvorguesa = new gatito ("anvorguesa", 3, "grande", "enojon", 6, "gris", "desconocida",true);
var snow = new gatito ("snow", 1, "pequeño", "amigable", 2, "blanco", "desconocida",true);
var mantecado = new gatito ("mantecado", 1, "pequeño", "amigable", 1, "amarillo", "desconocida",false);
var snow2 = new gatito ("snow2", 1, "pequeño", "gruñon", 7, "gris", "desconocida",true);

anvorguesa.mostrarInfo();
anvorguesa.cuidarGato();
anvorguesa.maullar();

snow.mostrarInfo();
snow.cuidarGato();


//JSON (JavaScript Object Notation)

/*
Formato extándar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis
de objetos de JavaScript ({, :})

JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de 
objetos. La unica diferencia este que estos datos se guardan en un formato de texto, 
para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/ 

object = {
    nombre: "Pepito",
    edad: 45
}

/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)

objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce 
como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserealizar una cadena de texto y convertirla a objeto, se utiliza el metodo JSON.parse()
var objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado);