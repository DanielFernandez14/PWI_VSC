/*----------------- Objetos -----------------*/

// Objetos -> "describir" a una entidad, vincular distintas propiedades a un mismo objeto.
// Estructura que nos permite describir una entidad, asociando sus propiedades y valores.
// utilizan llaves {}
// podemos colocar cualquier cantidad de propiedades/claves
// no podemos dejar las propiedaddes sin un valor asignado, generan error
// tipo de datos como valor: TODOS, incluso funciones, variables, arrays
// nombre de propiedades/claves: camelCase, snake_case, no dejar espacios en "marca", "precio", "stock", "talles".
// se pueden usar variables Let o Const porque despues podemos modificar el contenido
// las listas tienen datos, los objetos tienen propiedades y valores
// la consola la ordena en orden alfabetico pero no importa porque para acceder a los valores lo hago refiriendome a la propiedad (a las array no)

/*----------------- Sintaxis -----------------*/


/*  key | propiedad | clave: 


/*
        {
            propiedad: valor,
            propiedad: valor,
            propiedad: valor
        }

*/

let producto={
    marcaDeProducto: "pepito",
    precio_del_producto:2222,
    stock:10,
    talles: ["s", "m", "l", "xl"]
};

const productoLista=["pepito", 2222, 10, ["S", "m", "l", "xl"]]; // array con datos "sueltos" donde no se especifica a que corresponde cada dato


let alumno1={
    nombre: "Daniel",
    apellido: "Fernandez",
    edad: 25,
    alumnoRegular: true,
    correo: "daniel.mfernandez@ejemplo.com"
};
let listaAlumnos = [alumno1,{nombre: "pepe"}, productoLista]

console.log(listaAlumnos)

// Si lo que necesito es acceder al valor de una propiedad de un objeto 
// Sintaxis: objeto.propiedad

console.log(producto.precio_del_producto);
console.log(alumno1.correo)

// modificar una propiedad de un valor
// sintaxis: objeto.propiedad=nuevoValor

alumno1.apellido="Perez"
console.log(alumno1)

// agregar propiedades, sabe que tiene que agregarle el valor porque no lo detecta en la lista (cursos no estaba)
//sintaxis: objeto.nuevaPropiedad=valor

alumno1.cursos=["HTML y CSS", "PWI"];
alumno1.descuento=()=>{console.log("Descuento!!")};
console.log(alumno1);


// eliminar una propiedad
// sintaxis -> delete objeto.propiedad

delete alumno1.alumnoRegular;
console.log(alumno1);

//---------------------------------------------
// antes se llamaban asi a las propiedades de objetos

//llamar/modificar/crear/eliminar a propiedades -> objeto["propiedad"]

console.log(alumno1.edad); // manera actual
console.log(alumno1["edad"]);


// ejercicio -> a) crear un objeto de una cursada que tenga como propiedades el nombre del curso, cant. alumno, nombre docente y fecha de inicio
//           -> b) agregar dicho objeto a una lista de cursos disponible


// a)

const curso={
    nombreCurso: "PWI",
    cantidadAlumnos: 34,
    nombreDelDocente: "Juan Perez",
    fechaDeInicio: "01/01/24"
};

// b)

let listaDeCursos=[
    {
        nombreCurso: "PWA",
        cantidadAlumnos: 44,
        nombreDelDocente: "Markitos",
        fechaDeInicio: "01/01/25"
    }
];

listaDeCursos.push(curso) //agregamos el objeto creado en la parte (A)
console.log(listaDeCursos)

// c) obtener del primer objeto de la listaDeCursos la fecha de incio

let curso1=listaDeCursos[0];
curso1.fechaDeInicio
console.log(curso1.fechaDeInicio);

console.log(listaDeCursos[0].fechaDeInicio);


//filter? -> bucle (funciones nativas JS) que nos devuelve un array con los items que cumplen con una condicion

// E) Cambiar del segundo item de la listaDeCursos, la cantidad de alumnos por 110

// accedemos al item de la lista (a donde ir) y luego acceder a la propiedad para cambiarlo

listaDeCursos[1].cantidadAlumnos=110;
console.log(listaDeCursos)

//acceder al segundo item de los cursos en que esta el alumno1
//accedemos a la propiedad "cursos" del objeto, que como es un array, accedo a su indice para obtener el valor de su segundo item

console.log(alumno1.cursos[1])