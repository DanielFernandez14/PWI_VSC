/* -------------------- DOM -------------------- */
/* --------------------------------------------- */

// DOM-> Document Object Model (Modelo de Objeto del Documento) -> Interfaz entre JS + HTML y CSS.
// El DOM nos permite manipular el HTML al que se encuentra vinculado
// Objetos -> transforma/toma al HTML (todo el documento) como un gran objeto: y con las propiedades de objetos poder manipular al documento HTML

// Palabra reservada -> "Document" -> hace referencia al HTML al que este vinculado -> lo muestra en consola console.log(document). 


console.log(document)

console.dir(document) // mostrará el document como un árbol expandible en la consola, permitiéndote explorar todas sus propiedades y métodos.

// Elementos del HTML se le llaman NODOS (son los elementos HTML en "formato" objetos)
// Cómo puedo obtener algun elemento (nodo) del body del HTML??

// Metodos del DOM
// siempre empiezan por la palabra "document"



/* --------------------------------------------- */
/* --------------------------------------------- */
// nodos de HTML por etiquetas --->> Por su etiqueta getElementsByTagName("etiqueta")

let primerH3=document.getElementsByTagName("h3")[0]; //metodo que nos trae un array con todos los nodos del HTML que tienen dicha etiqueta
console.log(primerH3)

console.log(primerH3[0]) // en consola aparece como undefined porque ya decimos que es el nodo 0 en la linea 23 y no serviria usarlo
console.dir(primerH3) // para acceder al primero

// Si quisiera modificar el contenido del nodo?

primerH3.textContent="Subtitulo principal";



/* --------------------------------------------- */
/* --------------------------------------------- */

// nodos de HTML por medio de las clases --->> getElementsByClassName("className")
// me trae un array con todos los nodos del HTML que tengan esa clase

let claseTexto=document.getElementsByClassName("texto"); // nos devuelve un array
console.log(claseTexto); 

/* --------------------------------------------- */
/* --------------------------------------------- */

// Obtener nodos del HTML por medio de su ID -> getElementByID("id");
// nos trae el primer nodo que cumple con ese id (se supone que deberia ser el unico).

const textoB=document.getElementById("textoB")
console.log(textoB)


/* --------------------------------------------- */
/* --------------------------------------------- */


// Nodos del HTML por medio de su selector 
// selector=  .(clase); #(id); sin simbolo (etiqueta);


// -> document.querySelector("selector"); -> Trae el primer elemento (nodo) que cumple con ese selector 
// -> document.querySelectorAll("selector"); -> trae un array con todos los elementos (nodos) que cumplen con ese selector

// 
let h3=document.querySelector("h3");
console.log(h3);

let p=document.querySelectorAll("p");
console.log(p);

let h2=document.querySelectorAll("h2");
console.dir(h2);

/* --------------------------------------------- */
/* --------------------------------------------- */

// Metodos para obtener los nodos del HTML:
/* 
    -> getElementsByTagName("etiqueta");
    -> getElementsByClassName("className");
    
    -> querySelectorAll("selector" || "etiqueta sola");
// Nos trae un array con los nodos
*/
/*
    -> getElementsById("ID");
    ->querySelector()
// nos trae el primer nodo
*/

//Siempre para acceder o modificar una propiedad del HTML por medio de DOM:
// 1ro obtener el nodo
// 2do obtener/modificar su/s propiedad/es

/* --------------------------------------------- */

// propiedades generales ->
// "aria" --> accesibilidad, lectores de pantalla

//classList--> lista de clases
console.log(h2[0].classList);


/* --------------------------------------------- */
/* --------------------------------------------- */


// Si agrego una clase a un elemento, modifico de manera indirecta su estilo (en caso de que dicha clase este definida en el CSS)

// add --> agrega a la lista las clases que quiere
// remove() -> elimina de la lista dicha clase
// toggle() -> alterna entre agregar y sacar una clase (si nota que tiene la clase que colocamos entre parentesis, la saca de la lista, caso contrario la agrega) 

h2[0].classList.add("clase3");
h3.classList.add("clase3");
console.log(h2)

//-----------

h2[0].classList.toggle("clase3");
console.log(h2);


//----------- otra forma de cambiar estilos
textoB.style.backgroundColor="pink";

let boton=document.querySelectorAll("button"); // trae un array "querySelectorAll"
//modificar la propiedad style.display del boton

// boton[0].style.display="none"; //si queremos que desaparezca el boton
boton[0].style.backgroundColor="yellowgreen"

//------------ textContent | innerText -> obtener el texto del elemento

console.log(p[0].textContent)
console.log(p[1].innerText)


//------------ innerHTML --> la estructura HTML interna de ese elemento

let seccion=document.querySelector("section");
console.log(seccion.innerHTML);

console.log(seccion.innerText);



//alt gr + al lado del enter para las comillas ``
seccion.innerHTML=`
    <h3 class="clase3">subtitulo!!</h2>
    <div class="contenedor">
    <p> pequeño texto... </p>
    <button> Hola!! </button>
    </div>
`
console.log(seccion)
console.log(seccion.innerHTML)

// crear elementos y agregarlos al HTML
// crear elementos --> createElement("")


let ancla=document.createElement("a");
ancla.href="https://www.google.com";
ancla.textContent="Ir a Google...";
console.dir(ancla);

// agregar al HTML -> appendChild() -> siempre lo agrega al final del elemento
// nodoPadre.appendChild(nodo)

//seccion.appendChild(ancla);

document.body.appendChild(ancla) // --> agrega al final del body
// agregar al HTML luego de un elemento en particular -> nodoPadre
// insertBefore(nodoNuevo, nodoRef)

document.body.insertBefore(ancla, textoB) // agregar antes de tal elemento


//ejercitacion -> cambiar en todos los li, la clase a "contenedor" y su contenido de texto a "nueva info"
// 1ro llamo al nodo y luego lo modifico


let itemsLista=document.getElementsByTagName("li"); //array con los elementos <li> del HTML
console.log(itemsLista);

//para agregar la clase "contenedor" -> classList.add("contenedor")

//itemsLista.classList.add("contenedor")  //da error porque estoy queriendo modificar la propiedad del array en vez del objeto

//modificar su texto -> nodo.textContent o nodo.innerText
// hicimos un bucle que recorra la lista de todos los <li> que trajimos y les aplicamos a cada uno los cambios solicitados

for(item of itemsLista){
    item.classList.add("contenedor")
    item.textContent="nueva info item.."
};
