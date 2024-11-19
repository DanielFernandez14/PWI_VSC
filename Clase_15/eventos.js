/*----------------- Eventos -----------------*/
// Se llaman eventos a interacciones con el usuario que comienzan y finalizan, como cuando el usuario hace click o tipea
// Como no sabemos cuando el usuario va a hacer click, necesitamos unas "alarmas" que nos den aviso que el usuario esta realizando esa accion, asi podemos devolver una respuesta a esa accion. Estas funciones se llaman event handlers o manejadores de eventos
// El elementot en donde se va a estar escuchando este evento | evento | acción a realizar ante ese evento (respuesta al evento)

/* Dos maneras de realizar eventos */

// a) addEventListener() -> lo tienen todos los nodos del HTML, completamente desde el archivo JS
// b) atributos en el documento HTML + funciones en el archivo JS