var usuariotxt = document.getElementById('usuariotxt');

var contenidoDiv = document.getElementById('contenido');

function login() {
  // que hace aqui?

  var parrafo = document.createElement('p'); //Crea un elemento HTML

  parrafo.innerHTML = 'mensaje de login ' + usuariotxt.value ; // Agrega te


  contenidoDiv.appendChild(parrafo);

}

function registro() {
  // que hace aqui?
}