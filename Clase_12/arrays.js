// variables

//creamos y asignamos un nombre
//utilizarlas y modificarlas

let alumno ="Daniel";
let alumno1="Juli";

console.log(alumno);
console.log(alumno1)
//deberiamos armar un por uno para mostrarlo

/* ----------------------- ARRAYS ----------------------- */

// Arrays - Arreglos - Listas -> posibilidad de agrupar una lista de datos (boleanos, numbers, string) o por ejemplo una lista de empleados, precios, etc... no hace falta que enumere uno por uno. Son estructuras que nos permiten agrupar datos. Nos permite tener mayor caudal de informacion. 
// Utilizan [] -> indica que adentro va un array una lista, y separa a cada item de la lista con una coma (,) menos el último item de la lista.
//Las listas pueden ser de cualquier tipo de dato.
/*
Las listas se pueden modificar y perder si usamos por ejemplo: 
"let listaAlumno= ["Daniel", "Julia", "Nicolas"];
Luego mas adelante si nos olvidamos de esta variable y la volvemos a usar listaAlumno para otra varibale y perdemos el array. Con un Const nos tira error directamente, pero si se puede modificar aunque sea un const porque es una lista, el contenido se puede modificar, agregar, sacar pero sigue siendo una lista.
*/
// El largo de la lista siempre es un numero mas que el indice mas grande que tiene, Ejemplo: nos marca 5 en consola, son 5 items pero se cuentan del 0,1,2,3,4



// En la consola del navegador 
// Indice / index     0         1         2          3       4
let listaAlumno = ["Daniel", "Julia", "Nicolas", "Agustin", true];
console.log(listaAlumno);
const lista1=[alumno, true, 1234, "blablabla", listaAlumno,false];
console.log(lista1);
const listaNueva=[];



// Largo de una lista -> Length -> metodo de JS -> lista.Length

console.log(listaAlumno.length);

//obtener un item de la lista -> lista (indice)

listaAlumno[3];
console.log(listaAlumno[3]);

/* ----------------------- Metodos del Array ----------------------- */
//array.metodo()


// Agregar items a la lista -> Push() 
// Sintaxis -> variable / array.push(nuevoItemAAgregar) 
// El .push() lo agrega al final de la lista

listaAlumno.push("Gabriel Tomate");
listaAlumno.push("Julio Verne", "Juanito");
console.log(listaAlumno);

/* ----------------------- */

// Agrega items a la lista al inicio de la lista -> unshift()
// Sintaxis -> variable / array.unshift(itemsNuevo)

listaAlumno.unshift("Julio Verne");
console.log(listaAlumno);

/* ----------------------- */

// Sacar primer item de la lista -> Shift() no hace falta poner nada adentro de los parentesis porque saca el primero, se puede poner varias veces.


listaAlumno.shift(); // Sacó a Julio Verne
listaAlumno.shift(); // Sacó a Daniel
console.log(listaAlumno);

// Los que saquemos los podemos poner en una variable y que nos la muestre en consola
let alumnoFueraDeLista=listaAlumno.shift(); // Sacó a Julia
console.log(alumnoFueraDeLista); // Muestra que sacó a Julia del Array

/* ----------------------- */

// Sacar primer item del final de la lista -> Pop()
let sacarUltimo = listaAlumno.pop();
console.log(sacarUltimo)
console.log(listaAlumno.pop())
console.log(listaAlumno)

/* ----------------------- */

// Modificaciones en el medio de la lista -> Splice()
// Permite sacar, agregar y modificar items en cualquier posicion de la lista
// Splice tiene tres parametros -> Indice, Cantidad (hacia la derecha, ), opcional-nuevoValor.

listaAlumno.splice(2, 1, "Diana");
console.log(listaAlumno); // cambió el true por Diana

listaAlumno.splice(2, 1, "Francisco Perez", alumnoFueraDeLista) // agregamos a julieta de nuevo
console.log(listaAlumno) // mostramos los agregados

/* ----------------------- */

// Metodo que nos permite saber el indice (ver en que posicion esta de la lista, sirve para listas muy largas o cortas igual) de algun item -> IndexOf()


let indiceAlumno=listaAlumno.indexOf("Agustin");
console.log(indiceAlumno) // En consola nos dice que "Agustin" esta en la posicion 1

let indiceAlumno1=listaAlumno.indexOf("Diana");
console.log(indiceAlumno1)
// Si sale -1 quiere decir que no esta en la lista, estaba mas arriba del codigo


/* ----------------------- */

// Cortar un array en una porcion; me arma un array nuevo que es una parte del array original -> Slice()
//Sintaxis -> array.slice(indice-inicial,indice-final)
// Toma a partir del indice inicial que coloco hasta el indice final que coloco (ete ultimo no se incluye)

listaNueva.push(false, alumno, alumno1, indiceAlumno, "bla", "otro item");
console.log(listaNueva);

listaNueva.slice(0-3);
console.log(listaNueva);


