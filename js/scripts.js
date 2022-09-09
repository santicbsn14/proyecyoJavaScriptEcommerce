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
    {id:10, title:"Semillas de lino", price: 402, img:"https://www.mentta.com/blog/wp-content/uploads/2022/02/semillas-de-lino-kan-1200x630@abc-768x403.jpg", category:"semillas"},
    {id: 19, title: "Mani Japones", price: 251,img:"https://saboresandinos.com/wp-content/uploads/2021/07/460-Mani-Japones-crocante-2-cuadrada.jpg",  category: "frutosSecos"},
    {id: 23, title: "Mermelada de arandones 'Beepure'", price: 470,img:"https://www.almacencamposverdes.com.ar/wp-content/uploads/2019/04/mermelada.png",  category: "untables"},
    {id: 94, title: "Bebida de  coco", price: 753,img:"https://s.yimg.com/ny/api/res/1.2/hnQAvJpIzD3pAmWUwvdq6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/uu/api/res/1.2/WEKDp170gxM_hsSerpPm8w--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/e6444ee38e59ec23773e6684ad93178f",  "category": "bebidas"},
    {id: 89, title: "Pan de masa madre", price: 858, img:"https://www.recetasderechupete.com/wp-content/uploads/2020/05/Pan-casero-pueblo-1.jpg", category: "pan"},
    {id:33, title:"Bayas de goji", price: 372, img:"https://t1.uc.ltmcdn.com/es/posts/7/7/8/como_hacer_una_infusion_de_bayas_de_goji_33877_paso_1_600.jpg",  category:"china"},
    {id:27, title:"Pan Integral con semillas", price: 351,img:"https://mandolina.co/wp-content/uploads/2020/11/Caseras-Pan.jpg.webp",  category:"pan"}
];
// MENU DE NAVEGACION DINAMICO //
let menus = document.createElement("ul")
menus.classList.add("dropdown-menu");
menus.setAttribute("aria-labelledby", "navbarDropdown")
// for (let categoria = 0; categoria < categorias.length; categoria++){
//     menus.innerHTML+=` <li><a class="dropdown-item" onclick="filtrarproductosporcategoria()" >${categorias[categoria]}</a></li>`
// }
document.querySelector(".navegacionCategorias").appendChild(menus)

function filtrarproductosporcategoria(category) {
    document.getElementById("main").innerHTML="";
    const productosfiltrados = productos.filter((producto)=> producto.category === category)
    productosfiltrados.forEach((producto)=> {
        const idbutton = `add-card${producto.id}`
        document.getElementById("main").innerHTML+=`<section class="py-5"><div class="container px-4 px-lg-5 mt-5"><div  class=" row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 masVendidos row-cols-xl-4 justify-content-center"> <div class= "col mb-5"> <div class="card h-100">
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
            <div class="text-center"><a id="${idbutton}"  data-id="${producto.id}" class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
        </div>
        </div></div> </div></div> </section>`
    })
}
function cargarproductosfiltradosalcarrito(){
productosfiltrados.forEach((producto)=>{
    const idbutton = `add-card${producto.id}`
            document.getElementById(idbutton).addEventListener("click",() =>{
                carrito.push(producto);
                console.log(carrito);
                localStorage.setItem("carrito" , JSON.stringify(carrito))
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
        .showToast(); //TERMINA TOASTIFY
    })  //CIERRO EVENTO
            })//FOREACH
        }
function verproducto(){
            fetch('favoritos.json')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                data.forEach(function(producto){
                    const rogelio = `add-card${producto.price}`
                    document.getElementById("verproducto").innerHTML=`<section class="container""> <div class="row">
                    <!-- Product image-->
                    <div class="col-lg-6"
                    <img style="width: 150px; height:100px" src=${producto.img} />
                    </div>
                    <!-- Product details-->
                    <div class="col-lg-3" style="top: 0.5rem; right: 0.5rem">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="text-center">${producto.title}</h5>
                            <!-- Product price-->
                           $${producto.price}
                        </div>
                    </div>
                    
                    <!-- Product actions-->
                    <div class=" col-lg-12">
                        <div class="text-center"><a id="${rogelio}" data-id="${producto.price}"  class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
                    </div>
                    </div> </section>
                    `
                })
            })
        }
const mostrarCarrito = ()=>{
    const precioTotal = carrito.reduce((acumulador,producto)=> acumulador + producto.price, 0)
    
    carrito.forEach((productoagregado)=>{
    document.querySelector(".modal-body").innerHTML+=`<section class="container productoagregado">
    <div class="row">
    <div class="col-lg-3">${productoagregado.id}
    </div>
    <div class="col-lg-3"><img class="card-img-top"  src="${productoagregado.img}"/>
    </div>
    <div class="col-lg-3">${productoagregado.title}
    </div>
    <div class="col-lg-3">$${productoagregado.price}
    </div>
    <button class="botonEliminar btn btn-danger btn-small " id="botonEliminar" onclick="eliminarProducto(${productoagregado.id})"> <i class="fa-solid fa-trash"></i></button>
    <hr class="dropdown-divider">
    </div></section>
    `
    document.querySelector(".preciototal2").innerHTML=`<strong>TOTAL:$${precioTotal}</strong>`
})
}
// VER PRDOUCTO

//ELIMINAR PRODUCTOS
function eliminarProducto(idDelProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    const eliminarDelCarrito = carrito.findIndex((borrar) => borrar.id === idDelProducto)
    carrito.splice(eliminarDelCarrito, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();
    Toastify({
        text: "Haz eliminado un producto del carrito",
        duration: 100000,
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
      }).showToast();
}
const btnVaciar = document.getElementById('vaciarCarrito')
btnVaciar.addEventListener("click", () => {
    let carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();
});
//CARDS DINAMICAS FAVORITAS DESDE JSON
function cargarjson(){
    fetch('favoritos.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        data.forEach(function(producto){
            const rogelio = `add-card${producto.price}`
            document.querySelector(".masVendidos").innerHTML+=`<div class= "col mb-5"> <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" style="width: 225px; height:150px" src=${producto.img} />
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
                <div class="text-center"><a id="${rogelio}" data-id="${producto.price}"  class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
                <button type="button" class="btn btn-primary" onclick="verproducto()" data-bs-toggle="modal" data-bs-target="#exampleModal2">Ver Producto</button>
            </div>
            </div> </div>
            `
        })
    })
}
cargarjson()
//  AGREGAR PRODUCTOS FAVORITOS AL CARRITO
function cargarproductosjsonalcarrito(){
    fetch('favoritos.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        
        data.forEach(function(producto){
            const rogelio = `add-card${producto.price}`
            document.getElementById(rogelio).addEventListener("click",() =>{
                carrito.push(producto);
                console.log(carrito);
                localStorage.setItem("carrito" , JSON.stringify(carrito))
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
        .showToast(); //TERMINA TOASTIFY
    })  //CIERRO EVENTO
            })//FOREACH
        })//CIERRO ULTIMO THEN
    }
cargarproductosjsonalcarrito()
// CARGAR OFERTAS DE JSON
function cargarjsonoferta(){
    fetch('enoferta.json')
    .then(function(res){
        return res.json();
    })
    .then(function(enoferta){
        enoferta.forEach(function(producto){
            const rogelio = `add-card${producto.price}`
            document.querySelector(".enoferta").innerHTML+=`<div class= "col mb-5"> <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" style="width: 225px; height:150px" src=${producto.img} />
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
                <div class="text-center"><a id="${rogelio}" data-id="${producto.price}"  class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Ver Producto</button>
            </div>
            </div> </div>
            `
        })
    })
}
cargarjsonoferta()
//  AGREGAR PRODUCTOS ENOFERTA AL CARRITO
function cargarofertasjsonalcarrito(){
    fetch('enoferta.json')
    .then(function(res){
        return res.json();
    })
    .then(function(enoferta){
        enoferta.forEach(function(producto){
            const rogelio = `add-card${producto.price}`
            document.getElementById(rogelio).addEventListener("click",() =>{
                carrito.push(producto);
                console.log(carrito);
                localStorage.setItem("carrito" , JSON.stringify(carrito))
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
        .showToast(); //TERMINA TOASTIFY
    })  //CIERRO EVENTO
            })//FOREACH
        })//CIERRO ULTIMO THEN
    }
    cargarofertasjsonalcarrito()
// CARGAR CARDS "RECOMENDADOS"
function cargarjsonrecomendados(){
    fetch('recomendados.json')
    .then(function(res){
        return res.json();
    })
    .then(function(enoferta){
        enoferta.forEach(function(producto){
            const rogelio = `add-card${producto.price}`
            document.querySelector(".recomendados").innerHTML+=`<div class= "col mb-5"> <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" style="width: 225px; height:150px" src=${producto.img} />
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
                <div class="text-center"><a id="${rogelio}" data-id="${producto.price}"  class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Ver Producto</button>
            </div>
            </div> </div>
            `
        })
    })
}
cargarjsonrecomendados()
// CARGAR RECOMENDADOS AL CARRITO
function cargarrecomendadosjsonalcarrito(){
    fetch('recomendados.json')
    .then(function(res){
        return res.json();
    })
    .then(function(recomendados){
        recomendados.forEach(function(producto){
            const rogelio = `add-card${producto.price}`
            document.getElementById(rogelio).addEventListener("click",() =>{
                carrito.push(producto);
                console.log(carrito);
                localStorage.setItem("carrito" , JSON.stringify(carrito))
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
        .showToast(); //TERMINA TOASTIFY
    })  //CIERRO EVENTO
            })//FOREACH
        })//CIERRO ULTIMO THEN
    }
    cargarrecomendadosjsonalcarrito()