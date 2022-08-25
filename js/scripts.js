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
    {id: 1, title: "Almendras", price: 500, img:"https://www.pequerecetas.com/wp-content/uploads/2010/11/propiedades-de-las-almendras-660x441.jpg.webp", category: "frutosSecos"},
    {id: 2, title: "Nueces", price: 700, img:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/01/04/16413064087771.jpg", category: "frutosSecos"},
    {id: 3, title: "Castañas", price: 400, img:"https://cdnx.jumpseller.com/pargua-gourmet/image/17582671/blog-caju.jpg.jpg?1625703244", category: "frutosSecos"},
    {id: 4, title: "Pasta de mani", price: 350, img:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FMEHAHM6ZZBIHK2OH5EPVHJQIE.jpg", category: "untables"},
    {id: 5, title: "Harina de almendras", price: 675, img:"https://www.hogarmania.com/archivos/202101/harina-de-almendras-beneficios-y-como-se-hace-668x400x80xX-1.jpg", category: "harinas"},
    {id: 6, title: "Harina de  coco", price: 553, img:"https://http2.mlstatic.com/D_NQ_NP_977101-MLA41560217027_042020-O.jpg", category: "harinas"},
    {id: 7, title: "Harina de algarroba", price: 551, img:"https://www.recetasingluten.com/wp-content/uploads/2021/11/harina-de-algarroba-1-1024x683.png", category: "harinas"},
    {id:8, title:"Semillas de zapallo", price: 200, img:"https://i.blogs.es/a30817/pipas2/840_560.jpg", category:"semillas"},
    {id:9, title:"Semillas de sesamo blanco", price: 360, img:"https://cdnx.jumpseller.com/espesales/image/9534282/resize/480/480?1661180543", category:"semillas"},
    {id:10, title:"Semillas de lino", price: 402, img:"https://www.mentta.com/blog/wp-content/uploads/2022/02/semillas-de-lino-kan-1200x630@abc-768x403.jpg", category:"semillas"}

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
// INICIO
function filtrarproductosporcategoria(category) {
    document.querySelector(".row-cols-2").innerHTML="";
    const productosfiltrados = productos.filter((producto)=> producto.category === category)
    productosfiltrados.forEach((producto)=> {
        const idButton = `add-card${producto.id}`
        document.querySelector(".row-cols-2").innerHTML+=` <div class= "col mb-5"> <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src=${producto.img} />
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
        </div>
        </div></div>`
    })
}
// CARDS DINAMICAS
for (producto of productos){
    const idButton = `add-card${producto.id}`
    let cards = document.createElement("div");
    cards.innerHTML +=` <div class= "col mb-5"> <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src=${producto.img} />
    <!-- Product details-->
    <div class=" card-body p-4" style="top: 0.5rem; right: 0.5rem">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${producto.title}</h5>
            <!-- Product price-->
           $${producto.price}
        </div>
    </div>
    
    <!-- Product actions-->
    <div class=" card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a id="${idButton}" data-id="${producto.id}" class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
    </div>
    </div> </div>`
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
        Toastify({
            text: "¡Haz agregado un producto al carrito!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          })
        .showToast();
    })  
});
//PRODUCTOS FILTRADOS EN CARRUSEL
const frutossecosfiltrados = productos.filter((producto)=> producto.category === "frutosSecos")
frutossecosfiltrados.forEach((producto)=>{
    const idButton = `add-card${producto.title}`
    document.querySelector(".frutosSequitos").innerHTML+=`<div class="col mb-5">
    <div class="card h-100 ">
    <!-- Product image-->
    <img class="card-img-top" src=${producto.img} />
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
        <div class="text-center"><a id="${idButton}" data-id="${producto.title}" class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
    </div> </div></div>`
;
})
const harinasfiltradas = productos.filter((producto)=> producto.category === "harinas")
harinasfiltradas.forEach((producto)=>{
    const idButton = `add-card-harinas-${producto.id}`
    document.querySelector(".harinas").innerHTML+=`<div class="col mb-5">
    <div class="card h-100 ">
    <!-- Product image-->
    <img class="card-img-top" src=${producto.img} />
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
    </div> </div></div>`
;
})
const semillasfiltradas = productos.filter((producto)=> producto.category === "semillas")
semillasfiltradas.forEach((producto)=>{
    const idButton = `add-card${producto.title}`
    document.querySelector(".semillas").innerHTML+=`<div class="col mb-5">
    <div class="card h-100 ">
    <!-- Product image-->
    <img class="card-img-top" src=${producto.img} />
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
        <div class="text-center"><a id="${idButton}" data-id="${producto.title}" class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
    </div> </div></div>`
;
})
//AGREGAR PRODUCTOS FILTRADOS DE FRUTOS SECOS AL CARRITO
productos.forEach((producto)=>{
    const idButton = `add-card${producto.title}`
        document.getElementById(idButton).addEventListener("click", () => {
            carrito.push(producto);
            console.log(carrito);
            localStorage.setItem("carrito" , JSON.stringify(carrito))
            // const precioTotal = carrito.reduce((acumulador,producto)=> acumulador + producto.price, 0)//
            // localStorage.setItem("totalCarrito" , carrito.length);
            document.querySelector(".totalCarrito").innerHTML=`${carrito.length}`
        })  
    });
//AGREGAR PRODUCTOS FILTRADOS DE HARINAS AL CARRITO
//  AGREGAR PRODUCTOS AL CARRITO
productos.forEach((producto)=>{
    const idButton = `add-card-harinas-${producto.id}`
    document.getElementById(idButton).addEventListener("click", () => {
        carrito.push(producto);
        console.log(carrito);
        localStorage.setItem("carrito" , JSON.stringify(carrito))
        // const precioTotal = carrito.reduce((acumulador,producto)=> acumulador + producto.price, 0)//
        // localStorage.setItem("totalCarrito" , carrito.length);
        document.querySelector(".totalCarrito").innerHTML=`${carrito.length}`
    })  
});
//PROBANDO CARDS ABIERTAS
// function verproductos(){
//     document.querySelector(".row-cols-2").innerHTML="";
//     document.querySelector(".row-cols-2").innerHTML="
//     ";
// PROBANDO TOASTIFY
Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  })
.showToast();
