let listaProductos=["Pantalon", "Remera"]
let listaRecaudacionDetallada=[3000, "Pantalon", 444,"Media", 555, "Remera",2222, "Remera",3333,444];

/*----------------- Objetos -----------------*/
// Objetos -> "describir" a una entidad, vincular distintas propiedades a un mismo objeto

/*----------------- Sintaxis -----------------*/


// key | propiedad | clave


/*
{
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
}

*/


const oferta =()=>{
    console.log("calculo cuanto sale en oferta...")
}

let pantalon={
    marca:"Pepito",
    precio: 3333,
    talles: ["x", "xl", "s", "m", "xxl"],
    descuento: true,
    oferta: oferta
}

console.log(pantalon)