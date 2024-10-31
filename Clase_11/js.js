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

//Logicos --> compara operaciones | devuleve booleanos (true | false)
// && (AND) - ! (NOT) - || (OR)
