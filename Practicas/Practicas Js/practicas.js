/*
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

Precio 200€

Iva: 21%

El total son 242 €.  //200 + 21*200/100

*/

let precio = 200;
let iva = 21;
let precioConIva = 200 + 21 * 200/100;
console.log(precioConIva)

/*
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.

El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.

Lado 40

El area es 1600

El perímetro es 160
*/

let lado = 40;
let area = lado * lado;
let perimetro = lado * 4;

console.log(area, perimetro);

/*
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

Aparecerá el prompt y el usuario escribirá su nombre:

Usuario escribe juan

Hola Juan.
*/

/*
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

Aparecerá el prompt y el usuario escribirá su nombre:

Usuario escribe juan

Hola Juan.

//Respuesta:
let nombre = prompt("Escribe tu nombre");
let saludo = "Hola " + nombre;
console.log(saludo);
*/


/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

Si el usuario teclea:

3
2
4

La media de los números es 3.

//Respuesta: 
let num1 = parseInt(prompt("Escribe un numero"));
let num2 = parseInt(prompt("Escribe el segundo numero"));
let num3 = parseInt(prompt("Escribe el tercer numero"));
let media = (num1 + num2 + num3) / 3;
console.log(media);
*/

/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros.

El usuario teclea

Num de litros: 20

Num de kilómetros: 80

Has consumido 0.25 l/km  //   20/80

//resultado:
let km=parseInt(prompt("escribe cant km"));
let litros=parseInt(prompt("escribe litros"));

let resultado = km / litros;
console.log("Cantidad de L gastados por km es: " + resultado);
*/

/*
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.
horas : 2

minutos 30

Resultado 2*60*60 + 30*60 = 9000 segundos
//Resultado:
*/


