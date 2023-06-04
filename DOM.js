/*DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y
que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas
paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas 
dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una
experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es
el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un 
atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde 
el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS 
para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, 
como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran 
arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); 
es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.

Elementos del DOM

Todos los elementos del DOM se consideran nodos

    -Document (Nodo raíz)
    -ELement(Todas las etiquetas html)
    -Texto (texto denytro de las etiquetas)
    -Atributo (todos los atributos que pueden llegar a tener las etiquetas)
    - Comentarios (Comentarios del documento)




Comunicacion entre HTML y JS

Tradicionales
Metodos de seleccion de elementos

    document.getElementBy  (objeto.método)

    //getElementById --Busca elementos por su ID
    //getElementByClassName --Busca elementos por su clase
    //getElementsByTagName


*/

let parrafo = document.getElementById("parrafo1");
var boton = document.getElementById("cambiarColor");

parrafo.style.color = "blue";

parrafo.innerHTML = "Parrafo generado por inner HTML"

console.log(parrafo);

let parrafos = document.getElementsByClassName("parrafos");

parrafos[0].style.color = "red";

//Query Selector en DOM
/*Modernos
    querySelector(): Busca el primer elemento que coincide con este selector
    querySelectorAll(): Busca todos los elementos que coincide con este selector
*/

var queryParrafo = document.querySelector("#parrafo1");
var queryParrafosAll = document.querySelectorAll(".parrafos");

/*Eventos (accion y reaccion)

Los eventos son una forma mucho mas facil de modificar o alterar el contenido de un elemento. Los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de JS



*/

//Creo una funcion llamada cambiar color que recibe un color como parametro
// function cambioColor(color){
//     parrafo.style.color = color;
// }

// Evento desde el DOM

/*Evento con EventListener

Permite escuchar el evento indicado (primero parametro) y en el caso de que ocurra (escuche), se ejcuta la funcion asociada (segundo parametro)


Sintaxis

object.addEventListener("nombreDelEvento", funcionQueSeDispara)

*/

boton.addEventListener("click", /*cambioColor*/

    function cambioColor() {
        
        parrafo.style.color = "orange";
        alert("Hola, has presionado el boton!");

    }
); 

//Crear elementos con createElement
const div = document.createElement("div");

//Para insertarlo appendChild

document.body.appendChild(div);

//Agregar imagen al documento

var appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg"
appendImg.alt ="Imagen Sopresa"

parrafo.appendChild(appendImg);
