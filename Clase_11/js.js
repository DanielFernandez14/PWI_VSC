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


/* -------------------- Funciones Nativas de JS -------------------- */
//Funciones nativas de JS

// alert("hola"); hasta que no le doy el OK

// prompt("") -> obtener informacion desde el browser (por ahora) | nos devuelve un string

//parseInt() | parseFloat() -> transforma lo que coloquemos entre los parentesis en numeros
//parseInt -> numero entero
//parseFloat -> con decimales


console.log("333") //valor string
console.log(parseInt("333")) //number 


/* -------------------- Condicionales if/else -> switch -------------------- */

// if / else -> si/sino

/* 

if(condicion){
accion/es a realizar si se cumple la condicion (condicion me dio true)
}  else{
        accion/es a realizar si NO se cumple la condicion (condicion me dio false)
}

*/

/*if(edad>=16 || vengaConUnAdulto == true){
    alert("puede comprar las entradas")
    console.log("acciones para la compra de la entrada")
} else{
    alert("no cumple con los requisitos")
};*/

numero1 == "333"? numero1+200 > 330 ? console.log("ok"): console.log("Valor menor a 330"): console.log("La variable numero1 no es igual al string 333");

if(numero1 == "333"){
    if(numero1+200 > 300){
        console.log("ok")    
    }else{
        console.log("valor menor a 330")
    }
}else{
    console.log("la variable numero1 no es igual al string 333")
};

//if-> "desmontable", puedo no agregarle el else y solo ocuparme de un camino unicamente

//variables globales se pueden usar en el codigo en general JS
//variable locales se usan dentro del if donde la definí

let producto ="lacteos";
let precioProducto ="100";

if(producto === "lacteos"){
    //variable local
    let descuento=precioProducto*0.10
    precioProducto=precioProducto - descuento; //modificamos el valor de la variable
    console.log(descuento)//existe la variable local porque se encuentra en su entorno donde se creó
}
console.log(precioProducto)


/* -------------------- Condicionales Switch -------------------- */

// No evalua si se cumple o no una condicion, es una instruccion que evalua una expresion y posee distintas ejecuciones segun la respuesta a esa evaluación.
// Para eso evalua cual de los casos presentados coincide con la solución a la expresion indicada en el switch.
// Una vez que coincide la expresion (valor que le dimos), no sigue con las siguientes, por ejemplo el tipo de usuario si es admin no va a seguir con los siguientes de colaborador o cliente (ejemplo de abajo)
// switch evalua caso por caso, no evalua si se cumple o no una condicion, sino evalua el valor de un dato
/* 
ejemplo: tenemos una expresion que según su valor es lo que va a decir; por ejemplo nota 8, entonces tiene un muy bien, nota 10 entonces tiene un sobresaliente
ejemplo2: segun el cargo que tiene un usuario, le doy distintos accesos
*/


/*
Sintaxis: 
switch (key){
    case value:

        break;

    default:

        break;    
}
*/

//segun el cargo que tiene un usuario, le doy distintos accesos (Qué acceso le doy dependiendo el cargo del usuario)
let tipoDeUsuario="administrador";

switch(tipoDeUsuario){
    case "administrador":
        console.log("puede acceder a todo");
        alert ("bienvenido administrador");
        break;

    case "colaborador":
        console.log("rango de colaborador, acceso limitado");
        alert ("bienvenido colaborador");
    break;

    case "cliente":
        console.log("sua um cliemte");
        alert ("bienvenido cliente");
        break;
    default:
        console.log("no tiene acceso a nada");
        alert ("no podes entrar");

    break;
}

//-------------------------------------------||
// Alternativas con otros condicionales


if (tipoDeUsuario === "administrador"){
    console.log("puede acceder a todo");
        alert ("bienvenido administrador");
}
if (tipoDeUsuario === "colaborador"){
    cconsole.log("rango de colaborador, acceso limitado");
        alert ("bienvenido colaborador");
}
if (tipoDeUsuario === "cliente"){
    console.log("sua um cliemte");
        alert ("bienvenido cliente");
}
if (tipoDeUsuario !== "administrador" && tipoDeUsuario !== "colaborador" && tipoDeUsuario !== "cliente"){
    console.log("No tenes acceso a na´")
};

//-------------------------------------------||
// Alternativas con otros condicionales
if (tipoDeUsuario !== "administrador" && tipoDeUsuario !== "colaborador" && tipoDeUsuario !== "cliente"){
    console.log("No tenes acceso a na´")
} else {
    if (tipoDeUsuario === "administrador"){
        console.log("puede acceder a todo");
            alert ("bienvenido administrador");
    }
    if (tipoDeUsuario === "colaborador"){
        cconsole.log("rango de colaborador, acceso limitado");
            alert ("bienvenido colaborador");
    }
    if (tipoDeUsuario === "cliente"){
        console.log("sua um cliemte");
            alert ("bienvenido cliente");
    }
}










/* Repraso: 


Variables: 
-> espacio de memoria para guardar informacion
-> pueden ser globales (las puedo usar en todo el archivo JS)
-> pueden ser locales (solo existen dentro de una estructura, despues no existen mas. No puedo usarlas por fuera de la estructura)

Siempre primero las defino (creo) y luego las puedo utilizar y modificar


Operadores:
->nos permiten hacer acciones aritmeticas de comparacion o logica


Condicionales: 
-> ante una condicion, evaluan si se cumple o no la misma para ver si hace alguna accion u otra.
-> operador ternario (que si o si tengo que definirle que acciones hacer tanto para cuando se cumple como para cuando no se cumple la operacion; solo permite una accion para cada una)

-> If (evalua si se cumple una condicion para realizar lo que tiene entre las llaves, puedo pedirle que haga varias cosas)

->if/else(evalua si se cumple una funcion para ver si ejecuta lo que esta dentro de las llaves del if: si la condicion se cumple ; o si debe hacer las acciones que definimos dentro de las llaves del else : si la condicion no se cumple)


*/

