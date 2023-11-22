const Contenedorgeneral = document.getele("contenedor")
const productos = [
    { codigo: 1, nombre:"Andador INFANTI", img: "./img/Andador Infanti.jpg", precio: 429.00},
    { codigo: 2, nombre:"Gimnasio Musical", img: "./img/gimnasio musical.jpg", precio: 126.00},
    { codigo: 3, nombre:"Recipientes para leche", img: "./img/recipiente de lech.jpg",precio: 99.00},
    { codigo: 4, nombre:"Rodillo PLAYGRO", img: "./img/rodillo.jpg",precio: 129.00},   
    { codigo: 5, nombre:"Pelotas Texturizadas", img: "./img/Pelotas.jpg",precio: 35.00}, 
    { codigo: 6, nombre:"Overall Baby", img: "./img/overall.jpg",precio: 39.90}  
]

class Carrito{
    constructor(){
        this.products=new Array()
        this.total = 0
    }

    cargarCarrito(algo){
        this.products.push(algo);
    }
}

productos.forEach((producto)=>{

    let contenedorProductos = document.createElement("div")

    contenedorProductos.innerHTML = `
    <div class="item">
    <figure>
        <img class="product" src="${producto.img}" alt="Producto">
    </figure>
    <div class="info_producto">
        <h2>${producto.nombre}</h2>
        <p class="price">S/ ${producto.precio}</p>
        <button class="button" onclick="alerta()" value="Añadir al carrito">Añadir al carrito</button>
    </div>
    </div>`
    
    Contenedorgeneral.appendChild(contenedorProductos)

})


function saludar(){
     let nombreUsuario = prompt("Ingrese su nombre");
     alert("Bienvenid@ " + nombreUsuario + " a La Tiendita de Mamá") //falta un while para que no sea null
 }

 function mostrarLista(){
     alert ("La lista de productos está en el console.log");
     for (let i = 0; i < productos.length; i++){
         console.log("ID: " + productos[i].codigo + " " + productos[i].nombre + " precio: " + productos[i].precio)
     }
 }

 saludar()
 mostrarLista()

 const carrito= new Carrito();
 // let carrito = []

 let seguirComprando = confirm ("¿Quieres agregar algún producto?");

 while (seguirComprando == true){
     let productoCarrito = prompt ("Agrega el ID del producto") - 1
     if(!productos[productoCarrito]){
         alert("No existe el producto")
         continue;
     }
     // carrito.push(productos[productoCarrito])
     carrito.cargarCarrito(productos[productoCarrito])
    
     seguirComprando = confirm ("¿Quieres agregar otro producto");
     if(!seguirComprando){
         alert("Gracias por tu compra. Ve al carrito")
     }    
 }
 console.log(carrito)
 alert("Gracias por tu visita. Vuelve pronto")        //falta agregar nombre nombreUsuario


 // function alerta(){
 //     let agregarCarrito=document.getElementsByClassName("").value;
 //     window.alert("Agregaste el producto " + agregarCarrito + " al carrito")
 //     carrito.cargarCarrito("hola")
 // }

