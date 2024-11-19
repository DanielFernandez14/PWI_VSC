/*----------------- Dom -----------------*/

/* DOM -> DOCUMENT OBJECT MODEL */
// Interfaz entre HTML y JS
// console.log (Manera mas visual) / console.dir (Lo da como si fuera un gran objeto)
// la palabra document (ej -> console.log(document) trae son las propiedades que conforman el HTML; contiene metodos/funciones que son propiedades o capacidades de ciertas entidades; podemos llamar a cualquier elemento del HTML)

/*----------------- Metodos para llamar elementos -----------------*/
// Al elemento HTML que llamamos desde JS se llama NODO. 
// Se lo puede llamar por su TagName (document.getElementsByTagName), ID (document.getElementById), Class (document.getElementsByClassName), querySelector(nos trae el primer nodo que encuentra con la etiqueta) y querySelectorAll(nos trae un array con todos los elementos de esa etiqueta)
// Selector: .(clase), #id, sin simbolo (etiqueta)
// Etiquetas "aria" accesibilidad
// ClassList es un metodo -> lista de clases 
/* add(className): Añade una o más clases al elemento.
    remove(className): Elimina una o más clases del elemento.
    toggle(className): Si la clase existe, la elimina; si no existe, la añade. Es útil para alternar el estado de una clase.
    contains(className): Verifica si el elemento tiene una clase específica(devuelve true o false).
    item(index): Devuelve la clase en la posición indicada (por su índice).*/
// Style: el atributo Style no es lo mas recomendable porque se pone directamente en el html. Se puede modificar ej: textoB.style.backgroundColor="pink";
// textContent -> devuelve el contenido textual de un nodo (y sus nodos hijos), sin interpretar ningún código HTML que pudiera estar presente. También se puede usar para establecer el contenido de un elemento, reemplazando todo su texto (y eliminando cualquier HTML dentro de él).
// innerHTML -> muestra la estructura interna del HTML del elemento. devuelve el contenido HTML de un elemento, es decir, el contenido de texto junto con cualquier etiqueta HTML que esté dentro del elemento. También se puede utilizar para establecer el contenido HTML de un elemento, permitiendo añadir o modificar tanto texto como elementos HTML.
// innerText -> también devuelve el contenido de texto de un elemento, pero a diferencia de textContent, tiene en cuenta el estilo visual del contenido, lo que significa que puede excluir texto que esté oculto con display: none o visibility: hidden. Además, respeta los saltos de línea y los espacios en blanco de acuerdo con cómo se muestran en la pantalla, no en el código fuente.

/*----------------- Para qué usariamos el DOM -----------------*/
// por ejemplo para hacer un carrito de compras y que se vaya modificando el contador; se reproduzca un comentario que dejamos; 

/*----------------- Crear Etiquetas y sumarlas al HTML -----------------*/

/*----------------- A) -----------------*/
//  document.createElement(etiqueta)
//  padre.appendChild(hijo) -> agrega al final de un elemento
//  padre.insertBefore(nuevo, ref) -> agregar un nodo adelante de otro

let contenedor=document.createElement("div");
let section=document.querySelector("section");

contenedor.classList.add("contenedor")
contenedor.innerHTML="<h2> titulo </h2> <p> description.... </p>";
section.appendChild(contenedor)


/*----------------- B) -----------------*/
//innerHTML

section.innerHTML=`<div class='contenedor'> 
    <h2> titulo </h2> 
    <p> description.... </p> 
    </div>`

/*----------------- Ejemplo -----------------*/
/*----------------- Ejercicio -----------------*/

// lista de productos y quiero que por cada producto se genere una tarjeta donde muestre el nombre y el precio del producto

let producto=[
    {
    nombre: "Remera",
    precio: 222
    },
    {
    nombre: "Pantalon",
    precio: 333
    },
    {
    nombre: "Zapatilla",
    precio: 444
    },
    {
        nombre: "Buzo",
        precio: 555
    }
];

let resultado=producto.map((prod)=>{
    let contenedor=document.createElement("div");
    contenedor.classList.add("tarjeta");
    contenedor.innerHTML=`
    <h3>${prod.nombre}</h3>
    <p> ${prod.precio} </p> 
    `
// innerHTML entre llave {} para que aparezca lo que queremos
    return section.appendChild(contenedor)
})
console.log(resultado);

let prod={nombre:"titulo"}
console.log(resultado)

console.log("<h3>"+prod.nombre+"</h3>")
console.log(`<h3>${prod.nombre}</h3>`)
console.log(`<h3>"prod.nombre"</h3>`)


let subtitulos=document.getElementsByTagName("h4"); //array

for (let i = 0; i < subtitulos.length; i++) {
    subtitulos[i].textContent="Nuevo subtitulo";    
}
