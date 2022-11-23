// proyecto pre final

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto1 = new Producto(1, "Automoviles", 100);
const producto2 = new Producto(2, "Moto", 200);
const producto3 = new Producto(3, "Nautica", 100);
const producto4 = new Producto(4, "Camiones", 1200);

const productosArray = [producto1, producto2, producto3, producto4];

const divProductos = document.querySelector("#divProductos");
productosArray.forEach((producto) => {
  divProductos.innerHTML += `
  <div id ="${producto.id}" class="card cardProducto">
  <div class="card-body">
  <h5 class="card-title">${producto.nombre}</h5>
  <p class="card-text">$${producto.precio}</p> 
  <button id="${producto.id}" class= "btn btn-primary">AGREGAR</button>
  </div>
  </div>
  `;
});

const carrito = [];
const botonesAgregar = document.querySelectorAll(".btn-primary");

botonesAgregar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productosArray.find(
      (prod) => prod.id === parseInt(boton.id)
    );
    const productoCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };
    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id);

    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad += 1;
    }
    console.log(carrito);
  };
});


const botonFinalizar = document.querySelector("#finalizar");
botonFinalizar.onclick  = () => {
  const totalCompra = carrito
  .map((prod) => prod.precio * prod.cantidad)
  .reduce((elem1, elem2) => elem1 + elem2);
  alert(`EL total de tu compra es ${totalCompra}`);
}
