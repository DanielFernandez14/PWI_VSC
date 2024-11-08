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
    accoon/es que queremos que haga varias veces
}
//lo repite hasta que da false, mientras de true sigue en bucle
*/
//contador++ es lo mismo que contador=contador+1 



/*----------------- For -----------------*/
//        1         1<6(true)
for(let contador=1;contador<6;contador++){
    console.log("Hola Mundo")
};
/* primero creamos un espacio de memoria (una variable) que sea contador=1, despues la condicion que siempre que menor que 6 realice las acciones que tiene adentro (el console.log), y una vez que termines cada vuelta sumes 1 a la variable del inicio; cuando llega al 6 da false */

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

//estructura mas sencilla que el for || lo podemos usar siempre que queramos repetir acciones || mientras la condicion me de verdadero cumplo las acciones dentro de las llaves, caso contrario continua con el resto del codigo

/* 

while(condicion){
    accion/es a repetir
}

*/


let turno=0

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


