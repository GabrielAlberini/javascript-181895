// DOM → document object model
// console.log(document)

const titulo = document.querySelector("h1")
const parrafos = document.querySelectorAll("p")
const subtitulo = document.querySelector("h2")
const boton = document.querySelector("button")
const body = document.querySelector("body")

// callbackfn → función de retorno → callback
parrafos.forEach((parrafo, indice) => {
  if (indice === 2) {
    parrafo.classList.add("destacado")
  }
})

subtitulo.innerHTML = "Esto es un <span>subtitulo</span>"

titulo.style.color = "red"
titulo.style.backgroundColor = "blue"

// Evento
// Cualquier acción que pueda hacer el cliente
// evento != método
// evento es una acción del cliente
// métodos es una acción de un objeto

// boton.addEventListener(evento, función)
boton.addEventListener("click", () => {
  body.classList.toggle("dark")
})

