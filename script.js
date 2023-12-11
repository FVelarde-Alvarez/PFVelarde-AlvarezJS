const Contenedorgeneral = document.getElementById("container-products");
const verCarrito = document.getElementById("verCarrito");
const CarritoContainer = document.getElementById("carrito-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () => {
    const response = await fetch("./data.json");
    const data = await response.json()

    data.forEach(producto=>{
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
            const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);
             
            if (repeat){
                carrito.map((prod) => {
                    if(prod.id === producto.id){
                        prod.cantidad++;
                    }
                }) 
            } else{
              carrito.push({
                id: producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        }
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Agregaste este producto al carrito",
            showConfirmButton: false,
            timer: 1500
          });
        
        
            carritoCounter();
            savelocal();
        });
    });
};

getProductos();

const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// JSON.parse(localStorage.getItem("carrito"));