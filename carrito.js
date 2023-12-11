const llenarCarrito = () => {
    CarritoContainer.innerHTML = "";
    CarritoContainer.style.display = "flex";
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

    pestañaButtonCarrito.addEventListener("click", () => {
        CarritoContainer.style.display = "none";
    });

    pestañaHeaderCarrito.append(pestañaButtonCarrito);

    carrito.forEach((producto) => {
        let pestañaCarritoContent = document.createElement("div");
        pestañaCarritoContent.className = "pestañaCarritoContent";
        pestañaCarritoContent.innerHTML = `
            <img class="productImg" src= "${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>S/ ${producto.precio}</p>
            <i class="restar bi bi-dash-circle"></i>
            <p> ${producto.cantidad}</p>
            <i class="sumar bi bi-plus-circle"></i>
            <i class="eliminar bi bi-trash"></i>
            <p> Total: S/ ${producto.cantidad*producto.precio}</p>
        `;

        CarritoContainer.append(pestañaCarritoContent);

        let restar = pestañaCarritoContent.querySelector(".restar")
        restar.addEventListener("click", () => {
            if (producto.cantidad !==1){
            producto.cantidad --;
            }
            savelocal();
            llenarCarrito();
        });

        let sumar = pestañaCarritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            producto.cantidad ++;
            savelocal();
            llenarCarrito();
        });

        let eliminar = pestañaCarritoContent.querySelector(".eliminar");
        eliminar.addEventListener("click", () => {
            eliminar(producto.id);

            Swal.fire({
                title: "¿Quieres eliminar este producto?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminar"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Producto Eliminado",
                    text: "Eliminaste el producto correctamente",
                    icon: "success"
                  });
                }
              });
        })
    });

    const total = carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0);

    const totalCarrito = document.createElement("div");
    totalCarrito.className = "totalCarrito";
    totalCarrito.innerHTML = `Total a pagar = S/ ${total}`;
    CarritoContainer.append(totalCarrito);
};

verCarrito.addEventListener("click", llenarCarrito);

const eliminarProducto = (id) => {
    const foundID = carrito.find((element) => element.id === id);

    console.log(foundID);
    carrito = carrito.filter ((carritoId) => {
      return carritoId !== foundID;
    });

    carritoCounter();
    saveLocal();
    llenarCarrito();
};

