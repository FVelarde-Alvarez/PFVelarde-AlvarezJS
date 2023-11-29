const Contenedorgeneral = document.getElementById("container-products");
const verCarrito = document.getElementById("verCarrito");
const CarritoContainer = document.getElementById("carrito-container");

const productos = [
    { codigo: 1, nombre:"Andador INFANTI", img: "./img/Andador Infanti.jpg", precio: 429.00},
    { codigo: 2, nombre:"Gimnasio Musical", img: "./img/gimnasio musical.jpg", precio: 126.00},
    { codigo: 3, nombre:"Recipientes para leche", img: "./img/recipiente de lech.jpg",precio: 99.00},
    { codigo: 4, nombre:"Rodillo PLAYGRO", img: "./img/rodillo.jpg",precio: 129.00},   
    { codigo: 5, nombre:"Pelotas Texturizadas", img: "./img/Pelotas.jpg",precio: 35.00}, 
    { codigo: 6, nombre:"Overall Baby", img: "./img/overall.jpg",precio: 39.90}  
]

let carrito = [];

productos.forEach((producto)=>{

    let contenedorProductos = document.createElement("div")

    contenedorProductos.innerHTML = `
    <div class="card">
    <figure>
        <img class="productImg" src="${producto.img}" alt="Producto">
    </figure>
    <div class="info_producto">
        <h2>${producto.nombre}</h2>
        <p class="price">S/ ${producto.precio}</p>
    </div>
    </div>`;
  
    Contenedorgeneral.append(contenedorProductos);

    let comprar = document.createElement("button")

    comprar.innerText = "Añadir al carrito";
    comprar.className = "btnComprar"

    contenedorProductos.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: producto.codigo,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    const pestañaHeaderCarrito = document.createElement("div");
    pestañaHeaderCarrito.className = "pestañaHeaderCarrito";
    pestañaHeaderCarrito.innerHTML = `
        <h1 class="CarritoTitle"> Carrito de compras </h1>
        `;
    CarritoContainer.append(pestañaHeaderCarrito);

    const pestañaButtonCarrito = document.createElement("div");
    pestañaButtonCarrito.innerHTML = `
    <i class="bi bi-x-circle-fill"></i>`;
    pestañaButtonCarrito.className = "pestañaButtonCarrito";

    pestañaHeaderCarrito.append(pestañaButtonCarrito);

    carrito.forEach((producto) => {
        let pestañaCarritoContent = document.createElement("div");
        pestañaCarritoContent.className = "pestañaCarritoContent";
        pestañaCarritoContent.innerHTML = `
            <img class="productImg" src= "${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>S/ ${producto.precio}</p>
        `;
        CarritoContainer.append(pestañaCarritoContent);
    });

    const total = carrito.reduce ((acc, prod) => acc + prod.precio, 0);

    const totalCarrito = document.createElement("div")
    totalCarrito.className = "totalCarrito"
    totalCarrito.innerHTML = `Total a pagar = S/ ${total}`;
    CarritoContainer.append(totalCarrito);

})
