//Tarjeta de publicación de producto

// 1.-Obtener elementos del HTML

const container = document.querySelector('.product-container');

const agregar = document.querySelector("#agregarProducto")


//Almacenar elementos del formulario en variables de JS
var nombreProducto = document.getElementById('nombreProducto');
var descripcionProducto = document.getElementById('descripcionProducto');
var imagenProducto = document.getElementById('imagenProducto');







//Cada tarjeta tendra su propio div
function agregarProducto() {

    //Guardo los valores de los inputs
    var valorProducto = nombreProducto.value;
    var valorDescripcion = descripcionProducto.value;
    var valorImg = imagenProducto.value;

    const productCard = document.createElement('div');
    productCard.innerHTML = `
    <br>
    <img src="${valorImg}" alt="Producto">
    <h2>${valorDescripcion}</h2>
    <h3>${valorProducto}</h3>
    <p>Precio: $9.99 </p>
    <br>

`;

    container.appendChild(productCard);
}

agregar.addEventListener('click', agregarProducto);