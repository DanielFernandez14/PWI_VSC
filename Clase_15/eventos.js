/*----------------- Eventos -----------------*/
// Se llaman eventos a interacciones con el usuario que comienzan y finalizan, como cuando el usuario hace click o tipea
// Como no sabemos cuando el usuario va a hacer click, necesitamos unas "alarmas" que nos den aviso que el usuario esta realizando esa accion, asi podemos devolver una respuesta a esa accion. Estas funciones se llaman event handlers o manejadores de eventos
// Partes de un EVENTO --> El elemento en donde se va a estar escuchando este evento | evento | acción a realizar ante ese evento (respuesta al evento)

/*----------------- Tipos de Eventos -----------------*/
// click - chance - blur - mouseover



/* Dos maneras de realizar eventos */

// a) addEventListener() -> lo tienen todos los nodos del HTML, completamente desde el archivo JS, se aplica unicamente a un NODO singular, no en un array, etc, y si quiero que una accion se aplique en varios tendria que hacer un bucle para que realice nodo por nodo (ejemplo botones) 
/*----------------- SINTAXIS -----------------*/
/*
nodo.addEventListener("evento", ()=>{accion/es a realizar ante ese evento})
*/

let botones=document.getElementsByTagName("button");
let lista=[]

// esto es la declaracion de la funcion, no es la ejecucion de la funcion, aca le damos los parametros que en este caso es una funcion
// a las funciones que pasamos como parametros se le suele decir "callback"
botones[0].addEventListener("click", (event)=>{

    console.dir(event)
    event.target.style.backgroundColor="yellow"//llamar al nodo en donde ocurrio el evento (event.target)
    botones[0].style.backgroundColor="pink"
    console.log("Se clickeo el boton")
    let titulo=document.querySelector("h3")
    titulo.textContent="Cuando se hace click se cambia esto"

    lista.push("Sumando items...")
});
// las funciones las podemos escribir en una variable y despues las podemos poner directamente con su nombre dentro de otras declaraciones
let cambioColor=()=>{
    botones[0].style.background="green";
}
// cuando se aprete el boton2 se va a cambiar a green el color del button 1; 
// solo la tenemos que nombrar a la funcion y no ejecutarla con "cambioColor()" los parentesis
botones[1].addEventListener("mouseover", cambioColor)



// Si quiero que una misma accion la ejecute en una lista de nodos, hacemos el bucle ej->
/*for (boton of botones){
    boton.addEventListener("mouseover",()=>{
        boton.style.backgroundColor="pink";
    })
};*/





// b) atributos en el documento HTML + funciones en el archivo JS

// a los evento los trato como atributos y les paso como valor una funcion
// eventos -> atributos: on+evento - onchange - onblur - onmouseover

const cambiarColorBoton=(parametro)=>{
    console.dir(parametro.target) // nodo en donde ocurre el evento 
    // parametro.target.style.backgroundColor="salmon"
    let nodo=parametro.target
    console.log(nodo.textContent)
    botones[2].style.backgroundColor="salmon"
};

const mouseOver1=()=>{
    botones[2].style.backgroundColor="red"
    botones[2].textContent="Cambio a Boton 3"
};

console.dir(botones[2])


// cuando se pulse en el item 2, desplegar el submenu
// eventos (ante una accion del usuario tiene que haber una respuesta)
// eventos -> click/onclick
// elemento/nodo -> item 2 -> <li>
// accion -> mostrar el submenu (funcion)


let cambio=true;


function mostrarSubmenu() {
    let submenu=document.querySelector(".submenu");

    if(cambio){
        submenu.classList.add("mostrar");
    submenu.classList.remove("ocultar");
    } else {
        submenu.classList.remove("mostrar");
        submenu.classList.add("ocultar");
    }
    cambio = !cambio; // cambio = !true (false)
};


/*----------------- Objeto Event -----------------*/
// objeto event -> objeto que viene como respuesta del evento ocurrido donde tenemos la informacion de lo que acaba de ocurrir, con que lo realizo, cuanto tiempo tardo, el nodo en el que se ejecutó. 
// muestra qué pasó, desde que hacemos el click o pasamos el mouse por arriba, toda la info la muestra, lo podemos ver con un console.dir linea 26
// palabra reservada que solo existe una vez ocurrido el evento -> event
