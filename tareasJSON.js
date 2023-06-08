/*
Cremos un arreglo de onjetos para nuestras tareas, tendran atributos como id, titulo y 
un estatus de completado o no completado

*/

//Esto donde se ejecuta? Del lado del cliente

var tareas = [
    {
        id: 1,
        titulo: "Bañara al perro",
        estatus: true
    },

    {
        id: 2,
        titulo: "Preparar comida",
        estatus: true
    }
]

//Enviar arreglo al servidor

tareas = JSON.stringify(tareas);

//Declaramos arreglo de objetos vacio

var carritoCompras = [];

var producto = {

    id: 1,
    nombre : "Camisa Pokemon",
    precio : 299.99,
    cantidad : 1

}

carritoCompras.push(producto);

console.log(producto)

//Actualizar productos del carrito

var productoId = 1;
var nuevaCantidad = 3;

//Verifico si mo producto existe en mi carrito de compras, en base al id que estoy buscando, que debe conicidir con el id del producto
let productoExiste = carritoCompras.find(producto =>producto.id === productoId);

//Si el producto existe actualizo la cantidad del producto por la nueva cantidad
if (productoExiste){
    productoExiste.cantidad = nuevaCantidad;
};

console.log(producto);

//Eliminar producto del carrito

//Reviso el id del producto a eliminar en cada uno de los indices, si conicide regresa una conincidencia con un valor boolean
let productoAEliminar = 1;

var indiceProductoAEliminar = carritoCompras.findIndex(item => item.id === productoAEliminar);

//Verificar si el indice encontrado es valido, si findIndex no encontro el indice regresa -1, si el indice es diferente a esto, se puede acceder a la funcion if
if (indiceProductoAEliminar >=0 ){
    carritoCompras.splice(indiceProductoAEliminar, 1);
}

console.log(carritoCompras);


//ForEach, va a recorrer cada elemento, de acuerdo a la funcion que se le pase, y en este caso, se va a ir añadiendo al total cada valor econtrado

carritoCompras.push(producto);

var total=0;

carritoCompras.forEach(producto => total += (producto.precio * producto.cantidad));

console.log(`El total es de : ${total}`);