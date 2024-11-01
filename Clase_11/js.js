/* comentarios en varias lineas */
// comentarios en una linea

/* JS -> lenguaje de comportamiento */
//Operadores
//aritmeticos(calculos) -> + - * /
// + -> suma | concatenacion (string)
//NaN -> Not a Number ( tipo de dato numerico ) palabra reservada

let numero1=333;
let numero2=4444;

numero1+numero2; //4777
let resultado= "hola" + numero1;
console.log(numero1+numero2) //para mostrarlo en consola
console.log(resultado)

//funciones|metodos JS -> console.log(cosas);

console.log("perro"+2)

//Math contiene todos los calculos matematicos


//de comparacion -> devuelven un booleano (true o false)
//simbolos : igual a ( == compara solo el dato (valor) | === compara tipo de dato (string, boolean o number) y valor)

console.log(numero1 == "333"); // la accion la realiza igual pero para verlo tiene que estar en un console.log

console.log(numero1 === "333"); //da false porque es un string

// > < (mayor | menor)| >= <=  (mayor igual que | menor igual que)
200>200 //false
200>=200 //true

// != (distinto compara valor)| !== (distinto compara valor y tipo )
resultado != "hola" //true porque es distinto a let resultado= "hola" + numero1; (n° linea 14)

//Logicos --> Utiliza varias operaciones | devuleve booleanos (true | false)
// && (AND) - ! (NOT) - || (OR)



/* -------------------- AND && -------------------- */

//AND && "y" se fija si varias condiciones dan true para que el resultado final sea verdadero, si una parte da false, va a dar todo false

/* 
let usuario
let password
usuario === usuarioRegistrado && password === passwordRegistrada
*/


//        true               false   
numero1== "333" && 100 + 150 > 300 //False por tener un false


/* -------------------- OR || -------------------- */

//OR "o" || -> con que una de las operaciones me de true, el resultado final siempre da true

const edad=15
const vengaConUnAdulto=true

console.log(edad>=16 || vengaConUnAdulto === true) //con que alguna de las dos de true, el resultado final da true

/* -------------------- NOT ! -------------------- */

//NOT ! -> "no" "negacion" -> niega la operacion (si no se cumple me devuelve verdadero)

!(numero1+111>numero2)
console.log(!(numero1+111>numero2))

//undefined -> indefinido (variable sin contenido por ejemplo)
!undefined
!true // -> false



/* -------------------- Operador Ternario -------------------- */

//Operador ternario -> en base a una condicion indicarle si queremos que haga una accion u otra (condicional) rutas que puede seguir ante ciertas circunstancias.

/* SINTAXIS
condicion ? accion-si-condicion-true : accion-si-condicion-false

Permitir comprar una entrada si es mayor o si viene acompañado de un adulto
*/

edad>=16 || vengaConUnAdulto === true ? console.log("Puede comprar una entrada") : console.log("No puede comprar una entrada")
//ante una condicion que puedo hacer que sea de comparacion, logico o numerico aritmetico, la respuesta que me da que tiene que ser un boolean va a decidir si va por un camino o por otro
// el signo de pregunta ? (significa "si se cumple hace lo siguiente") y los dos puntos : (significa "sino") dividen las partes de las acciones a realizar

numero1 == "333"? numero1+200 > 330 ? console.log("ok"): console.log("Valor menor a 330"): console.log("La variable numero1 no es igual al string 333")