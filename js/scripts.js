/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const elementosCarrito= JSON.parse(localStorage.getItem("carrito")) ??[];
let carrito = elementosCarrito;
document.querySelector(".totalCarrito").innerHTML=`${carrito.length}`
let productos = [
    {id: 1, title: "Almendras", price: 500, category: "frutosSecos"},
    {id: 2, title: "Nueces", price: 700, category: "frutosSecos"},
    {id: 3, title: "Castañas", price: 400, category: "frutosSecos"},
    {id: 4, title: "Pasta de mani", price: 350, category: "untables"}
];
// MENU DE NAVEGACION DINAMICO //
const categorias = ["FRUTOS SECOS" , "CEREALES", "LACTEOS"];
let menus = document.createElement("ul")
menus.classList.add("dropdown-menu");
menus.setAttribute("aria-labelledby", "navbarDropdown")
// for (let categoria = 0; categoria < categorias.length; categoria++){
//     menus.innerHTML+=` <li><a class="dropdown-item" onclick="filtrarproductosporcategoria()" >${categorias[categoria]}</a></li>`
// }
document.querySelector(".navegacionCategorias").appendChild(menus)
// FILTRAR PRODUCTOS POR CATEGORIA
function filtrarproductosporcategoria() {
    cards.innerHTML="";
    const productosfiltrados = productos.filter((producto)=> producto.category ==="frutosSecos")
    productosfiltrados.forEach((producto)=> {
        let cards = document.createElement("div");
        cards.innerHTML +=` <div class= "col mb-5"> <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <!-- Product details-->
        <div class=" card-body p-4" style="top: 0.5rem; right: 0.5rem">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.title}</h5>
               ${producto.price}
            </div>
        </div>
        
        <!-- Product actions-->
        <div class=" card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a id="${idButton}" data-id="${producto.id}" class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
        </div>`
    }
    )}
    
// CARDS DINAMICAS
for (producto of productos){
    const idButton = `add-card${producto.id}`
    let cards = document.createElement("div");
    cards.innerHTML +=` <div class= "col mb-5"> <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
    <!-- Product details-->
    <div class=" card-body p-4" style="top: 0.5rem; right: 0.5rem">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${producto.title}</h5>
            <!-- Product price-->
           ${producto.price}
        </div>
    </div>
    
    <!-- Product actions-->
    <div class=" card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a id="${idButton}" data-id="${producto.id}" class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
    </div>`
    document.querySelector(".row-cols-2").appendChild(cards)
    }
//  AGREGAR PRODUCTOS AL CARRITO
productos.forEach((producto)=>{
    const idButton = `add-card${producto.id}`
    document.getElementById(idButton).addEventListener("click", () => {
        carrito.push(producto);
        console.log(carrito);
        localStorage.setItem("carrito" , JSON.stringify(carrito))
        // const precioTotal = carrito.reduce((acumulador,producto)=> acumulador + producto.price, 0)//
        // localStorage.setItem("totalCarrito" , carrito.length);
        document.querySelector(".totalCarrito").innerHTML=`${carrito.length}`
    })  
});
