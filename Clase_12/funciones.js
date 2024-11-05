//Operadores

222+444
"Hola"+"Jose";
let alumnoo="Juan"
let listaNumeros=[1,2,3,4,5,6];


let lista2=[alumno, true, 1234, "blablabla", listaAlumno,false];

lista1.length >4;
let numero = 22;





/*--------------- Funciones --------------- */

// Instructivo de todas las acciones que tiene que hacer; conjunto de pasos a seguir para resolver algo

/*---------------*/

// Primero las creamos pueden ser de forma -> tradicional o arrow function/ funcion flecha
// Que podemos poner adentro de una funcion: variables, usar variables externas, hacer operaciones, y si la accion es la misma y cambiar los parametros se usan los parentesis.
// Return -> palabra reservada que indica que es lo que queremos que la funcion nos devuelva.

/* 
    Sintaxis tradicional: 
    
    function nombre(parametros){
        accion/es a realizar (los pasos)
    }

*/

/*-------Tradicional--------*/
function suma() {
    let numero1=44;
    let resultado=numero1+55;
    console.log(resultado)

    resultado >100 ? console.log("resultado mayor a 100") : console.log("resultado menor a 100");
};

function suma2(num1, num2){
    let resultado = num1 + num2 + numero;
    console.log(resultado)
    resultado > 100 ? console.log("Resultado mayor a 100") : console.log("Resultado menor a 100");
};

function agregarNumero(numeroNuevo) {
    listaNumeros.push(numeroNuevo);
    console.log("Se agregó el numero "+numeroNuevo); //para que quede el espacio en el console.log hay que separar la comilla
}


function promedio(numeroA, numeroB, numeroC){
    let suma=numeroA+numeroB+numeroC;
    let promedio=suma/3;
    return promedio; //devolveme tal cosa, qué quiero que me devuelva, es propio de la función
    
}

/*-------Funcion Flecha--------*/

/* Sintaxis Funcion Flecha: 
    
    (parametros)=>{
        accion/es que queremos hacer (instrucciones)

        return lo que queremos devolver (optativo)
} 
*/

let funcionPromedio=(numeroA, numeroB, numeroC)=>{
    let suma = numeroA+numeroB+numeroC;
    return sumaBis/3;
}
let sumaBis=() =>{
    let numero1=44; 

    let resultado=numero1+55+numero;
    console.log(resultado)
}




/*---------------*/

// Segundo las invocamos/ejecutamos las veces que sean necesarias
// Llamamos la funcion con sus parentesis, los parentesis son para los parametros y podemos modificar su contenido para sacar distintos resultados, el console.log nos muestra el resultado.
// NO PODEMOS LLAMAR UNA VARIBLE LOCAL PARA MOSTRAR EN CONSOLE, ESTAN ADENTRO DE LA FUNCTION Y NO SON GLOBALES.

suma()
suma2(22, 33);
suma2(999, 232);

sumaBis(50,50,50);

agregarNumero(55)
agregarNumero("daniel")

console.log(promedio(22, 444, 66));
funcionPromedio(34+23+53)
sumaBis();

/* 
Las funciones nos permiten agrupar un conjunto de instrcciones, donde podemos darle distintos ingresos (parametros) y pedirle que nos devuelva algo o no (con el return).
Tenemos dos maneras de crear funciones: tradicional o en flecha.
Siempre creamos primero la funcion (le "enseñamos" al browser que es lo que tiene que hacer).
Invocamos, ejecutamos la funcion las veces y en el momento que necesitemos

Orden -> (Recomendación)

Primero -> creamos variables globales
Segundo -> creamos las funciones
Tercero -> ejecutamos las funciones
*/



// crear una funcion/ crear un programa que logre tomar tres nombres de productos, agregarlos a una lista de productos de una tienda; devolvernos la cantidad de items que tenemos en la lista

let productosTienda=[];

function sumarProductos(producto1, producto2, producto3) {
    productosTienda.push(producto1, producto2, producto3) // agrega al final de la lista lo que coloquemos entre parentesis.

    return productosTienda.length

}

let largoLista = sumarProductos("campera, ","buzo, ","medias. ");

console.log(largoLista);

let  resultado=sumarProductos("campera ", "buzo ", "medias");

resultado>3?console.log("MAS DE TRES PRODUCTOS") : console.log("hay " + resultado+ "productos en la lista")