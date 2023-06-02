//1.-Traer o referenciar los elementos del HTML y los guardaremos en variables para utilizarlos despues

//Metodos de seleccion

var elementoContador = document.getElementById("contador");
var botonIncremento = document.getElementById("botonIncrementar");
var botonDecremento = document.getElementById("botonDecrementar");
var botoResetear = document.querySelector("#botonResetear");
var memeRandom = document.querySelector("#memeRandom");

//Variable estado inicial

var valorContador = 0;

//Lógica

function incrementar() {
    valorContador++;
    elementoContador.innerHTML = valorContador;
}


function decrementar() {
    if (valorContador > 0) {
        valorContador--;
        elementoContador.innerHTML = valorContador;
    }
}

function resetear() {
    valorContador = 0;
    elementoContador.innerHTML = valorContador;
    memeRandom.style.display = "none";
}

//Funcion para mostrar la imagen
//Esta funcion debera recorrer un arreglo de imagenes y tomar uno de los elementos de forma aleatoria

function generarImagen() {

    var coleccionImagen = ["meme1.png", "meme2.png", "meme3.png", "meme4.png"];

    //Generar indice aleatorio
    var imagenAleatoria = Math.floor(Math.random() * coleccionImagen.length);

    //Obtener direccion de la imagen

    let urlAleatoria = coleccionImagen[imagenAleatoria];

    //Agrego URL al atributo vacio y lo muestro en bloque cambiando la propiedad de visualización
    memeRandom.src = "./assets/img/" + urlAleatoria;
    memeRandom.style.display = "block";
}

//Funcion que muestra la imagen si el contador es un multiplo de 10
function mostrarImagen() {

    if (valorContador % 10 === 0 && valorContador !== 0) {
        generarImagen()
    }else{
        memeRandom.style.display = "none";
    }
}


//Hacer click en botones para añadir los eventos por medio de las funciones
botonIncremento.addEventListener('click', incrementar);
botonIncremento.addEventListener('click', mostrarImagen);

botonDecremento.addEventListener('click', decrementar);
botonDecremento.addEventListener('click', mostrarImagen);

botoResetear.onclick = resetear;
