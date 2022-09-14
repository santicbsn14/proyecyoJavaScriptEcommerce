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
    {id: 1, title: "Almendras peladas x 1kg", descripcion:"Almendra pelada que puede variar su textura, sabor, color y tamaño, generalmente es de piel aspera y rugosa y de sabor agradable", price: 500, img:"https://www.pequerecetas.com/wp-content/uploads/2010/11/propiedades-de-las-almendras-660x441.jpg.webp", category: "frutosSecos"},
    {id: 2, title: "Nueces mariposa x 600gr", descripcion:"Nuez pelada mariposa extra light. Nuez entera, de calidad premium.", price: 700, img:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/01/04/16413064087771.jpg", category: "frutosSecos"},
    {id: 3, title: "Castañas de caju x 1kg", descripcion:"Castañas de caju crudas enteras, x 1kg", price: 400, img:"https://cdnx.jumpseller.com/pargua-gourmet/image/17582671/blog-caju.jpg.jpg?1625703244", category: "frutosSecos"},
    {id: 4, title: "Pasta de mani artesanal", descripcion:"Pasta de maní artesanal sin agregado de azúcar, no tiene sodio. Contiene certificación Kosher.", price: 350, img:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FMEHAHM6ZZBIHK2OH5EPVHJQIE.jpg", category: "untables"},
    {id: 5, title: "Harina de almendras x 250g", descripcion:"Harina de almendras sin piel", price: 675, img:"https://www.hogarmania.com/archivos/202101/harina-de-almendras-beneficios-y-como-se-hace-668x400x80xX-1.jpg", category: "harinas"},
    {id: 6, title: "Harina de  coco", descripcion:"La harina de coco (100% coco en polvo) se obtiene a partir del secado y molido de su pulpa. Tiene una textura similar a otras harinas pero con la cualidad de ser muy absorbente. Contiene una importante cantidad de fibra, y baja en carbohidratos y grasa. Producto non GMO. Apto Kosher", price: 553, img:"https://http2.mlstatic.com/D_NQ_NP_977101-MLA41560217027_042020-O.jpg", category: "harinas"},
    {id: 7, title: "Harina de algarroba", descripcion:"La harina de algarroba es el sustituto ideal del cacao porque es sana y alimenticia, y por su color y sabor muy similar.", price: 551, img:"https://www.recetasingluten.com/wp-content/uploads/2021/11/harina-de-algarroba-1-1024x683.png", category: "harinas"},
    {id:8, title:"Semillas de zapallo pelada", descripcion:"Semilla de zapallo pelada, sin tostar", price: 200, img:"https://i.blogs.es/a30817/pipas2/840_560.jpg", category:"semillas"},
    {id:9, title:"Semillas de sesamo blanco", descripcion:"semillas de sesamo blanco x250gr", price: 360, img:"https://cdnx.jumpseller.com/espesales/image/9534282/resize/480/480?1661180543", category:"semillas"},
    {id:10, title:"Semillas de lino", price: 402, img:"https://www.mentta.com/blog/wp-content/uploads/2022/02/semillas-de-lino-kan-1200x630@abc-768x403.jpg", category:"semillas"},
    {id: 19, title: "Mani Japones", price: 251,img:"https://saboresandinos.com/wp-content/uploads/2021/07/460-Mani-Japones-crocante-2-cuadrada.jpg",  category: "frutosSecos"},
    {id: 23, title: "Mermelada de arandones 'Beepure'", price: 470,img:"https://www.almacencamposverdes.com.ar/wp-content/uploads/2019/04/mermelada.png",  category: "untables"},
    {id: 94, title: "Bebida de  coco", price: 753,img:"https://s.yimg.com/ny/api/res/1.2/hnQAvJpIzD3pAmWUwvdq6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/uu/api/res/1.2/WEKDp170gxM_hsSerpPm8w--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/e6444ee38e59ec23773e6684ad93178f",  "category": "bebidas"},
    {id: 89, title: "Pan de masa madre", price: 858, img:"https://www.recetasderechupete.com/wp-content/uploads/2020/05/Pan-casero-pueblo-1.jpg", category: "pan"},
    {id:33, title:"Bayas de goji", price: 372, img:"https://t1.uc.ltmcdn.com/es/posts/7/7/8/como_hacer_una_infusion_de_bayas_de_goji_33877_paso_1_600.jpg",  category:"china"},
    {id:27, title:"Pan Integral con semillas", price: 351,img:"https://mandolina.co/wp-content/uploads/2020/11/Caseras-Pan.jpg.webp",  category:"pan"},
    {id:27, title:"Pan de avena", price: 359,img:"https://okdiario.com/img/2017/04/08/pan-de-avena-al-horno_-una-receta-saludable-para-desayunar-1-655x368.jpg",  category:"pan"}
];
// MENU DE NAVEGACION DINAMICO //


// FILTRADO DE PRODUCTOS

function filtrarproductosporcategoria(category) {
    document.querySelector(".masVendidos").innerHTML="";
    document.querySelector(".cardsdinamicas").innerHTML="";
    const productosfiltrados = productos.filter((producto)=> producto.category === category)
    productosfiltrados.forEach((producto)=> {
        const idverproducto = `ver-producto${producto.id}`
        const idbutton1 = `cargarProducto-${producto.id}`
        document.querySelector(".cardsdinamicas").innerHTML+=`<div   class= "col mb-5"> <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top"  src=${producto.img} />
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
            <div class="text-center"><a id="${idbutton1}" data-id="${producto.id}"   class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
            <div class="mx-auto"><button type="button" id="${idverproducto}"   onclick="verproducto(${producto.id})" class="btn btn-outline-success mx-4 my-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">Ver Producto</button></div>
        </div>
        </div> </div>
        `
    })
}

//VER PRODUCTO
function verproducto(idDelProducto) {
    const verproducto= productos.find(producto => producto.id == parseInt(idDelProducto))
    const idbutton2 = `agregar-producto${verproducto.id}`
    document.getElementById("verproducto").innerHTML=`<section class="container""> <div class="row">
    <!-- Product image-->
    <div class="col-lg-12"><h2 class="text-center">${verproducto.title}</h2></div>
    <div class="col-lg-12 mx-auto text-center">
    <img class="mx-auto" style="width: 400px; height:200px" src="${verproducto.img}"/>
    </div>
    <!-- Product details-->
    <div class="col-lg-12 my-2" >
           <!-- Product price-->
          <h4 class="btn-success text-center"> $${verproducto.price}</h4>
          <p class="mx-1">${verproducto.descripcion} </p>
          <div class="text-center"><a id="${idbutton2}" data-id="${verproducto.id}"   class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
    </div>
    </div> </section>
    `
//AGREGAR AL CARRITO DESDE EL MODAL
    document.getElementById(idbutton2).addEventListener("click",() =>{
        carrito.push(verproducto);
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
}
// MODAL CARRITO
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
    <div class="col-lg-6"
    <button type="button" class="botonEliminar mx-auto btn btn-danger btn-small " id="botonEliminar" style="width:70px;" onclick="eliminarProducto(${productoagregado.id})"> <i class=" fa-solid fa-2x fa-trash"></i></button>
    </div>
    <hr class="dropdown-divider">
    </div></section>
    `
    document.querySelector(".preciototal2").innerHTML=`<strong>TOTAL:$${precioTotal}</strong>`
})
}
//ELIMINAR PRODUCTOS
function eliminarProducto(idDelProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    const eliminarDelCarrito = carrito.findIndex((borrar) => borrar.id === idDelProducto)
    carrito.splice(eliminarDelCarrito, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();
}
const btnVaciar = document.getElementById('vaciarCarrito')
btnVaciar.addEventListener("click", () => {
    let carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();
});

// //GENERAR CARDS
productos.forEach((producto)=>{
    const idbutton1 = `cargarProducto-${producto.id}`
            const idverproducto = `ver-producto${producto.id}`
            document.querySelector(".cardsdinamicas").innerHTML+=`<div  class= "col mb-5"> <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top"  src=${producto.img} />
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
                <div class="text-center"><a id="${idbutton1}" data-id="${producto.id}"  onclick="agregaralcarrito(${producto.id})"   class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
                <div class="mx-auto"><button type="button" id="${idverproducto}"   onclick="verproducto(${producto.id})" class="btn btn-outline-success mx-4 my-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">Ver Producto</button></div>
            </div>
            </div> </div>
            `
        })

// CARGAR PRODOUCTOS AL CARRITO
function agregaralcarrito(idDelProducto){
    const agregarPRroducto= productos.find(producto => producto.id == parseInt(idDelProducto))
                carrito.push(agregarPRroducto);
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

        }


//CARDS DINAMICAS FAVORITAS DESDE JSON
function cargarjson(){
    fetch('favoritos.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        data.forEach(function(producto){
            const rogelio = `add-card${producto.id}`
            const idverproducto = `ver-producto${producto.id}`
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
                <div class="text-center"><a id="${rogelio}" data-id="${producto.id}"  class="btn btn-outline-dark mt-auto">Agregar al carrito</a></div>
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
            const rogelio = `add-card${producto.id}`
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