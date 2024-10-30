//COMENTARIOS DE UNA LINEA
/*COMENTARIOS DE MAS DE UNA LINEA*/

/* lenguaje de comportamiento, interacciones que podemos hacer con el sitio */
/* funciones como si fueran "recetas" */
/* nosotros vemos el resultado, es poco tipado*/

let nombre = "Daniel";
let apellido = "Fernandez";
let edad = "25";
let mascota ="Uma"

console.log(nombre, apellido, edad, mascota);

/* ================================ */
/*Number*/
/* ================================ */
/*Con variables de valores numéricos podes realizar operaciones matemáticas: sumas, restas, multiplicaciones,etc. 
Numeros decimales con punto "." */

var numeroA = 1;
let numeroB = 2;
const NUMEROC = 3;

let resultadoSuma = numeroA + numeroB;
let resultadoResta = numeroB - numeroA;
let resultadoProducto = numeroB * NUMEROC;

console.log(resultadoProducto, resultadoResta, resultadoSuma);

/* ================================ */
/*String*/
/* ================================ */
/*Con variables de tipo string (texto) se puede concatenar los valores, es decir, combinarlas. Todo lo que este adentro de comillas JS lo interpreta como string*/
var textoA = "FULL ";
let textoB = "STACK ";
const BLANCO = " ";

let resultadoA = textoA + textoB;
let resultadoB = textoB + 1 ;
let resultadoC = textoA + BLANCO + textoB;

console.log(resultadoA, resultadoB, resultadoC);

/* ================================ */
/*Boolean*/
/* ================================ */
/* Verdadero y falso -> palabras asignadas por JS */
true 
false

/* ================================ */
/*PROMPT, CONSOLA Y ALERT*/
/* ================================ */


/* La sentencia prompt() mostrará un cuadro de diálogo para
que el usuario ingrese un dato. Se puede proporcionar un
mensaje que se colocará sobre el campo de texto. El valor
que devuelve es una cadena que representa lo que el usuario
ingresó.*/

// let nombreIngresado = prompt("Ingrese su nombre"); 


/* La sentencia console.log() muestra el mensaje que pasemos
como parámetro a la llamada en la consola JavaScript del
Navegador web. Se muestra en que linea de codigo está*/

console.log("Mensaje de prueba");

/* La sentencia alert() mostrará una ventana sobre la página web
que estemos accediendo mostrando el mensaje que se pase
como parámetro a la llamada. */

//alert("¡Hola Mundo!");

let entrada = prompt("Ingrese una letra");
let salida = entrada + " " + "Ingresada";
alert(salida);


/* Variables: almacenar informacion -> espacio de memoria donde guardar info que utilizamos a lo largo de todo mi documento JS */

//Crear variables -> palabra reservada (let - const - var)
//var nombre = "Daniel"; que el nombre este relacionado al contenido que va a tener 

var persona = "Marta"; /* VAR no muy recomendable porque es poco estricta, muy permisiva y da lugar al error humano */

let otraPersona = "José"; /* evita que creemos mas de un espacio de memoria con el mismo nombre | permite cambiar el contenido si queremos*/
// let otraPersona = "aaaa" -> tira error porque no permite dos variables con el mismo nombre
console.log(otraPersona);

const numero = 1407; /* evita crear mas de un espacio de memoria con el mismo nombre | impide cambiar su contenido una vez creado */
//numero=222 nos tira error porque es const y no se puede modificar el numero



