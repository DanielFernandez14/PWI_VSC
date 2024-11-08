let listaRecaudacion = [3000,444,555,2222,3333,444];

//programa para saber cuanto es la recaudacion total

let total=0;
let listaNombre=["Daniel", "Matias", "Fernandez"] // para el prompt de abajo y for of

total=total+listaRecaudacion[0]+listaRecaudacion[1]+listaRecaudacion[2];//....
total=total+listaRecaudacion[0]
total=total+listaRecaudacion[1]
total=total+listaRecaudacion[2]
total=total+listaRecaudacion[3]

//estructuras de repeticion - bucles

//for tradicional -> for of | while | do while

//JavaScript -> funciones nativas : estructuras de repeticion
//forEach | map | filter | find

//"Decirle al programa que accion tiene que hacer y cuantas veces lo tiene que repetir"


/*----------------- Sintaxis -----------------*/


/* 
//el for tradicional tiene tres parametros adentro de los parentesis

for(accion previa al bucle; condicion; accion que realiza al final de cada vuelta){
    accion/es que queremos que haga varias veces
}
//lo repite hasta que da false, mientras de true sigue en bucle
*/
//contador++ es lo mismo que contador=contador+1 



/*----------------- For -----------------*/
//        1         1<6(true)
for(let contador=1;contador<6;contador++){
    console.log("Hola Mundo")
};
/* primero creamos un espacio de memoria (una variable) que sea contador=1, despues la condicion que siempre que sea menor que 6 realice las acciones que tiene adentro (el console.log), y una vez que termines cada vuelta sumes 1 a la variable del inicio; cuando llega al 6 da false */

//prompt? -> funcion nativa de JavaScript, nos sirve por ejemplo para recibir strings del usuario
console.log("...accciones luego del bucle");


//programa que pide un nombre y lo agrega a una lista, hasta que el usuario pone la palabra fin.

const agregarNombres=()=>{
    for(let nombre=prompt("Ingrese nombre o fin para terminar");nombre!=="fin";nombre=prompt("Ingrese otro nombre o fin para terminar")){
    listaNombre.push(nombre)
    }
    return listaNombre
}

//                  6                6                 5+1  
for(let indice=0; indice < listaRecaudacion.length; indice++){
    console.log(listaRecaudacion[indice])
    console.log("el indice del item es " +indice)
};

/*----------------- For Of -----------------*/

//recorre todo un array (no puedo usarlo en acciones a repetir que no tengan que ver con un array), recorre de punta a punta toda la lista

/*     
    for(ref of array){
        accion/es a repetir
    }
*/

//ejemploss

/*for(nombre of listaNombre){
    console.log("Hola "+nombre)
};*/
for(item of listaNombre){
    if(item.length<5){
        console.log("Hola "+item)
    }else{
        console.log("Hola "+item+" cómo estás?")
    }
}
// esta accion la repite por cada item de mi lista
//por cada item de mi lista quiero que te fijes el largo y ejecutes una accion u otra

//ejemplo de diferencia entre for tradicional y for of
for(let indice=0; indice < listaRecaudacion.length; indice++){
    total=total+listaRecaudacion[indice]
}
console.log(total);

total=0;

for (recaudacion of listaRecaudacion){
    total=total+recaudacion;
}
console.log(total);






/*----------------- While -----------------*/

/*----------------- Sintaxis -----------------*/

//estructura mas sencilla que el for || lo podemos usar siempre que queramos repetir acciones || mientras la condicion me de verdadero cumplo las acciones dentro de las llaves, caso contrario continua con el resto del codigo || solo se ocupa de la condicion, no hay que generar ni indicarle una accion final, solo nos ocupamos de la condicion

/* 

while(condicion){
    accion/es a repetir
}

*/


let turno=0

function atenderPersonas() {
    

while( turno<3 ){
    let edad = prompt("ingrese edad");
    adultoResponsable=prompt("ingrese si o no, en caso de venir acompañado de un adulto")
    
    if(edad >= 16 || adultoResponsable === "si"){
    console.log("vender entrada");
} else {
    console.log("no cumple con las condiciones para venderle entrada")
}
    turno++    
};
}

let indice = 0;
while(indice< listaRecaudacion.length){
    total=total+listaRecaudacion[indice]
    indice++
}

/*----------------- Do While -----------------*/
// Me permite ejecutarlo por lo menos una vez y si la condicion se cumple lo vuelve a repetir y ahi arranca el bucle

/*----------------- Sintaxis -----------------*/

/* 
    do{
    accion/es a repetir
    }while(condicion)
*/

let nombrePersona="Julia";

do{
    console.log("Hola Julia!")
} while(nombrePersona !== "Julia")
//Ejecuta una vez


while(nombrePersona !== "Julia"){
    console.log("Accion en while tradicional")
    console.log("Hola Julia!")
}
// No ejecuta nunca porque desde un inicio no cumple con la condicion







/*----------------- Ejercicios -----------------*/

//Crear un array de colores (que contenga entre otros colores el color "azul"), y por medio de un bucle hacer que saque el color azul. Mostrar el resultado del array en consola


let listaColores = ["rojo", "verde", "naranja", "purpura", "azul", "morado", "violeta"];

const funcionColores=(lista)=>{

    for(color of lista){
        if(color === "azul"){
         //saque el azul -> usamos el splice() porque no sabemos en que posicion se ubica dicho color
        let indiceAzul=lista.indexOf(color)
        lista.splice(indiceAzul, 1)
        }   
    }  
    console.log(lista)   
}
    
funcionColores(listaColores)

/*  Metodos del array -> array.push(Agrega uno o más elementos al final del array.) || array.pop(Elimina el último elemento del array.) || array.shift(Elimina el primer elemento del array.) || array.unShift(Agrega uno o más elementos al principio del array.) || array.splice(Elimina, agrega o reemplaza elementos en el array, comenzando en un índice dado.) */


const funcionColores2=()=>{

    let colorAzul=listaColores.find((color)=>{return color === "azul"});

    if(colorAzul !== undefined){
        let indiceAzul=lista.indexOf(color);
        lista.splice(indiceAzul,1)
    }
    console.log(listaColores)
}















/*----------------- forEach || map || filter || find -----------------*/

// Metodos propios de JS, todas recorren array


/*----------------- Sintaxis -----------------*/

// array.forEach()=> -> funcion que nos permite recorrer un array y ejecutar lo que necesitemos a cada uno de los componentes del mismo. No modifica la lista original.


/*----------------- forEach -----------------*/

listaRecaudacion.forEach((recaudacion)=>{
    recaudacion=recaudacion-10
    console.log(recaudacion)
});
console.log(listaRecaudacion)



/*----------------- map -----------------*/

let resultado1=listaRecaudacion.map((recaudacion)=>{
    return recaudacion-10
})
console.log(resultado1);

/*----------------- filter -----------------*/

// array.filter(()=>{return condicion}) -> filtrar un array items y envolvermelos en forma de lista. Crea una lista/array nueva y no modifica la original 

let resultado2=listaRecaudacion.filter((items)=>{
    return items > 1000
});
console.log(resultado2);



let resultado4=listaRecaudacion.filter((item)=>{return item < 300});
console.log(resultado4);
// Si no encuentra ningun item de la lista que cumpla con esa condicion nos devuelve un array vacio 



/*----------------- find -----------------*/
// array.find((ref)=>{return condicion}) -> nos trae el primer item del array que cumple con una condicion.

let resultado3=listaRecaudacion.find((item)=>{return item > 1000});
console.log(resultado3);


let resultado5=listaRecaudacion.find((item)=>{return item < 300});
console.log(resultado5);
// Si no encuentra ningun item de la lista con esa condicion nos devuelve un undefined


/*----------------- Tener en cuenta -----------------*/

//for of || forEach() || map() || find() || filter -> son bucles que ejecuto con arrays unicamente

//for tradicional || while || do while -> puedo utilizarlos tanto con arrays como con estructuras a repetir que no involucran arrays

console.log(listaRecaudacion.findIndex((dato)=>{return dato === 555}));
// El findIndex nos trae el indice del item 

